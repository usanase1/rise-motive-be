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
import { LegalOfficialService } from "../services/legal";
import {
  CreateLegalOfficialRequest,
  UpdateLegalOfficialRequest,
} from "../types";

@Route("legal")
@Tags("Legal & Official")
export class LegalOfficialController {
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateLegalOfficialRequest) {
    return LegalOfficialService.create(body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll() {
    return LegalOfficialService.getAll();
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return LegalOfficialService.getById(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateLegalOfficialRequest,
  ) {
    return LegalOfficialService.update(id, body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string },
  ) {
    return LegalOfficialService.updateStatus(id, body.status);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return LegalOfficialService.delete(id);
  }
}
