import { prisma } from "../lib/prisma";

export class EGovService {

  static async create(data: any) {
    return prisma.eGovRequest.create({ data });
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.eGovRequest.findMany({
        orderBy: { createdAt: "desc" }
      }),
      prisma.eGovRequest.count()
    ]);

    return { total, items };
  }

  static async getById(id: number) {
    return prisma.eGovRequest.findUnique({ where: { id } });
  }
}