"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
const userModule_1 = require("../userModule");
const userCreateController_1 = require("./userCreateController");
const userCreateUserCase_1 = require("./userCreateUserCase");
const userCreateFactory = () => {
    const userRepository = new userModule_1.UserModule();
    const usecase = new userCreateUserCase_1.UserCreateUseCase(userRepository);
    const controller = new userCreateController_1.UserCreateController(usecase);
    return controller;
};
exports.userCreateFactory = userCreateFactory;
