"use strict";

const CategoriaController = require('../app/Controllers/Http/CategoriaController');

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
const Route = use("Route");

Route.group(() => {
  Route.post("/update/:id", "UsuarioController.update");
  Route.get("/show/user", "UsuarioController.show");
  Route.resource("noticia", "NoticiaController");
  Route.resource("menu", "MenuController");
  Route.resource("curso", "CursoController");
  Route.resource("serie", "SerieController");
  Route.resource("categoria", "CategoriaController");
  Route.resource("aluno", "AlunoController");
  Route.resource("professor", "ProfessorController");
  Route.resource("projeto", "ProjetoController");
  Route.resource("professorcat", "ProfessorCatController");
  Route.resource("estado", "EstadoController");
  Route.resource("usuarioproj", "UsuarioProjController");
  
  // Route.post("/noticia/post", "NoticiaController.store");
  // Route.post(
  //   "/noticia/update/:id_noticia",
  //   "NoticiaController.update"
  // );
}).middleware(["auth"]);


Route.get("/noticia/show", "NoticiaController.index");

Route.get("/users/:tipo", "UsuarioController.index");
Route.post("/register", "UsuarioController.store");

Route.post("/authenticate", "AuthController.authenticate");


