"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Estado extends Model {
  static get primaryKey() {
    return "id_estado";
  }
  projetos() {
    return this.hasMany("App/Models/Projeto", "id_estado", "id_estado");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Estado;
