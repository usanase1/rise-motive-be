import { prisma } from "../lib/prisma";

// All service types and their Prisma models
const SERVICE_MAP = {
  "APP": {
    label: "Application Documents",
    findByCode: (code: string) =>
      prisma.applicationDocRequest.findUnique({ where: { trackingCode: code } }),
    updateById: (id: number, data: any) =>
      prisma.applicationDocRequest.update({ where: { id }, data }),
  },
  "EGOV": {
    label: "E-Government",
    findByCode: (code: string) =>
      prisma.eGovRequest.findUnique({ where: { trackingCode: code } }),
    updateById: (id: number, data: any) =>
      prisma.eGovRequest.update({ where: { id }, data }),
  },
  "LEGAL": {
    label: "Legal & Official",
    findByCode: (code: string) =>
      prisma.legalOfficialRequest.findUnique({ where: { trackingCode: code } }),
    updateById: (id: number, data: any) =>
      prisma.legalOfficialRequest.update({ where: { id }, data }),
  },
  "MEDIA": {
    label: "Creative Media",
    findByCode: (code: string) =>
      prisma.creativeMediaRequest.findUnique({ where: { trackingCode: code } }),
    updateById: (id: number, data: any) =>
      prisma.creativeMediaRequest.update({ where: { id }, data }),
  },
  "WEB": {
    label: "Web & Digital",
    findByCode: (code: string) =>
      prisma.webDigitalRequest.findUnique({ where: { trackingCode: code } }),
    updateById: (id: number, data: any) =>
      prisma.webDigitalRequest.update({ where: { id }, data }),
  },
};

// Determine which service to use from the tracking code prefix
function getServiceFromCode(trackingCode: string) {
  const prefix = trackingCode.split("-")[0].toUpperCase();
  const service = SERVICE_MAP[prefix as keyof typeof SERVICE_MAP];
  if (!service) throw new Error(`Unknown tracking code prefix: ${prefix}`);
  return service;
}

export class TrackingService {

  // Search by tracking code — returns full request + service type + canUpdate flag
  static async getByTrackingCode(trackingCode: string) {
    const service = getServiceFromCode(trackingCode);
    const item = await service.findByCode(trackingCode);

    if (!item) throw new Error("No request found for this tracking code");

    return {
      serviceType: service.label,
      canUpdate: item.status !== "COMPLETED" && item.status !== "CANCELLED",
      data: item,
    };
  }

  // Update request by tracking code (only if not COMPLETED or CANCELLED)
  static async updateByTrackingCode(
    trackingCode: string,
    updates: {
      customerName?: string;
      customerPhone?: string;
      customerEmail?: string;
      service?: string;
      description?: string;
      preferredDate?: string;
    }
  ) {
    const service = getServiceFromCode(trackingCode);
    const item = await service.findByCode(trackingCode);

    if (!item) throw new Error("No request found for this tracking code");

    if (item.status === "COMPLETED") {
      throw new Error("This request is already completed and cannot be updated");
    }

    if (item.status === "CANCELLED") {
      throw new Error("This request has been cancelled and cannot be updated");
    }

    return service.updateById(item.id, updates);
  }
}