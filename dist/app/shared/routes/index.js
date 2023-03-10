"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { isAuthenticatedAndActive } from "../middlewares/isAuthenticatedAndActive";
//import { isAuthenticated } from "../middlewares/isAuthenticated";
const user_routes_1 = __importDefault(require("./user-routes"));
const routes = (0, express_1.Router)();
routes.use("/user", user_routes_1.default);
exports.default = routes;
