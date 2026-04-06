import { Route, Post, Get, Patch, Delete, Body, Path, Query, Res, TsoaResponse } from 'tsoa';
import { OrderService } from "../services/order.service";
import { CreateOrderDto, UpdateOrderStatusDto } from "../dtos/order.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new OrderService();

interface OrderResponse {
  id: number;
  trackingCode: string;
  customerName: string;
  customerPhone: string;
  address: string;
  quantity: number;
  note?: string | null;
  status: 'PENDING' | 'CONFIRMED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';
  paymentMethod?: string | null;
  createdAt: Date;
  updatedAt: Date;
  product: {
    id: number;
    name: string;
    description?: string | null;
    price?: string | null;
    category: string;
    imageUrl?: string | null;
    inStock: boolean;
    createdAt: Date;
  };
}

@Route('orders')
export class OrderController {

  @Post()
  public async create(
    @Body() requestBody: CreateOrderDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<OrderResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.createOrder(requestBody);
      successResponse(201, new ApiResponse(true, "Order placed successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get('track/{trackingCode}')
  public async track(
    @Path() trackingCode: string,
    @Res() successResponse: TsoaResponse<200, ApiResponse<OrderResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.trackOrder(trackingCode);
      successResponse(200, new ApiResponse(true, "Order found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Res() successResponse: TsoaResponse<200, ApiResponse<OrderResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>,
    @Query() status?: string
  ): Promise<void> {
    try {
      const data = await service.getAllOrders(status);
      successResponse(200, new ApiResponse(true, "Orders fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<OrderResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getOrderById(id);
      successResponse(200, new ApiResponse(true, "Order found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Patch('{id}/status')
  public async updateStatus(
    @Path() id: number,
    @Body() requestBody: UpdateOrderStatusDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<OrderResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updateOrderStatus(id, requestBody);
      successResponse(200, new ApiResponse(true, "Order status updated", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Delete('{id}')
  public async delete(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<{ message: string }>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.deleteOrder(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}