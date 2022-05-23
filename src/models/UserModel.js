const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(usuario) {
        const user_id = uuidv4();
        usuario.user_id = user_id;

        await connection("usuario").insert(usuario);

        return user_id;
    },
    
    async getById( user_id ){
        const result = await connection("usuario").where({ user_id }).select("*").first();
        return result;
    },

    async updateById(user_id, usuario) {
        const result = await connection("usuario").where(user_id).update(usuario);
        return result;
    },

    async deleteById(user_id) {
        const result = await connection("usuario").where({ user_id }).delete();
        return result;
    },
};