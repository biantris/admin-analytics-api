"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateController = void 0;
class UserCreateController {
    constructor(createUser) {
        this.createUser = createUser;
    }
    async handle(request, response, next) {
        try {
            const { password, email, name, access_level } = request.body;
            const user = await this.createUser.execute({
                email,
                name,
                password,
                access_level,
            });
            return response.status(201).json(user);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserCreateController = UserCreateController;
