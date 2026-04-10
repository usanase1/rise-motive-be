import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

export class AdminServices {
  
  // GET ALL ADMINS
  static async getAllAdmins() {
    return prisma.admin.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // ACTIVATE ADMIN
  static async activateAdmin(id: number) {
    return prisma.admin.update({
      where: { id },
      data: {
        isActive: true,
      },
    });
  }

  // DEACTIVATE ADMIN
  static async deactivateAdmin(id: number) {
    return prisma.admin.update({
      where: { id },
      data: {
        isActive: false,
      },
    });
  }

  // FIND BY EMAIL (useful for auth)
  static async findByEmail(email: string) {
    return prisma.admin.findUnique({
      where: { email },
    });
  }

  // CREATE ADMIN (helper for seed or future use)
  static async createAdmin(data: {
    fullName: string;
    email: string;
    password: string;
    role?: "ADMIN" | "SUPER_ADMIN";
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.admin.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
        role: data.role ?? "ADMIN",
      },
    });
  }
}