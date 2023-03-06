import { NextFunction, Request, Response } from 'express';
import { ICreateUser } from '../../../repositories/userRepository';
import { UserCreateUseCase } from './userCreateUserCase';

export class UserCreateController {
  constructor(private createUser: UserCreateUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { password, email, name, access_level }: ICreateUser = request.body;

      const user = await this.createUser.execute({
        name,
        email,
        password,
        access_level,
      });

      return response.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
}
