"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Categoria extends Model {
  static get primaryKey() {
    return "id_categoria";
  }
  menu() {
    return this.belongsTo("App/Models/Menu", "id_menu", "id_menu");
  }

  professors() {
    return this.belongsToMany(
      "App/Models/Professor",
      "id_categoria",
      "id_professor",
      "id_categoria",
      "id_professor"
    ).pivotModel("App/Models/ProfessorCat");
  }

  projetos() {
    return this.hasMany("App/Models/Projeto", "id_categoria", "id_categoria");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Categoria;
