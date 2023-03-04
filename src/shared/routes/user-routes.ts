import { Router } from "express";
import { createUserFactory } from "../../modules/user/create-user/create-user-factory";

const userRoutes = Router();

userRoutes.post("/", (request, response, next) => {
  createUserFactory().handle(request, response, next);
});

export default userRoutes;
