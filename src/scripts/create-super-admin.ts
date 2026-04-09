import bcrypt from "bcryptjs";
import prisma from "../config/prisma";

export async function createSuperAdmin() {
  try {
    // Check if super admin already exists
    const existingSuperAdmin = await prisma.admin.findFirst({
      where: { role: "SUPER_ADMIN" },
    });

    if (existingSuperAdmin) {
      console.log("Super admin already exists:", existingSuperAdmin.email);
      return;
    }

    // Create super admin
    const hashedPassword = await bcrypt.hash("Usanase12@", 10);

    const superAdmin = await prisma.admin.create({
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

  } catch (error) {
    console.error("Error creating super admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeder
createSuperAdmin();