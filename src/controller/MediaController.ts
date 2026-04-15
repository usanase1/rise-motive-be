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
import { CreativeMediaService } from "../services/Media";
import { CreateCreativeMediaRequest } from "../types";

@Route("creative-media")
@Tags("Creative Media")
export class CreativeMediaController {
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateCreativeMediaRequest) {
    return CreativeMediaService.create(body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll() {
    return CreativeMediaService.getAll();
  }

  @Get("/{id}")
  public async getById(@Path() id: number) {
    return CreativeMediaService.getById(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: any) {
    return CreativeMediaService.update(id, body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string },
  ) {
    return CreativeMediaService.updateStatus(id, body.status);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return CreativeMediaService.delete(id);
  }
}
