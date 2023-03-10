"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_create_factory_1 = require("../../modules/user/user-create/user-create-factory");
const userRoutes = (0, express_1.Router)();
userRoutes.post("/", (request, response, next) => {
    (0, user_create_factory_1.userCreateFactory)().handle(request, response, next);
});
exports.default = userRoutes;
