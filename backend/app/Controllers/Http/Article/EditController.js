"use strict";
const Article = use("App/Models/Article");
const Category = use("App/Models/Category");
class EditController {
  async update({ request, response, params, auth }) {
    let article = await Article.find(params.id);

    let user = await auth.getUser();
    if (article.user_id != user.id) {
      response.status(400).json({
        message:
          "you are not allowed to perform this action,article doesn't belong to you",
      });
    } else {
      const input = request.all();
      const title = request.input("title");
      const second_title = request.input("second_title");
      const content = request.input("content");
      const date = request.input("date");
      const abstract = request.input("abstract");
      const type = request.input("type");
      const tags = request.input("tags");
      const language = request.input("language");
      article.title = title;
      article.second_title = second_title;
      article.abstract = abstract;
      article.content = content;
      article.date = date;
      article.author = user.username;
      article.type = type;
      article.tags = tags;
      article.language = language;
      const category = await Category.findBy("name", input.category_name);
      article.category_id = category.id;
      await article.save();
      return response.json(article);
    }
  }
}

module.exports = EditController;
