
import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import { CreateEGovRequest, UpdateEGovRequest } from "../types";

export class EGovService {

  // helper
  private static generateTrackingCode(): string {
    return `EGOV-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. EGOV-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateEGovRequest) {
    return prisma.eGovRequest.create({
      data: {
        ...data,
        trackingCode: EGovService.generateTrackingCode(),
      },
    });
  }

    // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.eGovRequest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.eGovRequest.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const item = await prisma.eGovRequest.findUnique({ where: { id } });
    if (!item) throw new Error("E-Gov request not found");
    return item;
  }

  // UPDATE
  static async update(id: number, data: UpdateEGovRequest) {
    await EGovService.getById(id); // ensures 404 if not found
    return prisma.eGovRequest.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await EGovService.getById(id); // ensures 404 if not found
    return prisma.eGovRequest.delete({ where: { id } });
  }
  // ... rest unchanged
}