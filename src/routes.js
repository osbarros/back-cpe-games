const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.post('/user', UserController.create);
routes.get('/user/:user_id', UserController.getById);
routes.put('/user/:user_id', UserController.update);
routes.delete('/user/:user_id', UserController.delete);

module.exports = routes;