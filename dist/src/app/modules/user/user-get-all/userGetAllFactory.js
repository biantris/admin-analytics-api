"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGetAllFactory = void 0;
const userModule_1 = require("../userModule");
const userGetAllController_1 = require("./userGetAllController");
const userGetAllUserCase_1 = require("./userGetAllUserCase");
const userGetAllFactory = () => {
    const userRepository = new userModule_1.UserModule();
    const usecase = new userGetAllUserCase_1.UserGetAllUseCase(userRepository);
    const controller = new userGetAllController_1.UserGetAllController(usecase);
    return controller;
};
exports.userGetAllFactory = userGetAllFactory;
