"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetByIdUseCase = void 0;
const AppError_1 = require("../../../shared/errors/AppError");
class UserGetByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.execute = async (id) => {
            try {
                const user = await this.userRepository.findById(id);
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
exports.UserGetByIdUseCase = UserGetByIdUseCase;
