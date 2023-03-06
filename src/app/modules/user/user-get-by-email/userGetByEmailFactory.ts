import { UserModule } from '../userModule';
import { UserGetByEmailController } from './userGetByEmailController';
import { UserGetByEmailUseCase } from './userGetByEmailUserCase';

export const userGetByEmailFactory = () => {
  const userRepository = new UserModule();
  const usecase = new UserGetByEmailUseCase(userRepository);
  const controller = new UserGetByEmailController(usecase);
  return controller;
};
