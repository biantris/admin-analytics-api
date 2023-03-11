import { User } from '../../domain/entities/user';

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  access_level: string;
}

export interface IAuthentication {
  email: string;
  password: string;
}

export interface IUpdatePasswordUser {
  id: string;
  password: string;
}

export interface UserRepository {
  create(data: ICreateUser): Promise<User>;
  findAll(): Promise<User[] | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  updatePassword(data: IUpdatePasswordUser): Promise<User | null>;
}
