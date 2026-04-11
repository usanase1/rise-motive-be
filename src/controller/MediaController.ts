import { Get, Post, Put, Delete, Route, Tags, Body, Path, SuccessResponse } from "tsoa";
import { CreativeMediaService } from "../services/Media";
import { CreateCreativeMediaRequest, UpdateCreativeMediaRequest } from "../types";

@Route("creative-media")
@Tags("Creative Media")
export class CreativeMediaController {

  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateCreativeMediaRequest) {
    return CreativeMediaService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return CreativeMediaService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return CreativeMediaService.getById(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateCreativeMediaRequest) {
    return CreativeMediaService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return CreativeMediaService.delete(id);
  }
}