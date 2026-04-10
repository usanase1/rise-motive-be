import prisma from "../lib/prisma";

export class ReportService {
  static async generateDailyReport() {
    const totalOrders = await prisma.order.count();
    const totalServices = await prisma.serviceRequest.count();
    const totalUsers = await prisma.admin.count();

    const report = await prisma.report.create({
      data: {
        title: "Daily System Report",
        summary: `System snapshot generated automatically`,
        totalOrders,
        totalServices,
        totalUsers,
        totalTasks: 0,
      },
    });

    return report;
  }

  static async getReports() {
    return prisma.report.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
}