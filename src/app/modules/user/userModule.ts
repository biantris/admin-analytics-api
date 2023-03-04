import { prismaClient } from "../../../database/prismaClient";
import { User } from "../../../domain/entities/user";
import {
  ICreateUser,
  IUpdatePasswordUser,
  UserRepository,
} from "../../repositories/userRepository";
import { bcryptjs } from "../../shared/utils/bcryptjs";

export class UserModule implements UserRepository {
  async create(data: ICreateUser): Promise<User> {
    try {
      data.password = await bcryptjs.encryptPassword(data.password);
      return await prismaClient.user.create({ data });
    } catch (err) {
      throw err;
    }
  }
  async findById(id: string): Promise<User | null> {
    try {
      return await prismaClient.user.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    try {
      return await prismaClient.user.findFirst({
        where: {
          email,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async updatePassword({ id, password }: IUpdatePasswordUser) {
    try {
      return await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          password: await bcryptjs.encryptPassword(password),
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async findAll(): Promise<User[] | null> {
    try {
      return await prismaClient.user.findMany();
    } catch (err) {
      throw err;
    }
  }
}
