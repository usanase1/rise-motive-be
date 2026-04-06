import { IsNotEmpty, IsOptional, IsEnum, IsString, IsDateString } from 'class-validator';

export class CreateInfoPostDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsEnum(['JOB', 'SCHOLARSHIP', 'COMPETITION', 'COMMUNITY', 'ADVISORY'])
  category!: 'JOB' | 'SCHOLARSHIP' | 'COMPETITION' | 'COMMUNITY' | 'ADVISORY';

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  applyLink?: string;

  @IsOptional()
  @IsString()
  contactInfo?: string;
}

export class UpdateInfoPostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['JOB', 'SCHOLARSHIP', 'COMPETITION', 'COMMUNITY', 'ADVISORY'])
  category?: 'JOB' | 'SCHOLARSHIP' | 'COMPETITION' | 'COMMUNITY' | 'ADVISORY';

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  applyLink?: string;

  @IsOptional()
  @IsString()
  contactInfo?: string;

  @IsOptional()
  isActive?: boolean;
}