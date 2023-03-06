import { UserRepository } from '../../../repositories/userRepository';
import { AppError } from '../../../shared/errors/AppError';

export class UserGetByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (email: string) => {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) throw new AppError('User not found');

      Reflect.deleteProperty(user, 'password');

      return user;
    } catch (err) {
      throw err;
    }
  };
}
