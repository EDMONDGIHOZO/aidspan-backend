"use strict";
const Article = use("App/Models/Article");

class DeleteController {
  async destroy({ response, request, params }) {
    await Article.find(params.id).delete();
    return response.json({ message: "Article deleted" });
  }
}

module.exports = DeleteController;
