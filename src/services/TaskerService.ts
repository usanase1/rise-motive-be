import {prisma} from "../lib/prisma";
import { CreateTaskerRequest, UpdateTaskerRequest } from "../types";

export class TaskerService {

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.tasker.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.tasker.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getOne(id: number) {
    const tasker = await prisma.tasker.findUnique({ where: { id } });
    if (!tasker) throw new Error("Tasker not found");
    return tasker;
  }

  // CREATE
  static async create(data: CreateTaskerRequest) {
    return prisma.tasker.create({ data });
  }

  // UPDATE
  static async update(id: number, data: UpdateTaskerRequest) {
    await TaskerService.getOne(id); // 404 guard
    return prisma.tasker.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await TaskerService.getOne(id); // 404 guard
    return prisma.tasker.delete({ where: { id } });
  }

  // TOGGLE ACTIVE
  static async toggleActive(id: number) {
    const tasker = await TaskerService.getOne(id); // 404 guard + reuse
    return prisma.tasker.update({
      where: { id },
      data: { isActive: !tasker.isActive },
    });
  }
}