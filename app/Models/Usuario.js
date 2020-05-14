"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class Usuario extends Model {
  static boot() {
    super.boot();

    this.addHook("beforeSave", async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }

  projetos() {
    return this.belongsToMany(
      "App/Models/Projeto",
      "id_usuario",
      "id_projeto",
      "id_usuario",
      "id_projeto"
    ).pivotModel("App/Models/UsuarioProj");
  }

  noticias() {
    return this.hasMany("App/Models/Notica", "id_noticia", "id_noticia");
  }

  aluno() {
    return this.hasOne("App/Models/Aluno", "id_aluno", "id_aluno");
  }

  professor() {
    return this.hasOne("App/Models/Professor", "id_professor", "id_professor");
  }
}

module.exports = Usuario;
