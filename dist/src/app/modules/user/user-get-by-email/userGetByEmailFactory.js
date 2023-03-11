"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGetByEmailFactory = void 0;
const userModule_1 = require("../userModule");
const userGetByEmailController_1 = require("./userGetByEmailController");
const userGetByEmailUserCase_1 = require("./userGetByEmailUserCase");
const userGetByEmailFactory = () => {
    const userRepository = new userModule_1.UserModule();
    const usecase = new userGetByEmailUserCase_1.UserGetByEmailUseCase(userRepository);
    const controller = new userGetByEmailController_1.UserGetByEmailController(usecase);
    return controller;
};
exports.userGetByEmailFactory = userGetByEmailFactory;
