import { UserModule } from '../userModule';
import { UserGetAllController } from './userGetAllController';
import { UserGetAllUseCase } from './userGetAllUserCase';

export const userGetAllFactory = () => {
  const userRepository = new UserModule();
  const usecase = new UserGetAllUseCase(userRepository);
  const controller = new UserGetAllController(usecase);
  return controller;
};
