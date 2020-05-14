"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NoticiaSchema extends Schema {
  up() {
    this.create("noticias", (table) => {
      table.increments("id_noticia").primary();
      table.string("nome", 50).notNullable();
      table.string("link", 255).notNullable();
      table
        .integer("id_usuario")
        .unsigned()
        .references("id_usuario")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("noticias");
  }
}

module.exports = NoticiaSchema;
