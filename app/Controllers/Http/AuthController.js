'use strict'

const Usuario = use('App/Models/Usuario');

class AuthController {
    async authenticate({ request, auth }) {
        const { email, password } = request.all();
        const retorno = {};
        let token;
        if(token = await auth.attempt(email, password)) {
            const user = await Usuario.findBy('email', email)
            retorno.token = token.token
            retorno.user = user.nome;
            retorno.id = user.id;
        } else {
            retorno.data = "E-mail ou senha Incorretos";
        }
        return retorno;
    }
}

module.exports = AuthController
