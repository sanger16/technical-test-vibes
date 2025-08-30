import express, { type Express } from "express";
import cors from "cors";
import type { Origin } from "./types.js";
import productsRouter from "./products.router.js";

const app: Express = express();

// List of allowed origins
const allowedOrigins: Origin = {
  origin: ["http://localhost:3000"],
};

// Parse JSON on body
app.use(express.json());

// CORS
app.use(cors(allowedOrigins));

// Implementing router
app.use("/api", productsRouter);

const port = 3001;

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
