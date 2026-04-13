import { prisma } from "../lib/prisma";
import { sendTrackingEmail } from "../utils/email";
import { randomBytes } from "crypto";
import {
  CreateApplicationDocRequest,
  UpdateApplicationDocRequest,
} from "../types";

export class ApplicationDocService {
  private static generateTrackingCode(): string {
    return `APP-${randomBytes(4).toString("hex").toUpperCase()}`;
  }

  static async create(data: CreateApplicationDocRequest) {
    const result = await prisma.applicationDocRequest.create({
      data: {
        ...data,
        trackingCode: ApplicationDocService.generateTrackingCode(),
      },
    });

    if (result.customerEmail) {
      await sendTrackingEmail(
        result.customerEmail,
        result.customerName,
        result.trackingCode,
        "Application Documents",
      ).catch(console.error);
    }

    return result;
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.applicationDocRequest.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.applicationDocRequest.count(),
    ]);
    return { total, items };
  }

  static async getById(id: number) {
    const item = await prisma.applicationDocRequest.findUnique({
      where: { id },
    });
    if (!item) throw new Error("Application doc request not found");
    return item;
  }

  static async update(id: number, data: UpdateApplicationDocRequest) {
    await ApplicationDocService.getById(id);
    return prisma.applicationDocRequest.update({ where: { id }, data });
  }

  static async delete(id: number) {
    await ApplicationDocService.getById(id);
    return prisma.applicationDocRequest.delete({ where: { id } });
  }

  static async updateStatus(id: number, status: string) {
    await ApplicationDocService.getById(id);
    return prisma.applicationDocRequest.update({
      where: { id },
      data: { status: status as any },
    });
  }
}
