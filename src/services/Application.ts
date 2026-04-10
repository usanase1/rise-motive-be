import { prisma } from "../lib/prisma";

export class ApplicationDocService {

  static async create(data: any) {
    return prisma.applicationDocRequest.create({ data });
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.applicationDocRequest.findMany({
        orderBy: { createdAt: "desc" }
      }),
      prisma.applicationDocRequest.count()
    ]);

    return { total, items };
  }

  static async getById(id: number) {
    return prisma.applicationDocRequest.findUnique({ where: { id } });
  }
}