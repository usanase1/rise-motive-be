import prisma from "../lib/prisma";

export class TrainingService {

  static async create(data: any) {
    return prisma.training.create({
      data
    });
  }

  static async getAll() {
    return prisma.training.findMany({
      orderBy: { createdAt: "desc" }
    });
  }

  static async getOne(id: number) {
    return prisma.training.findUnique({
      where: { id }
    });
  }

  static async updateStatus(id: number, status: string) {
    return prisma.training.update({
      where: { id },
      data: {
        status: status as any
      }
    });
  }

  static async delete(id: number) {
    return prisma.training.delete({
      where: { id }
    });
  }
}