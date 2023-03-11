import { UserRepository } from '../../../repositories/userRepository';

export class UserGetAllUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async () => {
    try {
      return await this.userRepository.findAll();
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
}
