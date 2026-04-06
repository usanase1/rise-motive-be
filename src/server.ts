import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as fs from "fs";
import * as path from "path";

import { RegisterRoutes } from "./routes/routes";
import { errorHandler, notFound } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middlewares ──────────────────────────────────────────────
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ── TSOA Routes ─────────────────────────────────────────────
RegisterRoutes(app);

// ── Error Handlers ───────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║   Rise Motive API                    ║
  ║   Running on http://localhost:${PORT}   ║
  ║   Environment: ${process.env.NODE_ENV}          ║
  ╚══════════════════════════════════════╝
  `);
});

export default app;