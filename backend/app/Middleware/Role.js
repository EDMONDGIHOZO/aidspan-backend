"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Role = use("App/Models/Role");

class UserRole {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, response }, next) {
    // call next to advance the request
    const user = await auth.getUser();
    const role = await user
      .roles()
      .withPivot("role_id")
      .select("description")
      .fetch();
    const isAdminUser = role
      .toJSON()
      .find((rol) => rol.description === "admin");
    if (!isAdminUser) return response.status(401).send("Forbidden ");
    await next();
  }
}

module.exports = UserRole;
