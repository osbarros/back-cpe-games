const express = require("express");
const routes = express.Router();

const JogoController = require("./controllers/JogoController");
const JogoValidator = require("./validators/JogoValidator");

// Jogo
routes.get("/jogo/:jogo_id", JogoController.getById);
routes.post("/jogo", JogoController.create);
routes.put("/jogo/:jogo_id", JogoController.update);
routes.delete("/jogo/:jogo_id", JogoController.delete);

module.exports = routes;
