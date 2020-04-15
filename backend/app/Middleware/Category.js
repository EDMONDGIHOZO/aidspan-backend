"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Cate = use("App/Models/Category");

class Category {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    const categories = [
      { name: "issue1" },
      { name: "issue2" },
      { name: "issue3" },
      { name: "issue4" },
      { name: "issue5" },
    ];
    for (let i = 0; i < categories.length; i++) {
      const category = await Cate.findBy("name", categories[i].name);
      if (!category) {
        await Cate.create(categories[i]);
      }
    }

    // call next to advance the request
    await next();
  }
}

module.exports = Category;
