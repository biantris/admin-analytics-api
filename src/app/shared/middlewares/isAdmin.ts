import { NextFunction, Request, Response } from 'express';
import { unbase64 } from '../auth/base64';
import { AppError } from '../errors/AppError';
import { bcryptjs } from '../utils/bcryptjs';

export const isAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { authauthorization: authAdminHeader } = request.headers;

    if (!authAdminHeader) throw new Error('Unauthorized');

    const authorization = unbase64(authAdminHeader);

    const isAdmin = await bcryptjs.authenticate({
      password: authorization,
      passwordHash:
        '$2a$08$QizGOrWIh0zH0OMgYslQ7ug4YAI1gKRAJRvdXgJXUjLD2f6hgptdS',
    });

    if (!isAdmin) throw new AppError('Unauthorized');

    return next();
  } catch (err) {
    next(err);
  }
};
