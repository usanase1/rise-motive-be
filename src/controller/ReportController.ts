import { Get, Post, Route, Tags, Security } from "tsoa";
import { ReportService } from "../services/Report";

@Route("reports")
@Tags("Reports")
export class ReportController {

  // manually trigger report
  @Security("jwt", ["SUPER_ADMIN"])
  @Post("/generate")
  public async generate() {
    return ReportService.generateDailyReport();
  }

  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/")
  public async getAll() {
    return ReportService.getReports();
  }
}