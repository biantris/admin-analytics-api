"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptjs = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.bcryptjs = {
    authenticate: async ({ password, passwordHash }) => {
        return await bcryptjs_1.default.compare(password, passwordHash);
    },
    encryptPassword: async (password) => {
        return bcryptjs_1.default.hashSync(password, 8);
    },
};
