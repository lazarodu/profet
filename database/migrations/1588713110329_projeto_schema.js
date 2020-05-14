"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjetoSchema extends Schema {
  up() {
    this.create("projetos", (table) => {
      table.increments("id_projeto").primary();

      table.string("nome", 100).notNullable().unique();
      table.text("resumo").notNullable();
      table.text("introducao").notNullable();
      table.text("objetivo").notNullable();
      table.text("metodologia", "mediumtext");
      table.text("result_disc");
      table.text("conclusao");

      table
        .integer("id_categoria")
        .unsigned()
        .references("id_categoria")
        .inTable("categorias")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("id_estado")
        .unsigned()
        .references("id_estado")
        .inTable("estados")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("projetos");
  }
}

module.exports = ProjetoSchema;
