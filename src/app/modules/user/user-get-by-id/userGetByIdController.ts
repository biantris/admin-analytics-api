import { NextFunction, Request, Response } from 'express';
import { UserGetByIdUseCase } from './userGetByIdUserCase';

export class UserGetByIdController {
  constructor(private getUserById: UserGetByIdUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = request.params;

      const user = await this.getUserById.execute(id);

      return response.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
