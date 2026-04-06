import { IsNotEmpty, IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';

export class RegisterAdminDto {
  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsOptional()
  @IsEnum(['SUPER_ADMIN', 'ADMIN'])
  role?: 'SUPER_ADMIN' | 'ADMIN';
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}