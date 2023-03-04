import { UserModule } from "../userModule";
import { UserCreateController } from "./userCreateController";
import { UserCreateUseCase } from "./userCreateUserCase";

export const userCreateFactory = () => {
  const userRepository = new UserModule();
  const usecase = new UserCreateUseCase(userRepository);
  const controller = new UserCreateController(usecase);
  return controller;
};
