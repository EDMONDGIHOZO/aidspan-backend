"use strict";
const Article = use("App/Models/Article");

class EditController {
  async update({ request, response, params }) {
    let article = await Article.find(params.id);
    const title = request.input("title");
    const second_title = request.input("second_title");
    const abstract = request.input("abstract");
    const type = request.input("type");
    const tags = request.input("tags");
    const language = request.input("language");
    article.title = title;
    article.second_title = second_title;
    article.abstract = abstract;
    article.type = type;
    article.tags = tags;
    article.language = language;
    await article.save();
    return response.json(article);
  }
}

module.exports = EditController;
