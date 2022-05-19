/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("usuario", function (table) {
      table.uuid('user_id').primary().notNullable();
      table.string('senha').notNullable();
      table.string('email').notNullable();
      table.string('nome').notNullable();
      table.string('nome_usuario').notNullable();
      table.string('pais').notNullable();
      table.string('descricao').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("usuario");
};