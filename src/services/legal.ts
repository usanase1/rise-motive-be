import { prisma } from "../lib/prisma";

export class LegalOfficialService {

  static async create(data: any) {
    return prisma.legalOfficialRequest.create({ data });
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.legalOfficialRequest.findMany({
        orderBy: { createdAt: "desc" }
      }),
      prisma.legalOfficialRequest.count()
    ]);

    return { total, items };
  }

  static async getById(id: number) {
    return prisma.legalOfficialRequest.findUnique({ where: { id } });
  }
}