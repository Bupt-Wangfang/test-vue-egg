'use strict';

const Controller = require('egg').Controller;

class CsrfController extends Controller {
    async setCsrf() {
        const { ctx } = this
        ctx.body = {
            status: 200,
            csrf: ctx.csrf
        }
    }
}

module.exports = CsrfController;
