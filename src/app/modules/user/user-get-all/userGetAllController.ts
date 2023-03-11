import { NextFunction, Response } from 'express';
import { UserGetAllUseCase } from './userGetAllUserCase';

export class UserGetAllController {
  constructor(private getAllUser: UserGetAllUseCase) {}

  async handle(response: Response, next: NextFunction): Promise<any> {
    try {
      const users = await this.getAllUser.execute();

      console.log('users', users);

      return response.status(200).json(users);
    } catch (err) {
      console.log('err', err);
      next(err);
    }
  }
}
