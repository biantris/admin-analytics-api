"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor({ email, id, name, password, access_level }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.access_level = access_level;
        this.createdAt = new Date();
    }
    static create(props) {
        const user = new User(props);
        return user;
    }
}
exports.User = User;
