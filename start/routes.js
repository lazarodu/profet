'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'UsuarioController.store')
Route.post('/update/:id', 'UsuarioController.update').middleware(['auth']);
Route.get('/show/user', 'UsuarioController.show').middleware(['auth']);

Route.post('/noticia/post', 'NoticiaController.store').middleware(['auth']);
Route.post('/noticia/update/:id_noticia', 'NoticiaController.update').middleware(['auth']);
Route.get('/noticia/show', 'NoticiaController.index');


Route.post("/authenticate", "AuthController.authenticate");


Route.get('/users', 'UsuarioController.index')

