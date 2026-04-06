import prisma from "../config/prisma";
import { CreateTaskerDto, UpdateTaskerDto } from "../dtos/tasker.dto";

export class TaskerService {

  async createTasker(dto: CreateTaskerDto) {
    return prisma.tasker.create({ data: dto });
  }

  async getAllTaskers() {
    return prisma.tasker.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async getTaskerById(id: number) {
    const tasker = await prisma.tasker.findUnique({
      where: { id },
    });
    if (!tasker) throw new Error(`Tasker with ID ${id} not found`);
    return tasker;
  }

  async updateTasker(id: number, dto: UpdateTaskerDto) {
    return prisma.tasker.update({ where: { id }, data: dto });
  }

  async deleteTasker(id: number) {
    await prisma.tasker.delete({ where: { id } });
    return { message: "Tasker deleted successfully" };
  }
}