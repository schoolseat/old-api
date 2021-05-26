/* eslint-disable no-unused-vars */
function Up(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();

    table.string('name')
      .notNullable();

    table.string('email')
      .notNullable();

    table.string('password')
      .notNullable();

    table.timestamp('created_at')
      .defaultTo(knex.fn.now());

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now());
  });
}

function Down(knex, Promise) {
  return knex.schema.dropTable('users');
}

exports.up = Up;
exports.down = Down;
