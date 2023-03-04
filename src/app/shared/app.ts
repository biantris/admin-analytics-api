import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/AppError";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import "express-async-errors";

dotenv.config();

const app = express();

// origin: "https://admin-analytics.vercel.app/",

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://admin-analytics.vercel.app",
  })
);
app.use("/api", routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
