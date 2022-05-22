const express = require("express");
const routes = express.Router();

const JogoController = require("./controllers/JogoController");
const JogoValidator = require("./validators/JogoValidator");

// Jogo
routes.post("/jogo", JogoValidator.create, JogoController.create);
routes.get("/jogo/:jogo_id", JogoValidator.getById, JogoController.getById);
routes.put("/jogo/:jogo_id", JogoValidator.update, JogoController.update);
routes.delete("/jogo/:jogo_id", JogoValidator.delete, JogoController.delete);

module.exports = routes;
