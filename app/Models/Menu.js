"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Menu extends Model {
  categorias() {
    return this.hasMany("App/Models/Categoria", "id_menu", "id_menu");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
  static get primaryKey() {
    return "id_menu";
  }
}

module.exports = Menu;
