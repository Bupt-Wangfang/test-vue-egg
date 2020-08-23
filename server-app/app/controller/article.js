'use strict';

const Controller = require('egg').Controller;
const moment = require('moment')

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

  async addArticle() {
    const { ctx } = this;
    let params = {
      ...ctx.request.body,
      createTime: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    const result = await ctx.service.article.addArticle(params);
    ctx.body = {
      code: 200,
      msg: result
    }
  }
}

module.exports = ArticleController;