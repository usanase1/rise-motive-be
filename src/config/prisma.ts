import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL environment variable");
}

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(databaseUrl),
});

export default prisma;