import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../../../config';
import { prismaClient } from '../../../database/prismaClient';
import { unbase64 } from '../auth/base64';
import { AppError } from '../errors/AppError';

type JWTPayload = {
  user: string;
};

export const isAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { authorization: authHeader } = request.headers;

    if (!authHeader) throw new Error('Unauthorized');

    const authorization = unbase64(authHeader);

    const [, token] = authorization.split(' ');

    const { user: id } = jwt.verify(token, config.TOKEN_SECRET, {
      algorithms: ['HS256'],
    }) as JWTPayload;

    if (!id) throw new AppError('Unauthorized');

    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new AppError('Unauthorized');

    if (user.access_level !== 'ADMIN') throw new AppError('Unauthorized');

    request.user = { id: user.id };

    return next();
  } catch (err) {
    next(err);
  }
};
