"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthenticationController = void 0;
class UserAuthenticationController {
    constructor(authenticationUser) {
        this.authenticationUser = authenticationUser;
    }
    async handle(request, response, next) {
        try {
            const { password, email } = request.body;
            const userAndToken = await this.authenticationUser.execute({
                email,
                password,
            });
            return response.status(200).json(userAndToken);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserAuthenticationController = UserAuthenticationController;
