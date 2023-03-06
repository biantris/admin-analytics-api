import { Router } from 'express';
//import { isAuthenticated } from "../middlewares/isAuthenticated";

import userRoutes from './userRoutes';

const routes = Router();

routes.use('/user', userRoutes);

export default routes;
