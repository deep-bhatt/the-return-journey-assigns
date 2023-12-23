import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

const logFilePath = './log.txt';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const log = `${timestamp} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(logFilePath, log, err => {
    if (err) {
      console.error('Error writing to log file', err);
    }
  });
  next();
};
