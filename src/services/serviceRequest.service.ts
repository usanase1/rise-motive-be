import prisma from "../config/prisma";
import { CreateServiceRequestDto, UpdateRequestStatusDto } from "../dtos/serviceRequest.dto";
import { generateTrackingCode } from "../utils/generateTrackingCode";

export class ServiceRequestService {

  // Customer submits a new service request
  async createRequest(dto: CreateServiceRequestDto) {
    const trackingCode = generateTrackingCode("RM");

    const request = await prisma.serviceRequest.create({
      data: {
        trackingCode,
        customerName: dto.customerName,
        customerPhone: dto.customerPhone,
        serviceCategory: dto.serviceCategory,
        service: dto.service,
        description: dto.description,
        documentUrl: dto.documentUrl,
        preferredDate: dto.preferredDate,
        location: dto.location,
        status: "PENDING",
        statusHistory: {
          create: {
            status: "PENDING",
            note: "Request submitted by customer",
          },
        },
      },
      include: {
        statusHistory: true,
        tasker: true,
      },
    });

    return request;
  }

  // Customer tracks their request by tracking code
  async trackRequest(trackingCode: string) {
    const request = await prisma.serviceRequest.findUnique({
      where: { trackingCode },
      include: {
        statusHistory: {
          orderBy: { createdAt: "asc" },
        },
        tasker: {
          select: { name: true, phone: true },
        },
      },
    });

    if (!request) {
      throw new Error(`No request found with tracking code: ${trackingCode}`);
    }

    return request;
  }

  // Admin gets all requests
  async getAllRequests(status?: string) {
    return prisma.serviceRequest.findMany({
      where: status ? { status: status as any } : {},
      include: {
        tasker: { select: { name: true, phone: true, email: true } },
        statusHistory: { orderBy: { createdAt: "desc" }, take: 1 },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // Admin gets one request by ID
  async getRequestById(id: number) {
    const request = await prisma.serviceRequest.findUnique({
      where: { id },
      include: {
        statusHistory: { orderBy: { createdAt: "asc" } },
        tasker: true,
        smsLogs: { orderBy: { createdAt: "desc" } },
      },
    });

    if (!request) throw new Error(`Request with ID ${id} not found`);
    return request;
  }

  // Admin updates request status
  async updateStatus(id: number, dto: UpdateRequestStatusDto) {
    const request = await prisma.serviceRequest.update({
      where: { id },
      data: {
        status: dto.status,
        taskerId: dto.taskerId,
        statusHistory: {
          create: {
            status: dto.status,
            note: dto.note,
          },
        },
      },
      include: {
        tasker: true,
        statusHistory: { orderBy: { createdAt: "asc" } },
      },
    });

    return request;
  }

  // Admin deletes a request
  async deleteRequest(id: number) {
    await prisma.statusHistory.deleteMany({ where: { serviceRequestId: id } });
    await prisma.smsLog.deleteMany({ where: { serviceRequestId: id } });
    await prisma.serviceRequest.delete({ where: { id } });
    return { message: "Request deleted successfully" };
  }
}