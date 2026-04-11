import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import { CreateLegalOfficialRequest, UpdateLegalOfficialRequest } from "../types";

export class LegalOfficialService {

  // helper
  private static generateTrackingCode(): string {
    return `LEGAL-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. LEGAL-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateLegalOfficialRequest) {
    return prisma.legalOfficialRequest.create({
      data: {
        ...data,
        trackingCode: LegalOfficialService.generateTrackingCode(),
      },
    });
  }

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.legalOfficialRequest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.legalOfficialRequest.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const item = await prisma.legalOfficialRequest.findUnique({ where: { id } });
    if (!item) throw new Error("Legal request not found");
    return item;
  }

  // UPDATE
  static async update(id: number, data: UpdateLegalOfficialRequest) {
    await LegalOfficialService.getById(id); // 404 guard
    return prisma.legalOfficialRequest.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await LegalOfficialService.getById(id); // 404 guard
    return prisma.legalOfficialRequest.delete({ where: { id } });
  }
}