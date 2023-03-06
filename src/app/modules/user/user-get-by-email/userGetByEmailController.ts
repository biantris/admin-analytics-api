import { NextFunction, Request, Response } from 'express';
import { UserGetByEmailUseCase } from './userGetByEmailUserCase';

export class UserGetByEmailController {
  constructor(private getUser: UserGetByEmailUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { email } = request.params;

      const user = await this.getUser.execute(email);

      return response.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
