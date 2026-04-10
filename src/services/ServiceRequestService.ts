import prisma from "../lib/prisma";

export class ServiceRequestService {

  static async create(data: any) {
    return prisma.serviceRequest.create({
      data
    });
  }

  static async getAll() {
    return prisma.serviceRequest.findMany({
      include: {
        tasker: true
      },
      orderBy: { createdAt: "desc" }
    });
  }

  static async getOne(id: number) {
    return prisma.serviceRequest.findUnique({
      where: { id },
      include: { tasker: true }
    });
  }

  static async assignTasker(id: number, taskerId: number) {
    return prisma.serviceRequest.update({
      where: { id },
      data: {
        taskerId,
        status: "ASSIGNED"
      }
    });
  }

  static async updateStatus(id: number, status: string) {
    return prisma.serviceRequest.update({
      where: { id },
      data: { status: status as any }
    });
  }

  static async delete(id: number) {
    return prisma.serviceRequest.delete({
      where: { id }
    });
  }
}