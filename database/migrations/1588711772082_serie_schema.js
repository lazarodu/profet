"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SerieSchema extends Schema {
  up() {
    this.create("series", (table) => {
      table.increments("id_serie").primary();

      table.integer("serie").notNullable().unique();

      table.timestamps();
    });
  }

  down() {
    this.drop("series");
  }
}

module.exports = SerieSchema;
