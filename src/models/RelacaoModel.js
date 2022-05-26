const { v4:uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(relacao) {
        const relacao_id = uuidv4();
        relacao.relacao_id = relacao_id;

        const result = await connection("relacao").insert(relacao);

        return result;
    },

    async getById(user_id) {
        const result = await connection("relacao").where({user_id}).select("*");

        return result;
    },

    async updateById(relacao_id, relacao) {
        const result = await connection("relacao").where({relacao_id}).update(relacao);

        return result;
    },

    async deleteById(relacao_id) {
        const result = await connection("relacao").where({relacao_id}).delete();

        return result;
    }
};