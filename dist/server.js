"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const routes_1 = require("./routes/routes");
const errorHandler_1 = require("./middlewares/errorHandler");
const migrate_1 = __importDefault(require("./scripts/migrate"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// ── Middlewares ──────────────────────────────────────────────
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false })); // Allow images to load cross-origin
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serve manual uploads folder
app.use("/uploads", express_1.default.static(path.join(__dirname, "../public/uploads")));
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
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, "../public/swagger.json"), "utf8"));
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
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument, {
    customSiteTitle: "Rise Motive API Documentation"
}));
// ── TSOA Routes ─────────────────────────────────────────────
(0, routes_1.RegisterRoutes)(app);
// ── Error Handlers ───────────────────────────────────────────
app.use(errorHandler_1.notFound);
app.use(errorHandler_1.errorHandler);
// ── Start Server ─────────────────────────────────────────────
async function startServer() {
    await (0, migrate_1.default)();
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`
  
    Rise Motive API
    Running on http://localhost:${PORT}
    Environment: ${process.env.NODE_ENV}
  
  `);
    });
}
startServer();
exports.default = app;
