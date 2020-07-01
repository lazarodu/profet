"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Professor extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario", "id_usuario", "id_usuario");
  }

  categorias() {
    return this.belongsToMany(
      "App/Models/Categoria",
      "id_professor",
      "id_categoria",
      "id_professor",
      "id_categoria"
    ).pivotModel("App/Models/ProfessorCat");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Professor;
