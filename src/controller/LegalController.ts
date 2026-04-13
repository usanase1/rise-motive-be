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

  @Get("/")
  public async getAll() {
    return LegalOfficialService.getAll();
  }

  @Get("/{id}")
  public async getById(@Path() id: number) {
    return LegalOfficialService.getById(id);
  }

  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateLegalOfficialRequest,
  ) {
    return LegalOfficialService.update(id, body);
  }

  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string },
  ) {
    return LegalOfficialService.updateStatus(id, body.status);
  }

  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return LegalOfficialService.delete(id);
  }
}
