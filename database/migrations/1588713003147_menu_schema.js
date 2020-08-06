"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MenuSchema extends Schema {
  up() {
    this.create("menus", (table) => {
      table.increments("id_menu").primary();
      table.string("nome").notNullable().unique();

      table.timestamps();
    });
  }

  down() {
    this.drop("menus");
  }
}

module.exports = MenuSchema;
