import { Request, Response, NextFunction } from 'express';

// Validasi data saat registrasi akun
export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { username, email, password } = req.body;

  if (typeof username !== 'string' || username.trim() === '') {
    res.status(400).json({ success: false, message: 'Username wajib diisi!' });
    return;
  }

  if (typeof email !== 'string' || email.trim() === '') {
    res.status(400).json({ success: false, message: 'Email wajib diisi!' });
    return;
  }

  if (typeof password !== 'string' || password.length < 6) {
    res.status(400).json({ success: false, message: 'Password minimal 6 karakter!' });
    return;
  }

  next();
};

// Validasi data saat login
export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;

  if (typeof username !== 'string' || username.trim() === '') {
    res.status(400).json({ success: false, message: 'Username wajib diisi!' });
    return;
  }

  if (typeof password !== 'string' || password === '') {
    res.status(400).json({ success: false, message: 'Password wajib diisi!' });
    return;
  }

  next();
};

// Validasi data saat membuat todo
export const validateTodo = (req: Request, res: Response, next: NextFunction): void => {
  const { task } = req.body;

  if (typeof task !== 'string' || task.trim() === '') {
    res.status(400).json({ success: false, message: 'Task wajib diisi!' });
    return;
  }

  next();
};

// Validasi untuk update todo - task dan is_completed boleh dikirim bersamaan
export const validateUpdateTodo = (req: Request, res: Response, next: NextFunction): void => {
  const { task, is_completed } = req.body;

  // Minimal salah satu harus dikirim
  if (task === undefined && is_completed === undefined) {
    res.status(400).json({ success: false, message: 'Isi minimal task atau is_completed!' });
    return;
  }

  // Jika task dikirim, harus berupa string
  if (task !== undefined && typeof task !== 'string') {
    res.status(400).json({ success: false, message: 'Task harus berupa string!' });
    return;
  }

  // Jika is_completed dikirim, harus berupa boolean
  if (is_completed !== undefined && typeof is_completed !== 'boolean') {
    res.status(400).json({ success: false, message: 'is_completed harus berupa true atau false!' });
    return;
  }

  next();
};