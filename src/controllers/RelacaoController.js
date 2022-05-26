const RelacaoModel = require("../models/RelacaoModel");

module.exports = {
    async create(req, res) {
        try {
            const newRelacao = req.body;
            await RelacaoModel.create(newRelacao);
            return res.status(200).json({notification: "Relacao created succesfully."});

        } catch (error) {
            console.warn("Relacao creation FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to create Relacao"
            });
        }
    },
    
    async getById(req, res) {
        try {
            const {user_id} = req.params;
            const result = await RelacaoModel.getById(user_id);

            if(result == 0) {
                return res.status(400).json({ notification : "Relacao not found."});
            }

            return res.status(200).json(result);


        } catch (error) {
            console.warn("Relacao fetch FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to get Relacao"
            });
        }
    },

    async update(req, res) {
        try {
            const {relacao_id} = req.params;
            const updatedRelacao = req.body;

            const result = await RelacaoModel.updateById(relacao_id, updatedRelacao);

            // Validação parcial da requisição
            if(result == 0) {
                return res.status(400).json({ notification : "Relacao not found."});
            }

            return res.status(200).json({ notification: "Relacao updated succesfully." });

        } catch (error) {
            console.warn("Relacao update FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to update Relacao"
            });
        }
    },

    async delete(req, res) {
        try {
            const {relacao_id} = req.params;

            const result = await RelacaoModel.deleteById(relacao_id);

            // Validação parcial da requisição
            if(result == 0) {
                return res.status(400).json({ notification : "Relacao not found."});
            }

            return res.status(200).json({ notification: "Relacao deleted succesfully." });
        } catch (error) {
            console.warn("Relacao deletion FAILED:", error);

            return res.status(500).json({
                notification: "Internal server error while trying to delete Relacao"
            });
        }
    },
}