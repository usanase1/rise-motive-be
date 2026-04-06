import prisma from "../config/prisma";
import {
  CreateTrainingApplicationDto,
  UpdateTrainingApplicationDto,
} from "../dtos/trainingApplication.dto";

export class TrainingApplicationService {

  async applyForTraining(dto: CreateTrainingApplicationDto) {
    const application = await prisma.trainingApplication.create({
      data: {
        fullName: dto.fullName,
        phone: dto.phone,
        email: dto.email,
        selectedCourse: dto.selectedCourse,
        preferredSchedule: dto.preferredSchedule,
        experienceLevel: dto.experienceLevel ?? "BEGINNER",
        status: "PENDING",
      },
    });
    return application;
  }

  async getAllApplications(status?: string) {
    return prisma.trainingApplication.findMany({
      where: status ? { status: status as any } : {},
      orderBy: { createdAt: "desc" },
    });
  }

  async getApplicationById(id: number) {
    const app = await prisma.trainingApplication.findUnique({ where: { id } });
    if (!app) throw new Error(`Application with ID ${id} not found`);
    return app;
  }

  async updateApplicationStatus(id: number, dto: UpdateTrainingApplicationDto) {
    return prisma.trainingApplication.update({
      where: { id },
      data: { status: dto.status },
    });
  }

  async deleteApplication(id: number) {
    await prisma.trainingApplication.delete({ where: { id } });
    return { message: "Application deleted successfully" };
  }
}