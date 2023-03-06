import { UserRepository } from '../../../repositories/userRepository';
import { base64 } from '../../../shared/auth/base64';
import { generateToken } from '../../../shared/auth/generateToken';
import { AppError } from '../../../shared/errors/AppError';
import { bcryptjs } from '../../../shared/utils/bcryptjs';

interface IRequest {
  email: string;
  password: string;
}

export class UserAuthenticationUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async ({ password, email }: IRequest) => {
    try {
      if (email === '' || !email || password === '' || !password) {
        throw new AppError('Email ou senha incorreta');
      }

      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new AppError('Email ou senha incorreta');
      }

      const validPassword = await bcryptjs.authenticate({
        password,
        passwordHash: user.password,
      });

      if (!validPassword) {
        throw new AppError('Email ou senha incorreta');
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        access_level: user.access_level,
        createdAt: user.createdAt,
        token: base64(generateToken(user)),
      };
    } catch (err) {
      throw err;
    }
  };
}
