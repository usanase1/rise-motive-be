import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
  Security,
  Query,
  SuccessResponse,
} from "tsoa";
import { InfoPostService } from "../services/InfoPostService";
import { InfoCategory } from "@prisma/client";

interface CreateInfoPostRequest {
  title: string;
  description: string;
  category: InfoCategory;
  deadline?: string;
  location?: string;
  applyLink?: string;
  contactInfo?: string;
  isActive?: boolean;
}

interface UpdateInfoPostRequest {
  title?: string;
  description?: string;
  category?: InfoCategory;
  deadline?: string;
  location?: string;
  applyLink?: string;
  contactInfo?: string;
  isActive?: boolean;
}

@Route("info-posts")
@Tags("Info Posts")
export class InfoPostController {
  // CREATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateInfoPostRequest) {
    return InfoPostService.create(body);
  }

  // GET ALL (public — optional category + isActive filters)
  @Get("/")
  public async getAll(
    @Query() category?: InfoCategory,
    @Query() isActive?: boolean,
  ) {
    return InfoPostService.getAll(category, isActive);
  }

  // GET ONE
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return InfoPostService.getById(id);
  }

  // UPDATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateInfoPostRequest) {
    return InfoPostService.update(id, body);
  }

  // TOGGLE ACTIVE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/toggle-active")
  public async toggleActive(@Path() id: number) {
    return InfoPostService.toggleActive(id);
  }

  // DELETE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return InfoPostService.delete(id);
  }
}
