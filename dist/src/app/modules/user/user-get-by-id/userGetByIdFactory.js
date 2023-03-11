"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGetByIdFactory = void 0;
const userModule_1 = require("../userModule");
const userGetByIdController_1 = require("./userGetByIdController");
const userGetByIdUserCase_1 = require("./userGetByIdUserCase");
const userGetByIdFactory = () => {
    const userRepository = new userModule_1.UserModule();
    const usecase = new userGetByIdUserCase_1.UserGetByIdUseCase(userRepository);
    const controller = new userGetByIdController_1.UserGetByIdController(usecase);
    return controller;
};
exports.userGetByIdFactory = userGetByIdFactory;
