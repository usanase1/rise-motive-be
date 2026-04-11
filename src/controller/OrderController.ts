import {
  Body, Delete, Get, Path, Post, Put,
  Route, Tags, Security, Query, SuccessResponse,
} from "tsoa";
import { OrderService } from "../services/OrderService";
import { OrderStatus } from "@prisma/client";

interface CreateOrderRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  address: string;
  quantity?: number;
  paymentMethod?: string;
  note?: string;
  productId: number;
}

interface UpdateOrderRequest {
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  address?: string;
  quantity?: number;
  paymentMethod?: string;
  note?: string;
}

interface UpdateOrderStatusBody {
  status: OrderStatus;
}

@Route("orders")
@Tags("Orders")
export class OrderController {

  // CREATE (public — customers place orders)
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateOrderRequest) {
    return OrderService.create(body);
  }

  // GET ALL (admin only — optional status filter)
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll(@Query() status?: OrderStatus) {
    return OrderService.getAll(status);
  }

  // GET ONE BY ID
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return OrderService.getById(id);
  }

  // TRACK BY TRACKING CODE (public)
  @Get("/track/{trackingCode}")
  public async track(@Path() trackingCode: string) {
    return OrderService.getByTrackingCode(trackingCode);
  }

  // UPDATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateOrderRequest) {
    return OrderService.update(id, body);
  }

  // UPDATE STATUS
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: UpdateOrderStatusBody
  ) {
    return OrderService.updateStatus(id, body.status);
  }

  // DELETE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return OrderService.delete(id);
  }
}