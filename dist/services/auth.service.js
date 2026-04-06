"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../config/prisma"));
const JWT_SECRET = process.env.JWT_SECRET || "rise-motive-secret";
const JWT_EXPIRES_IN = "7d";
class AuthService {
    // Register a new admin or admin
    async register(dto) {
        // Check if email already exists
        const existing = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (existing)
            throw new Error("Email already registered");
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(dto.password, 10);
        const admin = await prisma_1.default.admin.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                password: hashedPassword,
                role: dto.role ?? "ADMIN",
            },
        });
        // Remove password from response
        const { password, ...adminWithoutPassword } = admin;
        return adminWithoutPassword;
    }
    // Login
    async login(dto) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { email: dto.email },
        });
        if (!admin)
            throw new Error("Invalid email or password");
        if (!admin.isActive)
            throw new Error("Account is deactivated");
        const isPasswordValid = await bcryptjs_1.default.compare(dto.password, admin.password);
        if (!isPasswordValid)
            throw new Error("Invalid email or password");
        const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email, role: admin.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const { password, ...adminWithoutPassword } = admin;
        return {
            token,
            admin: adminWithoutPassword,
        };
    }
    // Get all admins (super admin only)
    async getAllAdmins() {
        return prisma_1.default.admin.findMany({
            select: {
                id: true,
                fullName: true,
                email: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    // Deactivate admin account
    async deactivateAdmin(id) {
        return prisma_1.default.admin.update({
            where: { id },
            data: { isActive: false },
            select: {
                id: true,
                fullName: true,
                email: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
        });
    }
    // Get logged in admin profile
    async getProfile(id) {
        const admin = await prisma_1.default.admin.findUnique({
            where: { id },
            select: {
                id: true,
                fullName: true,
                email: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
        });
        if (!admin)
            throw new Error("Admin not found");
        return admin;
    }
}
exports.AuthService = AuthService;
