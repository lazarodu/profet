"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfessorCatSchema extends Schema {
  up() {
    this.create("professor_cats", (table) => {
      table.increments();

      table
        .integer("id_professor")
        .unsigned()
        .references("id_professor")
        .inTable("professors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("id_categoria")
        .unsigned()
        .references("id_categoria")
        .inTable("categorias")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.timestamps();
    });
  }

  down() {
    this.drop("professor_cats");
  }
}

module.exports = ProfessorCatSchema;
