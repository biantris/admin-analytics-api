import { Router } from "express";
import { userCreateFactory } from "../../modules/user/user-create/userCreateFactory";

const userRoutes = Router();

userRoutes.post("/", (request, response, next) => {
  userCreateFactory().handle(request, response, next);
});

export default userRoutes;
