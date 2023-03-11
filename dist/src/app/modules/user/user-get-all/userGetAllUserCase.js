"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetAllUseCase = void 0;
class UserGetAllUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.execute = async () => {
            try {
                return await this.userRepository.findAll();
            }
            catch (err) {
                console.log('err', err);
                throw err;
            }
        };
    }
}
exports.UserGetAllUseCase = UserGetAllUseCase;
