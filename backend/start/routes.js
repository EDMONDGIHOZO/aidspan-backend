"use strict";

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

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
Route.post("/register", "User/RegisterController.register");
Route.post("/login", "User/LoginController.login");
Route.group(() => {
  Route.post("/post", "Article/PostController.store").middleware(["auth"]);
  Route.update("/edit/:id", "Article/EditController.update").middleware([
    "owner",
  ]);
  Route.delete("delete/:id", "Article/DeleteController.destroy").middleware([
    "role",
  ]);
})
  .prefix("article")
  .middleware(["auth"]);
