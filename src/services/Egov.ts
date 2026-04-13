import { prisma } from "../lib/prisma";
import { sendTrackingEmail } from "../utils/email";
import { randomBytes } from "crypto";
import { CreateEGovRequest, UpdateEGovRequest } from "../types";

export class EGovService {
  private static generateTrackingCode(): string {
    return `EGOV-${randomBytes(4).toString("hex").toUpperCase()}`;
  }

  static async create(data: CreateEGovRequest) {
    const result = await prisma.eGovRequest.create({
      data: {
        ...data,
        trackingCode: EGovService.generateTrackingCode(),
      },
    });

    if (result.customerEmail) {
      await sendTrackingEmail(
        result.customerEmail,
        result.customerName,
        result.trackingCode,
        "E-Government Services",
      ).catch(console.error);
    }

    return result;
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.eGovRequest.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.eGovRequest.count(),
    ]);
    return { total, items };
  }

  static async getById(id: number) {
    const item = await prisma.eGovRequest.findUnique({ where: { id } });
    if (!item) throw new Error("E-Gov request not found");
    return item;
  }

  static async update(id: number, data: UpdateEGovRequest) {
    await EGovService.getById(id);
    return prisma.eGovRequest.update({ where: { id }, data });
  }

  static async delete(id: number) {
    await EGovService.getById(id);
    return prisma.eGovRequest.delete({ where: { id } });
  }

  static async updateStatus(id: number, status: string) {
    await EGovService.getById(id);
    return prisma.eGovRequest.update({
      where: { id },
      data: { status: status as any },
    });
  }
}
