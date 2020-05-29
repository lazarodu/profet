"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Noticia extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario", "id_usuario", "id_usuario");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Noticia;
