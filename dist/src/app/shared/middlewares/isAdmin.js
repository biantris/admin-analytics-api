"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../../config");
const prismaClient_1 = require("../../../database/prismaClient");
const base64_1 = require("../auth/base64");
const AppError_1 = require("../errors/AppError");
const isAdmin = async (request, response, next) => {
    try {
        const { authorization: authHeader } = request.headers;
        if (!authHeader)
            throw new Error('Unauthorized');
        const authorization = (0, base64_1.unbase64)(authHeader);
        const [, token] = authorization.split(' ');
        const { user: id } = jwt.verify(token, config_1.config.TOKEN_SECRET, {
            algorithms: ['HS256'],
        });
        if (!id)
            throw new AppError_1.AppError('Unauthorized');
        const user = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                id,
            },
        });
        if (!user)
            throw new AppError_1.AppError('Unauthorized');
        if (user.access_level !== 'ADMIN')
            throw new AppError_1.AppError('Unauthorized');
        request.user = { id: user.id };
        return next();
    }
    catch (err) {
        next(err);
    }
};
exports.isAdmin = isAdmin;
