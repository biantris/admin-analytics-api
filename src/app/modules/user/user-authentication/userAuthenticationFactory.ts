import { UserModule } from '../userModule';
import { UserAuthenticationController } from './userAuthenticationController';
import { UserAuthenticationUseCase } from './userAuthenticationUserCase';

export const userAuthenticationFactory = () => {
  const repository = new UserModule();
  const usecase = new UserAuthenticationUseCase(repository);
  const controller = new UserAuthenticationController(usecase);
  return controller;
};
