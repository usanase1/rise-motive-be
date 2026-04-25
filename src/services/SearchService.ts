import { prisma } from "../lib/prisma";

export class SearchService {
  static async searchByTrackingCode(trackingCode: string) {
    const code = trackingCode.trim().toUpperCase();

    const [egov, appDoc, creative, web, legal, order] = await Promise.all([
      prisma.eGovRequest.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
      }),
      prisma.applicationDocRequest.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
      }),
      prisma.creativeMediaRequest.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
      }),
      prisma.webDigitalRequest.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
      }),
      prisma.legalOfficialRequest.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
      }),
      prisma.order.findFirst({
        where: { trackingCode: { contains: code, mode: "insensitive" } },
        include: { product: true },
      }),
    ]);

    const results = [];

    if (egov)     results.push({ type: "E-Government Service",         data: egov });
    if (appDoc)   results.push({ type: "Application & Documentation",  data: appDoc });
    if (creative) results.push({ type: "Creative & Media Service",     data: creative });
    if (web)      results.push({ type: "Web & Digital Service",        data: web });
    if (legal)    results.push({ type: "Legal & Official Service",     data: legal });
    if (order)    results.push({ type: "Product Order",                data: order });

    return {
      found: results.length > 0,
      total: results.length,
      results,
    };
  }
}