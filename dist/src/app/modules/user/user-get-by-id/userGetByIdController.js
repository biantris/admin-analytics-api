"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGetByIdController = void 0;
class UserGetByIdController {
    constructor(getUserById) {
        this.getUserById = getUserById;
    }
    async handle(request, response, next) {
        try {
            const { id } = request.params;
            const user = await this.getUserById.execute(id);
            return response.status(200).json(user);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserGetByIdController = UserGetByIdController;
