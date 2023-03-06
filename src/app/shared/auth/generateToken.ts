import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { config } from '../../../config';

export const generateToken = (user: User) => {
  return `JWT ${jwt.sign({ user: user.id }, config.TOKEN_SECRET)}`;
};
