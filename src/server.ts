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

dotenv.config();

const app = express();

// ========================
// Middlewares
// ========================
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
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
