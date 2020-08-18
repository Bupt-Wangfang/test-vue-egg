'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async showAllArticle() { // 异步请求防止阻塞
    const { ctx } = this;
    const result = await ctx.service.articleService.getAllService();
    ctx.body = {
        code: 200,
        msg: result
    };
  }
}

module.exports = ArticleController;