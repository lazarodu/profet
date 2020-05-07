"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EstadoSchema extends Schema {
  up() {
    this.create("estados", (table) => {
      table.increments("id_estado").primary();
      table.string("estado", 45).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("estados");
  }
}

module.exports = EstadoSchema;
