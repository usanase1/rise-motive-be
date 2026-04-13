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

dotenv.config();

const app = express();

// ========================
// Middlewares
// ========================

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    res.status(200).json({
      message: "File uploaded successfully",
      fileUrl,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
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
