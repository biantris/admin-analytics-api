"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const bcryptjs_1 = require("../../shared/utils/bcryptjs");
class UserModule {
    async create(data) {
        try {
            data.password = await bcryptjs_1.bcryptjs.encryptPassword(data.password);
            return await prismaClient_1.prismaClient.user.create({ data });
        }
        catch (err) {
            throw err;
        }
    }
    async findById(id) {
        try {
            return await prismaClient_1.prismaClient.user.findFirst({
                where: {
                    id,
                },
            });
        }
        catch (err) {
            throw err;
        }
    }
    async findByEmail(email) {
        try {
            return await prismaClient_1.prismaClient.user.findFirst({
                where: {
                    email,
                },
            });
        }
        catch (err) {
            throw err;
        }
    }
    async updatePassword({ id, password }) {
        try {
            return await prismaClient_1.prismaClient.user.update({
                where: {
                    id,
                },
                data: {
                    password: await bcryptjs_1.bcryptjs.encryptPassword(password),
                },
            });
        }
        catch (err) {
            throw err;
        }
    }
    async findAll() {
        try {
            return await prismaClient_1.prismaClient.user.findMany();
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UserModule = UserModule;
