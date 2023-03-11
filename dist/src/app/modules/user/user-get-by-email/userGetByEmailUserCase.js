"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetByEmailUseCase = void 0;
const AppError_1 = require("../../../shared/errors/AppError");
class UserGetByEmailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.execute = async (email) => {
            try {
                const user = await this.userRepository.findByEmail(email);
                if (!user)
                    throw new AppError_1.AppError('User not found');
                Reflect.deleteProperty(user, 'password');
                return user;
            }
            catch (err) {
                throw err;
            }
        };
    }
}
exports.UserGetByEmailUseCase = UserGetByEmailUseCase;
