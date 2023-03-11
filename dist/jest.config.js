"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    clearMocks: true,
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    setupFilesAfterEnv: ['./jest.config.ts'],
    coverageProvider: 'v8',
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
};
