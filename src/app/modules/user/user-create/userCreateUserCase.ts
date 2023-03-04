import {
  ICreateUser,
  UserRepository,
} from "../../../repositories/userRepository";
import { AppError } from "../../../shared/errors/AppError";

export class UserCreateUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async ({ email, name, password, access_level }: ICreateUser) => {
    try {
      const userExist = await this.userRepository.findByEmail(email);

      if (userExist) {
        throw new AppError("Email já cadastrado!");
      }

      const user = await this.userRepository.create({
        name,
        email,
        password,
        access_level,
      });

      return user;
    } catch (err: any) {
      console.log(err);
      console.log(err?.response?.data);
      throw err;
    }
  };
}
