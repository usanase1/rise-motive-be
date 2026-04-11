import { Get, Post, Put, Delete, Route, Tags, Security, Body, Path } from "tsoa";
import { ReportService } from "../services/Report";

interface UpdateReportBody {
  title?: string;
  summary?: string;
}

@Route("reports")
@Tags("Reports")
export class ReportController {

  // GENERATE (manually trigger)
  @Security("jwt", ["SUPER_ADMIN"])
  @Post("/generate")
  public async generate() {
    return ReportService.generateDailyReport();
  }

  // GET ALL
  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/")
  public async getAll() {
    return ReportService.getReports();
  }

  // GET ONE BY ID
  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return ReportService.getById(id);
  }

  // UPDATE
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateReportBody) {
    return ReportService.update(id, body);
  }

  // DELETE
  @Security("jwt", ["SUPER_ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return ReportService.delete(id);
  }
}