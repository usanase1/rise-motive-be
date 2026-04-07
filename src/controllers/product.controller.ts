import { Route, Post, Get, Put, Delete, Body, Path, Query, Res, TsoaResponse, Security, Tags } from 'tsoa';
import { ProductService } from "../services/product.service";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new ProductService();

interface ProductResponse {
  id: number;
  name: string;
  description?: string | null;
  price?: string | null;
  category: string;
  imageUrl?: string | null;
  inStock: boolean;
  createdAt: Date;
}

@Tags('Products')
@Route('products')
export class ProductController {

  @Post()
  @Security('bearerAuth', ['ADMIN', 'SUPER_ADMIN'])
  public async create(
    @Body() requestBody: CreateProductDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<ProductResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.createProduct(requestBody);
      successResponse(201, new ApiResponse(true, "Product created successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Res() successResponse: TsoaResponse<200, ApiResponse<ProductResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>,
    @Query() category?: string
  ): Promise<void> {
    try {
      const data = await service.getAllProducts(category);
      successResponse(200, new ApiResponse(true, "Products fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ProductResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getProductById(id);
      successResponse(200, new ApiResponse(true, "Product found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Put('{id}')
  @Security('bearerAuth', ['ADMIN', 'SUPER_ADMIN'])
  public async update(
    @Path() id: number,
    @Body() requestBody: UpdateProductDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ProductResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updateProduct(id, requestBody);
      successResponse(200, new ApiResponse(true, "Product updated successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Delete('{id}')
  @Security('bearerAuth', ['ADMIN', 'SUPER_ADMIN'])
  public async delete(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<{ message: string }>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.deleteProduct(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}