"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategoriaSchema extends Schema {
  up() {
    this.create("categorias", (table) => {
      table.increments("id_categoria").primary();
      table.string("name").notNullable().unique();

      table
        .integer("id_menu")
        .unsigned()
        .references("id_menu")
        .inTable("menus")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.timestamps();
    });
  }

  down() {
    this.drop("categorias");
  }
}

module.exports = CategoriaSchema;
