"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthenticationUseCase = void 0;
const base64_1 = require("../../../shared/auth/base64");
const generateToken_1 = require("../../../shared/auth/generateToken");
const AppError_1 = require("../../../shared/errors/AppError");
const bcryptjs_1 = require("../../../shared/utils/bcryptjs");
class UserAuthenticationUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.execute = async ({ password, email }) => {
            try {
                if (email === '' || !email || password === '' || !password) {
                    throw new AppError_1.AppError('Email ou senha incorreta');
                }
                const user = await this.userRepository.findByEmail(email);
                if (!user) {
                    throw new AppError_1.AppError('Email ou senha incorreta');
                }
                const validPassword = await bcryptjs_1.bcryptjs.authenticate({
                    password,
                    passwordHash: user.password,
                });
                if (!validPassword) {
                    throw new AppError_1.AppError('Email ou senha incorreta');
                }
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    access_level: user.access_level,
                    createdAt: user.createdAt,
                    token: (0, base64_1.base64)((0, generateToken_1.generateToken)(user)),
                };
            }
            catch (err) {
                throw err;
            }
        };
    }
}
exports.UserAuthenticationUseCase = UserAuthenticationUseCase;
