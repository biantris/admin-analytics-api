"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetAllController = void 0;
class UserGetAllController {
    constructor(getAllUser) {
        this.getAllUser = getAllUser;
    }
    async handle(response, next) {
        try {
            const users = await this.getAllUser.execute();
            console.log('users', users);
            return response.status(200).json(users);
        }
        catch (err) {
            console.log('err', err);
            next(err);
        }
    }
}
exports.UserGetAllController = UserGetAllController;
