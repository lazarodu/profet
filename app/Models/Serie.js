"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Serie extends Model {
  static get primaryKey() {
    return "id_serie";
  }
  alunos() {
    return this.hasMany("App/Models/Aluno", "id_serie", "id_serie");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Serie;
