import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { upload } from "./lib/upload";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../build/swagger.json";

import { RegisterRoutes } from "./routes/routes";
import { startReportCron } from "./services/CronReport";
import { ApplicationDocService } from "./services/Application";
import { EGovService } from "./services/Egov";
import { CreativeMediaService } from "./services/Media";
import { WebDigitalService } from "./services/Web";
import { LegalOfficialService } from "./services/legal";
import { ProductService } from "./services/ProductService";
import { AuthService } from "./services/AuthServices";
import { RequestWithUser } from "./types/index";
import { expressAuthMiddleware } from "./middleware/ExpressMiddleWARE";
import { SearchService } from "./services/SearchService";

dotenv.config();

const app = express();

// ========================
// Middlewares
// ========================
// With this:

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://risemotive.rw",
  "https://www.risemotive.rw",
  "https://admin.risemotive.rw",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Only needed for local files — keep it for other static assets
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ========================
// Helper to get Cloudinary URL
// ========================
// multer-storage-cloudinary puts the full URL in req.file.path
function getFileUrl(file?: Express.Multer.File): string | undefined {
  if (!file) return undefined;
  return (file as any).path; //  this is the full Cloudinary https:// URL
}

// ========================
// Upload Routes (outside tsoa — multipart/form-data)
// ========================

app.post(
  "/application-docs",
  upload.single("documentUrl"),
  async (req, res) => {
    try {
      const result = await ApplicationDocService.create({
        ...req.body,
        documentUrl: getFileUrl(req.file), //  Cloudinary URL
      });
      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

app.post("/web-digital", upload.single("documentUrl"), async (req, res) => {
  try {
    const result = await WebDigitalService.create({
      ...req.body,
      documentUrl: getFileUrl(req.file), //  Cloudinary URL
    });
    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// update
app.put(
  "/auth/profile-picture",
  expressAuthMiddleware,
  upload.single("profilePicture"),
  async (req: RequestWithUser, res) => {
    try {
      const adminId = req.user?.id;
      if (!adminId) return res.status(401).json({ error: "Unauthorized" });
      if (!req.file) return res.status(400).json({ error: "No file uploaded" });

      // Build full accessible URL
      const imageUrl = req.file.path.startsWith("http")
        ? req.file.path // Cloudinary already returns full URL
        : `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

      const result = await AuthService.updateProfilePicture(adminId, imageUrl);
      res.status(200).json(result);
    } catch (err: unknown) {
      const e = err as Error;
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  },
);

// search by tracking code

app.get("/search/tracking/:code", async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) return res.status(400).json({ error: "Tracking code required" });
    const result = await SearchService.searchByTrackingCode(code);
    res.status(200).json(result);
  } catch (err: unknown) {
    const e = err as Error;
    res.status(500).json({ error: e.message });
  }
});

app.post("/creative-media", upload.single("documentUrl"), async (req, res) => {
  try {
    const result = await CreativeMediaService.create({
      ...req.body,
      documentUrl: getFileUrl(req.file), //  Cloudinary URL
    });
    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/legal", upload.single("documentUrl"), async (req, res) => {
  try {
    const result = await LegalOfficialService.create({
      ...req.body,
      documentUrl: getFileUrl(req.file), //  Cloudinary URL
    });
    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/egov", upload.single("documentUrl"), async (req, res) => {
  try {
    const result = await EGovService.create({
      ...req.body,
      documentUrl: getFileUrl(req.file), //  Cloudinary URL
    });
    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Product

// ========================
// Product image upload
// ========================
app.post("/products", upload.single("imageUrl"), async (req, res) => {
  try {
    const result = await ProductService.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock === "true", // ✅ FormData sends booleans as strings
      imageUrl: getFileUrl(req.file), // ✅ Cloudinary URL
    });
    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// ========================
// Health check
// ========================
app.get("/", (req, res) => {
  res.json({ message: "Backend API running", status: "OK" });
});

// ========================
// Swagger Docs
// ========================
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ========================
// tsoa routes
// ========================
RegisterRoutes(app);

// ========================
// Error handler
// ========================
app.use((err: any, req: any, res: any, next: any) => {
  if (err?.name === "ValidateError") {
    console.error("Validation Error:", err.fields);
    return res
      .status(400)
      .json({ message: "Validation Failed", errors: err.fields });
  }
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// ========================
// Cron jobs
// ========================
startReportCron();

// ========================
// Start server
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("\n==============================");
  console.log(` Server running at: http://localhost:${PORT}`);
  console.log(` Swagger docs at:   http://localhost:${PORT}/docs`);
  console.log("==============================\n");
});
