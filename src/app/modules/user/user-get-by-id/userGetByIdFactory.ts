import { UserModule } from '../userModule';
import { UserGetByIdController } from './userGetByIdController';
import { UserGetByIdUseCase } from './userGetByIdUserCase';

export const userGetByIdFactory = () => {
  const userRepository = new UserModule();
  const usecase = new UserGetByIdUseCase(userRepository);
  const controller = new UserGetByIdController(usecase);
  return controller;
};
