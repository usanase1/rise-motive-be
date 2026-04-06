import { IsNotEmpty, IsOptional, IsEnum, IsString, IsDateString } from 'class-validator';

export class CreateServiceRequestDto {
  @IsNotEmpty()
  @IsString()
  customerName!: string;

  @IsNotEmpty()
  @IsString()
  customerPhone!: string;

  @IsOptional()
  @IsString()
  customerEmail?: string;

  @IsNotEmpty()
  @IsEnum(['E_GOVERNMENT', 'APPLICATIONS_DOCS', 'CREATIVE_MEDIA', 'WEB_DIGITAL', 'LEGAL_OFFICIAL'])
  serviceCategory!: 'E_GOVERNMENT' | 'APPLICATIONS_DOCS' | 'CREATIVE_MEDIA' | 'WEB_DIGITAL' | 'LEGAL_OFFICIAL';

  @IsNotEmpty()
  @IsString()
  service!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  documentUrl?: string;

  @IsOptional()
  @IsDateString()
  preferredDate?: string;

  @IsNotEmpty()
  @IsString()
  location!: string;
}

export class UpdateRequestStatusDto {
  @IsNotEmpty()
  @IsEnum(['PENDING', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'])
  status!: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

  @IsOptional()
  taskerId?: number;

  @IsNotEmpty()
  @IsString()
  note!: string;
}