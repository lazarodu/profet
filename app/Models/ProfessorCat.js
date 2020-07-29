"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProfessorCat extends Model {
  professor() {
    return this.belongsTo(
      "App/Models/Professor",
      "id_professor",
      "id_professor"
    );
  }
  categoria() {
    return this.belongsTo(
      "App/Models/Categoria",
      "id_categoria",
      "id_categoria"
    );
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = ProfessorCat;
