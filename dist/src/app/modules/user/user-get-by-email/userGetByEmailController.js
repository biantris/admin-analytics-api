"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetByEmailController = void 0;
class UserGetByEmailController {
    constructor(getUser) {
        this.getUser = getUser;
    }
    async handle(request, response, next) {
        try {
            const { email } = request.params;
            const user = await this.getUser.execute(email);
            return response.status(200).json(user);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserGetByEmailController = UserGetByEmailController;
