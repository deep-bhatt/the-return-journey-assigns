import express from 'express';
import { loggerMiddleware } from './middleware/logger';
import productRoutes from './routes/productRoutes';

export const app = express();
app.use(loggerMiddleware);
app.use(express.json());
app.use('/api/products', productRoutes);
