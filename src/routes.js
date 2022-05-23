const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const UserValidator = require ("./validators/UserValidator");

routes.post('/user', UserValidator.create, UserController.create);
routes.get('/user/:user_id', UserValidator.getById, UserController.getById);
routes.put('/user/:user_id', UserValidator.update, UserController.update);
routes.delete('/user/:user_id', UserValidator.delete, UserController.delete);

module.exports = routes;