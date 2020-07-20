import express from 'express';

import UserController from './app/controllers/UserController';

const routes = express.Router();

const userController = new UserController;

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

export default routes;