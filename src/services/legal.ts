import { prisma } from "../lib/prisma";
import { sendTrackingEmail } from "../utils/email";
import { randomBytes } from "crypto";
import {
  CreateLegalOfficialRequest,
  UpdateLegalOfficialRequest,
} from "../types";

export class LegalOfficialService {
  private static generateTrackingCode(): string {
    return `LEGAL-${randomBytes(4).toString("hex").toUpperCase()}`;
  }

  static async create(data: CreateLegalOfficialRequest) {
    const result = await prisma.legalOfficialRequest.create({
      data: {
        ...data,
        trackingCode: LegalOfficialService.generateTrackingCode(),
      },
    });

    if (result.customerEmail) {
      await sendTrackingEmail(
        result.customerEmail,
        result.customerName,
        result.trackingCode,
        "Legal & Official",
      ).catch(console.error);
    }

    return result;
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.legalOfficialRequest.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.legalOfficialRequest.count(),
    ]);
    return { total, items };
  }

  static async getById(id: number) {
    const item = await prisma.legalOfficialRequest.findUnique({
      where: { id },
    });
    if (!item) throw new Error("Legal request not found");
    return item;
  }

  static async update(id: number, data: UpdateLegalOfficialRequest) {
    await LegalOfficialService.getById(id);
    return prisma.legalOfficialRequest.update({ where: { id }, data });
  }

  static async delete(id: number) {
    await LegalOfficialService.getById(id);
    return prisma.legalOfficialRequest.delete({ where: { id } });
  }

  static async updateStatus(id: number, status: string) {
    await LegalOfficialService.getById(id);
    return prisma.legalOfficialRequest.update({
      where: { id },
      data: { status: status as any },
    });
  }
}
