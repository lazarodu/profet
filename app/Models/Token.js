"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Token extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario", "id_usuario", "id_usuario");
  }
}

module.exports = Token;
