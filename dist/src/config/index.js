"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'secret_key'
};
exports.config = config;
