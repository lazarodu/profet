"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Curso extends Model {
  alunos() {
    return this.hasMany("App/Models/Aluno", "id_curso", "id_curso");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Curso;
