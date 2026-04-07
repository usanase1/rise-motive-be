import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";
import { RegisterAdminDto, LoginDto, VerifyEmailDto, UpdateProfileDto } from "../dtos/auth.dto";
import { EmailService } from "./email.service";

const JWT_SECRET = process.env.JWT_SECRET || "rise-motive-secret";
const JWT_EXPIRES_IN = "7d";
const emailService = new EmailService();

export class AuthService {

  // Register a new admin (requires SUPER_ADMIN authentication)
  async register(dto: RegisterAdminDto) {
    // Check if email already exists
    const existing = await prisma.admin.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new Error("Email already registered");

    // For regular registration, only allow ADMIN role
    if (dto.role && dto.role !== "ADMIN") {
      throw new Error("Only ADMIN role can be registered through this endpoint");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    const admin = await prisma.admin.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        password: hashedPassword,
        role: "ADMIN", // Always ADMIN for regular registration
        otpCode,
        otpExpiresAt,
      },
    });

    emailService.sendWelcomeEmail({
      fullName: dto.fullName,
      email: dto.email,
      password: dto.password, // Only time they will see this unhashed
      role: dto.role ?? "ADMIN",
      otpCode,
    }).catch(console.error);

    // Remove password from response
    const { password, ...adminWithoutPassword } = admin;
    return adminWithoutPassword;
  }

  // Initial system setup (no authentication required)
  async setup(dto: RegisterAdminDto) {
    // Check if any admins exist
    // const adminCount = await prisma.admin.count();
    // if (adminCount > 0) throw new Error("System already initialized");

    // Check if email already exists
    const existing = await prisma.admin.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new Error("Email already registered");

    // Hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    const admin = await prisma.admin.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        password: hashedPassword,
        role: "SUPER_ADMIN",
        otpCode,
        otpExpiresAt,
      },
    });

    emailService.sendWelcomeEmail({
      fullName: dto.fullName,
      email: dto.email,
      password: dto.password,
      role: "SUPER_ADMIN",
      otpCode,
    }).catch(console.error);

    // Remove password from response
    const { password, ...adminWithoutPassword } = admin;
    return adminWithoutPassword;
  }

  // Login
  async login(dto: LoginDto) {
    const admin = await prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin) throw new Error("Invalid email or password");
    if (!admin.isActive) throw new Error("Account is deactivated");
    if (!admin.isEmailVerified) throw new Error("Please verify your email address to log in.");

    const isPasswordValid = await bcrypt.compare(dto.password, admin.password);
    if (!isPasswordValid) throw new Error("Invalid email or password");

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    const { password, ...adminWithoutPassword } = admin;

    return {
      token,
      admin: adminWithoutPassword,
    };
  }

  // Get all admins (super admin only)
  async getAllAdmins() {
    return prisma.admin.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // Deactivate admin account
  async deactivateAdmin(id: number) {
    return prisma.admin.update({
      where: { id },
      data: { isActive: false },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
  }

  // Permanently delete an admin
  async deleteAdmin(id: number) {
    const admin = await prisma.admin.findUnique({ where: { id } });
    if (!admin) throw new Error("Admin not found");

    return prisma.admin.delete({
      where: { id },
      select: {
        id: true,
        fullName: true,
        profilePicture: true,
        email: true,
      },
    });
  }

  // Get logged in admin profile
  async getProfile(id: number) {
    const admin = await prisma.admin.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
    if (!admin) throw new Error("Admin not found");
    return admin;
  }

  // Verify Email OTP
  async verifyEmail(dto: VerifyEmailDto) {
    const admin = await prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin) throw new Error("Invalid email");
    if (admin.isEmailVerified) throw new Error("Email is already verified");
    if (!admin.otpCode || admin.otpCode !== dto.otpCode) {
      throw new Error("Invalid verification code");
    }
    if (admin.otpExpiresAt && admin.otpExpiresAt < new Date()) {
      throw new Error("Verification code has expired");
    }

    await prisma.admin.update({
      where: { id: admin.id },
      data: {
        isEmailVerified: true,
        otpCode: null,
        otpExpiresAt: null,
      },
    });

    return { message: "Email verified successfully. You can now log in." };
  }

  // Update Auth Profile
  async updateProfile(id: number, dto: UpdateProfileDto) {
    const admin = await prisma.admin.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        fullName: true,
        profilePicture: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
    return admin;
  }
}