"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userAuthenticationFactory_1 = require("../../modules/user/user-authentication/userAuthenticationFactory");
const userCreateFactory_1 = require("../../modules/user/user-create/userCreateFactory");
const userGetAllFactory_1 = require("../../modules/user/user-get-all/userGetAllFactory");
const userGetByEmailFactory_1 = require("../../modules/user/user-get-by-email/userGetByEmailFactory");
const userGetByIdFactory_1 = require("../../modules/user/user-get-by-id/userGetByIdFactory");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/', (request, response, next) => {
    (0, userCreateFactory_1.userCreateFactory)().handle(request, response, next);
});
userRoutes.post('/auth', (request, response, next) => {
    (0, userAuthenticationFactory_1.userAuthenticationFactory)().handle(request, response, next);
});
userRoutes.get('/all', isAuthenticated_1.isAuthenticated, (request, response, next) => {
    (0, userGetAllFactory_1.userGetAllFactory)().handle(response, next);
});
userRoutes.get('/:id', isAuthenticated_1.isAuthenticated, (request, response, next) => {
    (0, userGetByIdFactory_1.userGetByIdFactory)().handle(request, response, next);
});
userRoutes.get('/email/:email', isAuthenticated_1.isAuthenticated, (request, response, next) => {
    (0, userGetByEmailFactory_1.userGetByEmailFactory)().handle(request, response, next);
});
exports.default = userRoutes;
