'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async showAllArticle() {
    const { ctx } = this;
    const result = await ctx.service.article.getAllArticle();
    ctx.body = {
        code: 200,
        msg: result
    };
  }

  async showArticle() {
    const { ctx } = this;
    let id = ctx.params.id;
    const result = await ctx.service.article.getArticle(id);
    ctx.body = {
        code: 200,
        msg: result
    };
  }
}

module.exports = ArticleController;