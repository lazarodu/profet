"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlunoSchema extends Schema {
  up() {
    this.create("alunos", (table) => {
      table.increments("id_aluno").primary();

      table
        .integer("id_usuario")
        .unsigned()
        .references("id_usuario")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("id_curso")
        .unsigned()
        .references("id_curso")
        .inTable("cursos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("id_serie")
        .unsigned()
        .references("id_serie")
        .inTable("series")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.timestamps();
    });
  }

  down() {
    this.drop("alunos");
  }
}

module.exports = AlunoSchema;
