import bcrypt from "bcryptjs";

interface IVerify {
  password: string;
  passwordHash: string;
}

export const bcryptjs = {
  authenticate: async ({ password, passwordHash }: IVerify) => {
    return await bcrypt.compare(password, passwordHash);
  },

  encryptPassword: async (password: string) => {
    return bcrypt.hashSync(password, 8);
  },
};
