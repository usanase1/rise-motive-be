import {prisma} from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {

  // LOGIN
  static async login(email: string, password: string) {
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) throw new Error("Invalid credentials");

    if (!admin.isActive) throw new Error("Account is disabled");

    if (admin.lockedUntil && admin.lockedUntil > new Date()) {
      throw new Error("Account temporarily locked");
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      const attempts = admin.loginAttempts + 1;

      const update: any = { loginAttempts: attempts };

      if (attempts >= 3) {
        update.isActive = false;
      }

      await prisma.admin.update({ where: { email }, data: update });

      throw new Error("Invalid credentials");
    }

    await prisma.admin.update({
      where: { email },
      data: { loginAttempts: 0, lockedUntil: null },
    });

    const token = jwt.sign(
      { id: admin.id, role: admin.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const { password: _, ...adminWithoutPassword } = admin;

    return { token, admin: adminWithoutPassword };
  }

  // GET PROFILE
  static async getProfile(adminId: number) {
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!admin) throw new Error("Admin not found");

    return admin;
  }

  // UPDATE PROFILE
  static async updateProfile(
    adminId: number,
    data: { fullName?: string; email?: string }
  ) {
    if (data.email) {
      const existing = await prisma.admin.findUnique({
        where: { email: data.email },
      });
      if (existing && existing.id !== adminId) {
        throw new Error("Email already in use");
      }
    }

    return prisma.admin.update({
      where: { id: adminId },
      data,
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  // CHANGE PASSWORD
  static async changePassword(
    adminId: number,
    currentPassword: string,
    newPassword: string
  ) {
    const admin = await prisma.admin.findUnique({ where: { id: adminId } });

    if (!admin) throw new Error("Admin not found");

    const isMatch = await bcrypt.compare(currentPassword, admin.password);

    if (!isMatch) throw new Error("Current password is incorrect");

    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.admin.update({
      where: { id: adminId },
      data: { password: hashed },
    });

    return { message: "Password updated successfully" };
  }

  // LOGOUT (token blacklist via DB)
  static async logout(adminId: number, token: string) {
    await prisma.tokenBlacklist.create({
      data: {
        token,
        adminId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7d
      },
    });

    return { message: "Logged out successfully" };
  }

  // VERIFY TOKEN IS NOT BLACKLISTED
  static async isTokenBlacklisted(token: string): Promise<boolean> {
    const entry = await prisma.tokenBlacklist.findUnique({ where: { token } });
    return !!entry;
  }
}