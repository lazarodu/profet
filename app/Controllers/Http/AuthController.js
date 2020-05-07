'use strict'

const Usuario = use('App/Models/Usuario');

class AuthController {
    async authenticate({ request, auth }) {
        const { email, password } = request.all();

        const token = await auth.attempt(email, password);

        return token;
    }
}

module.exports = AuthController
