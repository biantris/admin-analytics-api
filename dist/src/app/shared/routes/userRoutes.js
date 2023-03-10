"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userCreateFactory_1 = require("../../modules/user/user-create/userCreateFactory");
const userRoutes = (0, express_1.Router)();
userRoutes.post("/", (request, response, next) => {
    (0, userCreateFactory_1.userCreateFactory)().handle(request, response, next);
});
exports.default = userRoutes;
