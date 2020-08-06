'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioProj extends Model {
    projetos() {
        return this.belongsTo(
            "App/Models/Projeto",
            "id_projeto",
            "id_projeto"
        );
    }

    usuarios() {
        return this.belongsTo(
            "App/Models/Usuario",
            "id_usuario",
            "id_usuario"
        );
    }

    static get hidden() {
        return ["created_at", "updated_at"];
    }
}

module.exports = UsuarioProj
