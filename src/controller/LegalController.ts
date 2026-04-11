import {
  Get,
  Post,
  Put,
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
  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateLegalOfficialRequest) {
    return LegalOfficialService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return LegalOfficialService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return LegalOfficialService.getById(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateLegalOfficialRequest,
  ) {
    return LegalOfficialService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return LegalOfficialService.delete(id);
  }
}
