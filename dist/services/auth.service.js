"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../config/prisma"));
const email_service_1 = require("./email.service");
const JWT_SECRET = process.env.JWT_SECRET || "rise-motive-secret";
const JWT_EXPIRES_IN = "7d";
const emailService = new email_service_1.EmailService();
class AuthService {
    // Generate random password
    generatePassword() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
    // Register a new admin (requires SUPER_ADMIN authentication)
    async register(dto) {
        // Check if email already exists
        const existing = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (existing)
            throw new Error("Email already registered");
        // For regular registration, only allow ADMIN role
        if (dto.role && dto.role !== "ADMIN") {
            throw new Error("Only ADMIN role can be registered through this endpoint");
        }
        // Generate auto password
        const autoPassword = this.generatePassword();
        const hashedPassword = await bcryptjs_1.default.hash(autoPassword, 10);
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
        const admin = await prisma_1.default.admin.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                password: hashedPassword,
                role: dto.role || "ADMIN",
                otpCode,
                otpExpiresAt,
                isEmailVerified: false, // Must verify OTP first
            },
        });
        emailService.sendWelcomeEmail({
            fullName: dto.fullName,
            email: dto.email,
            password: autoPassword, // Send auto-generated password
            role: dto.role || "ADMIN",
            otpCode,
        }).catch(console.error);
        // Remove password from response
        const { password, ...adminWithoutPassword } = admin;
        return adminWithoutPassword;
    }
    // Initial system setup (no authentication required)
    async setup(dto) {
        // Check if any admins exist
        // const adminCount = await prisma.admin.count();
        // if (adminCount > 0) throw new Error("System already initialized");
        // Check if email already exists
        const existing = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (existing)
            throw new Error("Email already registered");
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(dto.password, 10);
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
        const admin = await prisma_1.default.admin.create({
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
    async login(dto) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (!admin)
            throw new Error("Invalid email or password");
        if (!admin.isActive)
            throw new Error("Account is deactivated");
        // TEMPORARY: Unblock login if email deliverability fails on Railway
        // if (!admin.isEmailVerified) throw new Error("Please verify your email address to log in.");
        const isPasswordValid = await bcryptjs_1.default.compare(dto.password, admin.password);
        if (!isPasswordValid)
            throw new Error("Invalid email or password");
        const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email, role: admin.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const { password, ...adminWithoutPassword } = admin;
        return {
            token,
            admin: adminWithoutPassword,
        };
    }
    // Get all admins (super admin only)
    async getAllAdmins() {
        return prisma_1.default.admin.findMany({
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
    async deactivateAdmin(id) {
        return prisma_1.default.admin.update({
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
    async deleteAdmin(id) {
        const admin = await prisma_1.default.admin.findUnique({ where: { id } });
        if (!admin)
            throw new Error("Admin not found");
        return prisma_1.default.admin.delete({
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
    async getProfile(id) {
        const admin = await prisma_1.default.admin.findUnique({
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
        if (!admin)
            throw new Error("Admin not found");
        return admin;
    }
    // Verify Email OTP
    async verifyEmail(dto) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (!admin)
            throw new Error("Invalid email");
        if (admin.isEmailVerified)
            throw new Error("Email is already verified");
        if (!admin.otpCode || admin.otpCode !== dto.otpCode) {
            throw new Error("Invalid verification code");
        }
        if (admin.otpExpiresAt && admin.otpExpiresAt < new Date()) {
            throw new Error("Verification code has expired");
        }
        await prisma_1.default.admin.update({
            where: { id: admin.id },
            data: {
                isEmailVerified: true,
                otpCode: null,
                otpExpiresAt: null,
            },
        });
        return { message: "Email verified successfully. You can now log in." };
    }
    // Verify OTP for first login
    async verifyOtp(dto) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (!admin)
            throw new Error("Invalid email");
        if (admin.isEmailVerified)
            throw new Error("Email is already verified");
        if (!admin.otpCode || admin.otpCode !== dto.otpCode) {
            throw new Error("Invalid verification code");
        }
        if (admin.otpExpiresAt && admin.otpExpiresAt < new Date()) {
            throw new Error("Verification code has expired");
        }
        await prisma_1.default.admin.update({
            where: { id: admin.id },
            data: {
                isEmailVerified: true,
                otpCode: null,
                otpExpiresAt: null,
            },
        });
        return {
            message: "OTP verified successfully. You can now log in.",
            requiresPasswordChange: true
        };
    }
    // Change password (for first login or password reset)
    async changePassword(adminId, newPassword, currentPassword) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { id: adminId },
        });
        if (!admin)
            throw new Error("Admin not found");
        // If current password is provided, verify it
        if (currentPassword) {
            const isCurrentPasswordValid = await bcryptjs_1.default.compare(currentPassword, admin.password);
            if (!isCurrentPasswordValid)
                throw new Error("Current password is incorrect");
        }
        // Hash new password
        const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 10);
        // Update password
        await prisma_1.default.admin.update({
            where: { id: adminId },
            data: { password: hashedNewPassword },
        });
        // Send email notification about password change
        emailService.sendPasswordChangeNotification({
            fullName: admin.fullName,
            email: admin.email,
        }).catch(console.error);
        return { message: "Password changed successfully" };
    }
    // Update Auth Profile
    async updateProfile(id, dto) {
        const admin = await prisma_1.default.admin.update({
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
exports.AuthService = AuthService;
