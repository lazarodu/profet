"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioProjSchema extends Schema {
  up() {
    this.create("usuario_projs", (table) => {
      table.increments();
      table
        .integer("id_usuario")
        .unsigned()
        .references("id_usuario")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("id_projeto")
        .unsigned()
        .references("id_projeto")
        .inTable("projetos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.timestamps();
    });
  }

  down() {
    this.drop("usuario_projs");
  }
}

module.exports = UsuarioProjSchema;
