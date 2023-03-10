import { Router } from 'express';
import { userAuthenticationFactory } from '../../modules/user/user-authentication/userAuthenticationFactory';
import { userCreateFactory } from '../../modules/user/user-create/userCreateFactory';
import { userGetAllFactory } from '../../modules/user/user-get-all/userGetAllFactory';
import { userGetByEmailFactory } from '../../modules/user/user-get-by-email/userGetByEmailFactory';
import { userGetByIdFactory } from '../../modules/user/user-get-by-id/userGetByIdFactory';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { limiter } from '../middlewares/rateLimit';

const userRoutes = Router();

userRoutes.post('/', limiter, (request, response, next) => {
  userCreateFactory().handle(request, response, next);
});

userRoutes.post('/auth', (request, response, next) => {
  userAuthenticationFactory().handle(request, response, next);
});

userRoutes.get('/all', isAuthenticated, (request, response, next) => {
  userGetAllFactory().handle(response, next);
});

userRoutes.get('/:id', isAuthenticated, (request, response, next) => {
  userGetByIdFactory().handle(request, response, next);
});

userRoutes.get('/email/:email', isAuthenticated, (request, response, next) => {
  userGetByEmailFactory().handle(request, response, next);
});

export default userRoutes;
