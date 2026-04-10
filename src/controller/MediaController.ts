import { Get, Post, Route, Tags, Body, Path } from "tsoa";
import { CreativeMediaService } from "../services/Media";
import { CreateCreativeMediaRequest } from "../types";

@Route("creative-media")
@Tags("Creative Media")
export class CreativeMediaController {

  @Post("/")
  public async create(@Body() body: CreateCreativeMediaRequest) {
    return CreativeMediaService.create(body);
  }

  @Get("/")
  public async getAll() {
    return CreativeMediaService.getAll();
  }

  @Get("/{id}")
  public async getById(@Path() id: number) {
    return CreativeMediaService.getById(id);
  }
}