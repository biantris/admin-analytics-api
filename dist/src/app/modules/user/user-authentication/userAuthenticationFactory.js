"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthenticationFactory = void 0;
const userModule_1 = require("../userModule");
const userAuthenticationController_1 = require("./userAuthenticationController");
const userAuthenticationUserCase_1 = require("./userAuthenticationUserCase");
const userAuthenticationFactory = () => {
    const repository = new userModule_1.UserModule();
    const usecase = new userAuthenticationUserCase_1.UserAuthenticationUseCase(repository);
    const controller = new userAuthenticationController_1.UserAuthenticationController(usecase);
    return controller;
};
exports.userAuthenticationFactory = userAuthenticationFactory;
