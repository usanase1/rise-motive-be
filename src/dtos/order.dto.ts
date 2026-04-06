import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEmail, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  customerName!: string;

  @IsNotEmpty()
  @IsString()
  customerPhone!: string;

  @IsOptional()
  @IsEmail()
  customerEmail?: string;

  @IsNotEmpty()
  @IsString()
  address!: string;

  @IsNotEmpty()
  @IsNumber()
  quantity!: number;

  @IsOptional()
  @IsString()
  note?: string;

  @IsNotEmpty()
  @IsNumber()
  productId!: number;
}

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsEnum(['PENDING', 'CONFIRMED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'])
  status!: 'PENDING' | 'CONFIRMED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

  @IsOptional()
  @IsEnum(['VISA', 'TELEPHONE', 'CASH'])
  paymentMethod?: 'VISA' | 'TELEPHONE' | 'CASH';
}