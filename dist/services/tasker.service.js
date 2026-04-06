"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskerService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class TaskerService {
    async createTasker(dto) {
        return prisma_1.default.tasker.create({ data: dto });
    }
    async getAllTaskers() {
        return prisma_1.default.tasker.findMany({
            where: { isActive: true },
            orderBy: { createdAt: "desc" },
        });
    }
    async getTaskerById(id) {
        const tasker = await prisma_1.default.tasker.findUnique({
            where: { id },
        });
        if (!tasker)
            throw new Error(`Tasker with ID ${id} not found`);
        return tasker;
    }
    async updateTasker(id, dto) {
        return prisma_1.default.tasker.update({ where: { id }, data: dto });
    }
    async deleteTasker(id) {
        await prisma_1.default.tasker.delete({ where: { id } });
        return { message: "Tasker deleted successfully" };
    }
}
exports.TaskerService = TaskerService;
