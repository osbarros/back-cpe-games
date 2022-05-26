/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("relacao", function (table) {
      table.uuid("relacao_id").primary().notNullable();
      table.uuid("jogo_id").notNullable();
      table.foreign("jogo_id").references("jogo_id").inTable("jogo");
      table.uuid("user_id").notNullable();
      table.foreign("user_id").references("user_id").inTable("user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("relacao")
};
