'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estado extends Model {
    projetos() {
        return this.hasMany("App/Models/Estado", "id_estado", "id_estado");
    }
}

module.exports = Estado
