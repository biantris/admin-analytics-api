"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateUseCase = void 0;
const AppError_1 = require("../../../shared/errors/AppError");
class UserCreateUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.execute = async ({ email, name, password, access_level }) => {
            var _a;
            try {
                const userExist = await this.userRepository.findByEmail(email);
                if (userExist) {
                    throw new AppError_1.AppError('Email já cadastrado!');
                }
                const user = await this.userRepository.create({
                    name,
                    email,
                    password,
                    access_level,
                });
                return user;
            }
            catch (err) {
                console.log(err);
                console.log((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data);
                throw err;
            }
        };
    }
}
exports.UserCreateUseCase = UserCreateUseCase;
