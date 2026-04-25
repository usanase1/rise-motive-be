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
      orderBy: { createdAt: "desc" },
    });
  }

  // GET SINGLE ADMIN BY ID
  static async getAdminById(id: number) {
    return prisma.admin.findUnique({
      where: { id },
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
  }

  // FIND BY EMAIL (useful for auth)
  static async findByEmail(email: string) {
    return prisma.admin.findUnique({
      where: { email },
    });
  }

  static async createAdmin(data: {
    fullName: string;
    email: string;
    password: string;
    role?: "ADMIN" | "SUPER_ADMIN";
  }) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      return await prisma.admin.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          password: hashedPassword,
          role: data.role ?? "ADMIN",
        },
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
    } catch (error) {
      console.error("❌ createAdmin error:", JSON.stringify(error, null, 2)); //
      throw error; // re-throw so controller catches it
    }
  }
  // UPDATE ADMIN
  static async updateAdmin(
    id: number,
    data: {
      fullName?: string;
      email?: string;
      password?: string;
      role?: "ADMIN" | "SUPER_ADMIN";
    },
  ) {
    const updatePayload: Record<string, unknown> = { ...data };

    if (data.password) {
      updatePayload.password = await bcrypt.hash(data.password, 10);
    }

    return prisma.admin.update({
      where: { id },
      data: updatePayload,
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
  }

  // ACTIVATE ADMIN
  static async activateAdmin(id: number) {
    return prisma.admin.update({
      where: { id },
      data: { isActive: true },
      select: { id: true, fullName: true, isActive: true },
    });
  }

  // DEACTIVATE ADMIN
  static async deactivateAdmin(id: number) {
    return prisma.admin.update({
      where: { id },
      data: { isActive: false },
      select: { id: true, fullName: true, isActive: true },
    });
  }

  // DELETE ADMIN
  static async deleteAdmin(id: number) {
    return prisma.admin.delete({
      where: { id },
    });
  }
}
