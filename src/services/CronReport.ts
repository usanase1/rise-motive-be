import cron from "node-cron";
import { ReportService } from "./Report";

export function startReportCron() {
  // every 24 hours
  cron.schedule("0 0 * * *", async () => {
    console.log("Generating daily report...");
    await ReportService.generateDailyReport();
  });
}