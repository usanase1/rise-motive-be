import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { upload } from "./lib/upload"; //

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

// cors

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

// CREATE + UPLOAD (uses on upload application service)
app.post(
  "/application-docs",
  upload.single("documentUrl"), //  matches frontend
  async (req, res) => {
    try {
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const result = await ApplicationDocService.create({
        ...req.body,
        documentUrl: fileUrl, //  pass to service
      });

      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

// upload file for government

app.post(
  "/web-digital",
  upload.single("documentUrl"), //  matches frontend
  async (req, res) => {
    try {
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const result = await WebDigitalService.create({
        ...req.body,
        documentUrl: fileUrl, //  pass to service
      });

      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

// upload creative media

app.post(
  "/creative-media",
  upload.single("documentUrl"), //  matches frontend
  async (req, res) => {
    try {
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const result = await CreativeMediaService.create({
        ...req.body,
        documentUrl: fileUrl, //  pass to service
      });

      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

// legal

app.post(
  "/legal",
  upload.single("documentUrl"), //  matches frontend
  async (req, res) => {
    try {
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const result = await LegalOfficialService.create({
        ...req.body,
        documentUrl: fileUrl, //  pass to service
      });

      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

// egovernment

app.post(
  "/egov",
  upload.single("documentUrl"), //  matches frontend
  async (req, res) => {
    try {
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const result = await EGovService.create({
        ...req.body,
        documentUrl: fileUrl, //  pass to service
      });

      res.status(201).json(result);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ========================
// Health check route
// ========================
app.get("/", (req, res) => {
  res.json({
    message: "Backend API running ",
    status: "OK",
  });
});

// ========================
// Swagger Docs
// ========================
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ========================
// tsoa routes
// ========================
RegisterRoutes(app);

// the error codes

app.use((err: any, req: any, res: any, next: any) => {
  if (err?.name === "ValidateError") {
    console.error(" Validation Error:", err.fields);

    return res.status(400).json({
      message: "Validation Failed",
      errors: err.fields,
    });
  }

  console.error(" Server Error:", err);
  res.status(500).json({
    message: "Internal Server Error",
  });
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
