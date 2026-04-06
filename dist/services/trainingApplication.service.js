"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingApplicationService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class TrainingApplicationService {
    async applyForTraining(dto) {
        const application = await prisma_1.default.trainingApplication.create({
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
    async getAllApplications(status) {
        return prisma_1.default.trainingApplication.findMany({
            where: status ? { status: status } : {},
            orderBy: { createdAt: "desc" },
        });
    }
    async getApplicationById(id) {
        const app = await prisma_1.default.trainingApplication.findUnique({ where: { id } });
        if (!app)
            throw new Error(`Application with ID ${id} not found`);
        return app;
    }
    async updateApplicationStatus(id, dto) {
        return prisma_1.default.trainingApplication.update({
            where: { id },
            data: { status: dto.status },
        });
    }
    async deleteApplication(id) {
        await prisma_1.default.trainingApplication.delete({ where: { id } });
        return { message: "Application deleted successfully" };
    }
}
exports.TrainingApplicationService = TrainingApplicationService;
