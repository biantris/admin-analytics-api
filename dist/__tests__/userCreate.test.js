"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const prisma_config_1 = __importDefault(require("../prisma/prisma.config"));
const supertest_config_1 = require("../supertest.config");
describe("POST /users", () => {
    afterAll(async () => {
        await prisma_config_1.default.user.deleteMany({});
    });
    it("should create a user", async () => {
        const response = await (0, supertest_1.default)(supertest_config_1.app).post("/users").send({
            name: "John Doe",
            email: "john@gmail.com",
            password: "12345678",
            access_level: "EMPLOYEE",
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name", "John Doe");
    });
});
