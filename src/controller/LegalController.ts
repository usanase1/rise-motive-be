import { Get, Post, Route, Tags, Body, Path } from "tsoa";
import { LegalOfficialService } from "../services/legal";
import { CreateLegalOfficialRequest } from "../types";

@Route("legal")
@Tags("Legal & Official")
export class LegalOfficialController {

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
}