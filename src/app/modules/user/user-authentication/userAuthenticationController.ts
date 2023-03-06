import { NextFunction, Request, Response } from 'express';
import { UserAuthenticationUseCase } from './userAuthenticationUserCase';

interface IRequest {
  email: string;
  password: string;
}

export class UserAuthenticationController {
  constructor(private authenticationUser: UserAuthenticationUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { password, email }: IRequest = request.body;

      const userAndToken = await this.authenticationUser.execute({
        email,
        password,
      });

      return response.status(200).json(userAndToken);
    } catch (err) {
      next(err);
    }
  }
}
