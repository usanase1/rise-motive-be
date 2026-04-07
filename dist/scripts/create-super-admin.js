"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../config/prisma"));
async function createSuperAdmin() {
    try {
        // Check if super admin already exists
        const existingSuperAdmin = await prisma_1.default.admin.findFirst({
            where: { role: "SUPER_ADMIN" },
        });
        if (existingSuperAdmin) {
            console.log("Super admin already exists:", existingSuperAdmin.email);
            return;
        }
        // Create super admin
        const hashedPassword = await bcryptjs_1.default.hash("Usanase12@", 10);
        const superAdmin = await prisma_1.default.admin.create({
            data: {
                fullName: "Emeline USANASE",
                email: "emelineu72@gmail.com",
                password: hashedPassword,
                role: "SUPER_ADMIN",
                isActive: true,
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
        });
        console.log("Super admin created successfully:");
        console.log("Email: superadmin@risemotive.com");
        console.log("Password: SuperAdmin123!");
        console.log("Please change the password after first login!");
    }
    catch (error) {
        console.error("Error creating super admin:", error);
    }
    finally {
        await prisma_1.default.$disconnect();
    }
}
// Run the seeder
createSuperAdmin();
