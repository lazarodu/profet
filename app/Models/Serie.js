'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Serie extends Model {
    alunos() {
        return this.hasMany("App/Models/Serie", "id_serie", "id_serie");
    }
}

module.exports = Serie
