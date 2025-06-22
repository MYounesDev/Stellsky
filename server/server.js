import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { connectToDatabase } from "./utils/db.js";
import authRoutes from "./routes/auth.routes.js";
import postsRoutes from "./routes/posts.routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerDocument = JSON.parse(
  readFileSync(join(__dirname, "swagger.json"), "utf8")
);

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

// CORS configuration - Allow all origins for now
app.use(
  cors({
    origin: "*", // Allow all origins temporarily for debugging
    credentials: false, // Disable credentials when using wildcard
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Logging
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: NODE_ENV,
  });
});

// API Routes
app.get("/api", (req, res) => {
  res.json({
    message: "StellarSecond API Server",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api-docs",
      auth: "/api/auth",
      posts: "/api/posts",
    },
  });
});

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "StellarSecond API Documentation",
  })
);

/*
// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    message: `The requested endpoint ${req.method} ${req.originalUrl} was not found.`,
  });
}); */

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);

  if (NODE_ENV === "development") {
    res.status(err.status || 500).json({
      error: err.message,
      stack: err.stack,
    });
  } else {
    res.status(err.status || 500).json({
      error: "Internal server error",
    });
  }
});

// Connect to database before starting server
connectToDatabase()
  .then(() => {
    // Start the server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(
        `📚 Swagger Documentation: http://localhost:${PORT}/api-docs`
      );
      console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
      console.log(`🌍 Environment: ${NODE_ENV}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database", err);
    process.exit(1);
  });

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received. Shutting down gracefully...");
  process.exit(0);
});

export default app;
