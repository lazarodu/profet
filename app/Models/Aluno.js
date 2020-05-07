"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Aluno extends Model {
  curso() {
    return this.belongsTo("App/Models/Curso", "id_curso", "id_curso");
  }
  

  serie() {
    return this.belongsTo("App/Models/Serie", "id_serie", "id_serie");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario", "id_usuario", "id_usuario");
  }
}

module.exports = Aluno;
