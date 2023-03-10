"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateFactory = void 0;
const user_module_1 = require("../user-module");
const user_create_controller_1 = require("./user-create-controller");
const user_create_user_case_1 = require("./user-create-user-case");
const userCreateFactory = () => {
    const userRepository = new user_module_1.UserModule();
    const usecase = new user_create_user_case_1.UserCreateUseCase(userRepository);
    const controller = new user_create_controller_1.UserCreateController(usecase);
    return controller;
};
exports.userCreateFactory = userCreateFactory;
