import { prisma } from "../lib/prisma";
import { CreateTrainingRequest, UpdateTrainingRequest } from "../types";

type ApplicationStatus = "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED";

// adjust to match your Prisma enum

export class TrainingService {
  // CREATE
  static async create(data: CreateTrainingRequest) {
    return prisma.trainingApplication.create({ data });
  }

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.trainingApplication.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.trainingApplication.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getOne(id: number) {
    const training = await prisma.trainingApplication.findUnique({
      where: { id },
    });
    if (!training) throw new Error("Training record not found");
    return training;
  }

  // UPDATE
  static async update(id: number, data: UpdateTrainingRequest) {
    await TrainingService.getOne(id); // 404 guard
    return prisma.trainingApplication.update({
      where: { id },
      data,
    });
  }

  // UPDATE STATUS
  static async updateStatus(id: number, status: ApplicationStatus) {
    await TrainingService.getOne(id);
    return prisma.trainingApplication.update({
      where: { id },
      data: { status: status as any },
    });
  }

  // DELETE
  static async delete(id: number) {
    await TrainingService.getOne(id); // 404 guard
    return prisma.trainingApplication.delete({ where: { id } });
  }
}
