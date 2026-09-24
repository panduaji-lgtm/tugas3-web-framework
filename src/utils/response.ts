import type { Response } from 'express';
import type { PaginationMeta, ResponseMeta } from '../types/common';

// 1. Helper function untuk membuat timestamp
const createMeta = (): ResponseMeta => ({
  timestamp: new Date().toISOString(),
});

// 2. Response Sukses Standard
export const sendSuccess = <T = unknown>(
  res: Response,
  message: string,
  data?: T,
  status = 200
): void => {
  res.status(status).json({
    success: true,
    message,
    ...(data !== undefined ? { data } : {}),
    meta: createMeta(),
  });
};

// 3. Response Sukses dengan Pagination
export const sendSuccessPagination = <T = unknown>(
  res: Response,
  message: string,
  data: T,
  pagination: PaginationMeta,
  status = 200
): void => {
  res.status(status).json({
    success: true,
    message,
    data,
    meta: { ...createMeta(), pagination },
  });
};

// 4. Response Error Standard
export const sendError = (
  res: Response,
  message: string,
  status = 500
): void => {
  res.status(status).json({
    success: false,
    message,
    meta: createMeta(),
  });
};