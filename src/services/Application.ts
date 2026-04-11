import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import {
  CreateApplicationDocRequest,
  UpdateApplicationDocRequest,
} from "../types";

export class ApplicationDocService {
  // helper to generate a unique tracking code
  private static generateTrackingCode(): string {
    return `APP-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. APP-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateApplicationDocRequest) {
    return prisma.applicationDocRequest.create({
      data: {
        ...data,
        trackingCode: ApplicationDocService.generateTrackingCode(),
      },
    });
  }

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.applicationDocRequest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.applicationDocRequest.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    return prisma.applicationDocRequest.findUnique({ where: { id } });
  }

  // UPDATE
  static async update(id: number, data: UpdateApplicationDocRequest) {
    return prisma.applicationDocRequest.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    return prisma.applicationDocRequest.delete({ where: { id } });
  }
  // ... rest unchanged
}
