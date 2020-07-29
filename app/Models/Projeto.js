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

  usuarioProjs() {
    return this.hasMany("App/Models/UsuarioProj", "id_projeto", "id_projeto");
  }

  estado() {
    return this.belongsTo("App/Models/Estado", "id_estado", "id_estado");
  }

  categoria() {
    return this.belongsTo(
      "App/Models/Categoria",
      "id_categoria",
      "id_categoria"
    );
  }
}

module.exports = Projeto;
