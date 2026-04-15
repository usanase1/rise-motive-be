import {
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Route,
  Tags,
  Body,
  Security,
  Path,
  SuccessResponse,
} from "tsoa";
import { ApplicationDocService } from "../services/Application";
import {
  CreateApplicationDocRequest,
  UpdateApplicationDocRequest,
} from "../types";

@Route("application-docs")
@Tags("Application Documents")
export class ApplicationDocController {
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateApplicationDocRequest) {
    return ApplicationDocService.create(body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll() {
    return ApplicationDocService.getAll();
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return ApplicationDocService.getById(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateApplicationDocRequest,
  ) {
    return ApplicationDocService.update(id, body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string },
  ) {
    return ApplicationDocService.updateStatus(id, body.status);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return ApplicationDocService.delete(id);
  }
}
