"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Projeto extends Model {
  usuarios() {
    return this.belongsToMany(
      "App/Models/Usuario",
      "id_projeto",
      "id_usuario",
      "id_projeto",
      "id_usuario"
    ).pivotModel("App/Models/UsuarioProj");
  }
}

module.exports = Projeto;
