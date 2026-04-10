import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {

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

      const update: any = {
        loginAttempts: attempts
      };

      if (attempts >= 3) {
        update.isActive = false;
      }

      await prisma.admin.update({
        where: { email },
        data: update
      });

      throw new Error("Invalid credentials");
    }

    await prisma.admin.update({
      where: { email },
      data: {
        loginAttempts: 0,
        lockedUntil: null
      }
    });

    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return {
      token,
      admin
    };
  }

  static async getProfile(adminId: number) {
    return prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true
      }
    });
  }
}