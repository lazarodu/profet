"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Curso extends Model {
  alunos() {
    return this.hasMany("App/Models/Curso", "id_curso", "id_curso");
  }
}

module.exports = Curso;
