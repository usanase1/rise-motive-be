import "dotenv/config";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function seed() {
  const email = "superadmin@system.com";

  const existing = await prisma.admin.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("Super admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("SuperAdmin123!", 10);

  // SUPER ADMIN
  await prisma.admin.create({
    data: {
      fullName: "System Super Admin",
      email,
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  });

  // NORMAL ADMIN
  await prisma.admin.create({
    data: {
      fullName: "Default Admin",
      email: "admin@system.com",
      password: await bcrypt.hash("Admin123!", 10),
      role: "ADMIN",
    },
  });

  console.log("Admins seeded successfully 🚀");
}

seed()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });