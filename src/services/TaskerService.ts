import prisma from "../lib/prisma";

export class TaskerService {

  static async getAll() {
    return prisma.tasker.findMany({
      orderBy: { createdAt: "desc" }
    });
  }

  static async getOne(id: number) {
    return prisma.tasker.findUnique({
      where: { id }
    });
  }

  static async create(data: any) {
    return prisma.tasker.create({
      data
    });
  }

  static async update(id: number, data: any) {
    return prisma.tasker.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    return prisma.tasker.delete({
      where: { id }
    });
  }

  static async toggleActive(id: number) {
    const tasker = await prisma.tasker.findUnique({ where: { id } });

    return prisma.tasker.update({
      where: { id },
      data: {
        isActive: !tasker?.isActive
      }
    });
  }
}