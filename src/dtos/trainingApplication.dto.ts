import { IsNotEmpty, IsOptional, IsString, IsEmail, IsEnum } from 'class-validator';

export class CreateTrainingApplicationDto {
  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsEnum([
    'COMPUTER_FOUNDATIONS',
    'MICROSOFT_OFFICE',
    'GOOGLE_TOOLS',
    'E_GOVERNMENT_TOOLS',
    'DIGITAL_CONTENT_CREATION',
    'GRAPHIC_DESIGN',
    'AI_AND_DIGITAL_TOOLS',
    'BASIC_PROGRAMMING'
  ])
  selectedCourse!: 'COMPUTER_FOUNDATIONS' | 'MICROSOFT_OFFICE' | 'GOOGLE_TOOLS' | 'E_GOVERNMENT_TOOLS' | 'DIGITAL_CONTENT_CREATION' | 'GRAPHIC_DESIGN' | 'AI_AND_DIGITAL_TOOLS' | 'BASIC_PROGRAMMING';

  @IsOptional()
  @IsString()
  preferredSchedule?: string;

  @IsOptional()
  @IsEnum(['BEGINNER', 'INTERMEDIATE'])
  experienceLevel?: 'BEGINNER' | 'INTERMEDIATE';
}

export class UpdateTrainingApplicationDto {
  @IsOptional()
  @IsEnum(['PENDING', 'ACCEPTED', 'REJECTED'])
  status?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}