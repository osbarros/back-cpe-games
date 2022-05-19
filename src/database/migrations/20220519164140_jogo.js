/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("jogo", function (table) {
      table.uuid("jogo_id").primary().notNullable();
      table.string("nome_jogo").notNullable();
      table.json("imagem_jogo").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("jogo")
};
