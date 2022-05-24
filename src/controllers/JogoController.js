const JogoModel = require("../models/JogoModel");

module.exports = {
    async create(req, res) {
        try {
            const newJogo = req.body;
            await JogoModel.create(newJogo);
            return res.status(200).json({notification: "Jogo created succesfully."});

        } catch (error) {
            console.warn("Jogo creation FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to create Jogo"
            });
        }
    },
    
    async getById(req, res) {
        try {
            const {jogo_id} = req.params;
            const result = await JogoModel.getById(jogo_id);

            if(result == 0) {
                return res.status(400).json({ notification : "Jogo not found."});
            }

            return res.status(200).json(result);


        } catch (error) {
            console.warn("Jogo fetch FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to get Jogo"
            });
        }
    },

    async update(req, res) {
        try {
            const {jogo_id} = req.params;
            const updatedJogo = req.body;

            const result = await JogoModel.updateById(jogo_id, updatedJogo);

            // Validação parcial da requisição
            if(result == 0) {
                return res.status(400).json({ notification : "Jogo not found."});
            }

            return res.status(200).json({ notification: "Jogo updated succesfully." });

        } catch (error) {
            console.warn("Jogo update FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to update Jogo"
            });
        }
    },

    async delete(req, res) {
        try {
            const {jogo_id} = req.params;

            const result = await JogoModel.deleteById(jogo_id);

            // Validação parcial da requisição
            if(result == 0) {
                return res.status(400).json({ notification : "Jogo not found."});
            }

            return res.status(200).json({ notification: "Jogo deleted succesfully." });
        } catch (error) {
            console.warn("Jogo deletion FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to delete Jogo"
            });
        }
    },
}