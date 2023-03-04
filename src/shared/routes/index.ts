import { Router } from "express";
//import { isAuthenticatedAndActive } from "../middlewares/isAuthenticatedAndActive";
import { isAuthenticated } from "../middlewares/isAuthenticated";

import userRoutes from "./user-routes";

const routes = Router();

routes.use("/user", userRoutes);

export default routes;
