import { Router } from 'express';
import { userAuthenticationFactory } from '../../modules/user/user-authentication/userAuthenticationFactory';
import { userCreateFactory } from '../../modules/user/user-create/userCreateFactory';

const userRoutes = Router();

userRoutes.post('/', (request, response, next) => {
  userCreateFactory().handle(request, response, next);
});

userRoutes.post('/auth', (request, response, next) => {
  userAuthenticationFactory().handle(request, response, next);
});

export default userRoutes;
