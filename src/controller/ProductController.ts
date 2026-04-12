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

interface CreateProductRequest {
  name: string;
  description?: string;
  price?: string;
  category: string;
  imageUrl?: string;
  inStock?: boolean;
}

interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: string;
  category?: string;
  imageUrl?: string;
  inStock?: boolean;
}

@Route("products")
@Tags("Products")
export class ProductController {
  // CREATE
 // @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateProductRequest) {
    return ProductService.create(body);
  }

  // GET ALL (public — optional category filter)
  @Get("/")
  public async getAll(@Query() category?: string) {
    return ProductService.getAll(category);
  }

  // GET ONE
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return ProductService.getById(id);
  }

  // UPDATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateProductRequest) {
    return ProductService.update(id, body);
  }

  // TOGGLE STOCK
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/toggle-stock")
  public async toggleStock(@Path() id: number) {
    return ProductService.toggleStock(id);
  }

  // DELETE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return ProductService.delete(id);
  }
}
