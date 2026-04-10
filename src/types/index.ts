// ===============================
// ENUMS (from Prisma)
// ===============================

export enum RequestStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

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

export enum ApplicationStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
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

export interface CreateTaskerRequest {
  name: string;
  phone: string;
  email?: string;
  specialties: string;
  isActive?: boolean;
}
// ===============================
// TRAINING
// ===============================
export interface CreateTrainingApplicationRequest {
  fullName: string;
  phone: string;
  email?: string;
  selectedCourse: TrainingCourse;
  preferredSchedule?: string;
  experienceLevel?: ExperienceLevel;
}