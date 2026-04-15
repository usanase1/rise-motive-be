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
import { ProductService } from "../services/ProductService";
import { CreateProductRequest } from "../types";

@Route("products")
@Tags("Products")
export class ProductController {

  @Security("jwt", ["SUPER_ADMIN"])
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateProductRequest) {
    return ProductService.create(body);
  }

  
  @Get("/")
  public async getAll(@Query() category?: string) {
    return ProductService.getAll(category);
  }

  
  @Get("/{id}")

  public async getById(@Path() id: number) {
    return ProductService.getById(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: CreateProductRequest) {
    return ProductService.update(id, body);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/toggle-stock")
  public async toggleStock(@Path() id: number) {
    return ProductService.toggleStock(id);
  }

  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return ProductService.delete(id);
  }
}
