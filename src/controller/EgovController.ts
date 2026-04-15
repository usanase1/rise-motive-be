import {
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Route,
  Tags,
  Body,
  Path,
  Security,
  SuccessResponse,
} from "tsoa";
import { EGovService } from "../services/Egov";
import { CreateEGovRequest, UpdateEGovRequest } from "../types";

@Route("egov")
@Tags("E-Government")
export class EGovController {
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateEGovRequest) {
    return EGovService.create(body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  
  public async getAll() {
    return EGovService.getAll();
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return EGovService.getById(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateEGovRequest) {
    return EGovService.update(id, body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string },
  ) {
    return EGovService.updateStatus(id, body.status);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return EGovService.delete(id);
  }
}
