const express = require("express");
const routes = express.Router();

const JogoController = require("./controllers/JogoController");
const JogoValidator = require("./validators/JogoValidator");

const UserController = require("./controllers/UserController");
const UserValidator = require ("./validators/UserValidator");

// Jogo
routes.post("/jogo", JogoValidator.create, JogoController.create);
routes.get("/jogo/:jogo_id", JogoValidator.getById, JogoController.getById);
routes.put("/jogo/:jogo_id", JogoValidator.updateById, JogoController.update);
routes.delete("/jogo/:jogo_id", JogoValidator.deleteById, JogoController.delete);

// User
routes.post('/user', UserValidator.create, UserController.create);
routes.get('/user/:user_id', UserValidator.getById, UserController.getById);
routes.put('/user/:user_id', UserValidator.update, UserController.update);
routes.delete('/user/:user_id', UserValidator.delete, UserController.delete);

module.exports = routes;
