import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateTaskerDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  specialties!: string;
}

export class UpdateTaskerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  specialties?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}