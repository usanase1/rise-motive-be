import {
  Body,
  Delete,
  Get,
  Path,
  Patch,
  Post,
  Put,
  Security,
  Route,
  Tags,
  Query,
  SuccessResponse,
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
  // CREATE (public)
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateOrderRequest) {
    return OrderService.create(body);
  }

  // GET ALL (public)
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll(@Query() status?: OrderStatus) {
    return OrderService.getAll(status);
  }

  // GET ONE (public)
 @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return OrderService.getById(id);
  }

  // TRACK (public)
  @Get("/track/{trackingCode}")
  public async track(@Path() trackingCode: string) {
    return OrderService.getByTrackingCode(trackingCode);
  }

  // UPDATE (public)
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateOrderRequest) {
    return OrderService.update(id, body);
  }

  // UPDATE STATUS (public)
 @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: UpdateOrderStatusBody,
  ) {
    return OrderService.updateStatus(id, body.status);
  }

  // DELETE (public)
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return OrderService.delete(id);
  }
}
