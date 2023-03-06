import { UserRepository } from '../../../repositories/userRepository';
import { AppError } from '../../../shared/errors/AppError';

export class UserGetByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (id: string) => {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) throw new AppError('User not found');

      Reflect.deleteProperty(user, 'password');

      return user;
    } catch (err) {
      throw err;
    }
  };
}
