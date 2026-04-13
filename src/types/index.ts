// ===============================
// ENUMS (from Prisma)
// ===============================

import { CreativeMediaRequest } from "@prisma/client";

//  Re-export from Prisma — single source of truth
export { RequestStatus, OrderStatus, ApplicationStatus } from "@prisma/client";

// Local enums not in Prisma
export enum InfoCategory {
  JOB = "JOB",
  SCHOLARSHIP = "SCHOLARSHIP",
  COMPETITION = "COMPETITION",
  COMMUNITY = "COMMUNITY",
  ADVISORY = "ADVISORY",
}

export enum TrainingCourse {
  COMPUTER_FOUNDATIONS = "COMPUTER_FOUNDATIONS",
  MICROSOFT_OFFICE = "MICROSOFT_OFFICE",
  GOOGLE_TOOLS = "GOOGLE_TOOLS",
  E_GOVERNMENT_TOOLS = "E_GOVERNMENT_TOOLS",
  DIGITAL_CONTENT_CREATION = "DIGITAL_CONTENT_CREATION",
  GRAPHIC_DESIGN = "GRAPHIC_DESIGN",
  AI_AND_DIGITAL_TOOLS = "AI_AND_DIGITAL_TOOLS",
  BASIC_PROGRAMMING = "BASIC_PROGRAMMING",
}

export enum ExperienceLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
}

export enum AdminRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
}

// ===============================
// EGOV REQUEST
// ===============================
export interface CreateEGovRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

export interface UpdateEGovRequest extends CreateEGovRequest {}

// ===============================
// APPLICATION DOC REQUEST
// ===============================
export interface CreateApplicationDocRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

export interface UpdateApplicationDocRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

// ===============================
// CREATIVE MEDIA REQUEST
// ===============================
export interface CreateCreativeMediaRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

export interface UpdateCreativeMediaRequest extends CreativeMediaRequest {}

// ===============================
// WEB DIGITAL REQUEST
// ===============================
export interface CreateWebDigitalRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

export interface UpdateWebDigitalRequest extends CreateWebDigitalRequest {}

// ===============================
// LEGAL OFFICIAL REQUEST
// ===============================
export interface CreateLegalOfficialRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  service?: string;
  description: string;
  documentUrl?: string;
  preferredDate?: string;
  tasker?: string;
}

export interface UpdateLegalOfficialRequest extends CreateLegalOfficialRequest {}

// ===============================
// ORDER
// ===============================
export interface CreateOrderRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  address: string;
  quantity?: number;
  paymentMethod?: string;
  note?: string;
  productId: number;
}

// ===============================
// PRODUCT
// ===============================
export interface CreateProductRequest {
  name: string;
  description?: string;
  price?: string;
  category: string;
  imageUrl?: string;
  inStock?: boolean;
}

// ===============================
// INFO POST
// ===============================
export interface CreateInfoPostRequest {
  title: string;
  description: string;
  category: InfoCategory;
  deadline?: string;
  location?: string;
  applyLink?: string;
  contactInfo?: string;
}

// ===============================
// TASKER
// ===============================
export interface CreateTaskerRequest {
  name: string;
  phone: string;
  email?: string;
  specialties: string;
  isActive?: boolean;
}

export interface UpdateTaskerRequest extends CreateTaskerRequest {}

// ===============================
// TRAINING
// ===============================
export interface CreateTrainingRequest {
  fullName: string;
  phone: string;
  email?: string;
  selectedCourse: TrainingCourse;
  preferredSchedule?: string;
  experienceLevel?: ExperienceLevel;
}

export interface UpdateTrainingRequest extends CreateTrainingRequest {}
