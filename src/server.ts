import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as fs from "fs";
import * as path from "path";

import { RegisterRoutes } from "./routes/routes";
import { errorHandler, notFound } from "./middlewares/errorHandler";
import runMigrations from "./scripts/migrate";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middlewares ──────────────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: false })); // Allow images to load cross-origin
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve manual uploads folder
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

// ── Health Check ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Rise Motive API is running 🚀",
    version: "1.0.0",
    docs: "/docs",
    endpoints: {
      serviceRequests: "/service-requests",
    },
  });
});

// ── Swagger Documentation ────────────────────────────────────
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../public/swagger.json"), "utf8")
);

// Inject custom tag descriptions for Swagger UI grouping
swaggerDocument.tags = [
  { name: "Authentication", description: "Admin: authentication and system setup — JWT required for protected routes (ADMIN/SUPER_ADMIN role)" },
  { name: "Products", description: "ProSpot: manage products catalog — JWT required for write access" },
  { name: "Orders", description: "ProSpot: manage customer orders" },
  { name: "Information Posts", description: "InfoSpot: manage jobs, scholarships, and opportunities" },
  { name: "Taskers", description: "TaskSpot: manage service taskers and profiles" },
  { name: "Service Requests", description: "TaskSpot: manage customer service requests" },
  { name: "Training Applications", description: "TaskSpot Part II: manage digital skills training applications" }
];

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customSiteTitle: "Rise Motive API Documentation"
}));

// ── TSOA Routes ─────────────────────────────────────────────
RegisterRoutes(app);

// ── Error Handlers ───────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start Server ─────────────────────────────────────────────
async function startServer() {
  await runMigrations();
  
  app.listen(PORT as number, '0.0.0.0', () => {
    console.log(`
  
    Rise Motive API
    Running on http://localhost:${PORT}
    Environment: ${process.env.NODE_ENV}
  
  `);
  });
}

startServer();

export default app;