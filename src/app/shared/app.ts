import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './errors/AppError';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/open', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Beatriz Oliveira Globo challenge (づ￣ ³￣)づ',
    status: 200,
  });
});

app.use('/api', routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
