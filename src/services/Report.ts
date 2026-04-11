import { prisma } from "../lib/prisma";

export class ReportService {
  // GENERATE (CREATE)
  static async generateDailyReport() {
    const [totalOrders, totalServices] = await Promise.all([
      prisma.order.count(),
      //prisma.serviceRequest.count(),
      prisma.admin.count(),
    ]);

    return prisma.report.create({
      data: {
        title: "Daily System Report",
        summary: `System snapshot generated automatically`,
        totalOrders,
        totalServices,
        totalTasks: 0,
      },
    });
  }

  // GET ALL
  static async getReports() {
    const [items, total] = await Promise.all([
      prisma.report.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.report.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const report = await prisma.report.findUnique({ where: { id } });
    if (!report) throw new Error("Report not found");
    return report;
  }

  // UPDATE (e.g. patch title or summary manually)
  static async update(id: number, data: { title?: string; summary?: string }) {
    await ReportService.getById(id); // 404 guard
    return prisma.report.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await ReportService.getById(id); // 404 guard
    return prisma.report.delete({ where: { id } });
  }
}
