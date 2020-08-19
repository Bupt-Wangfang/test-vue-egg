const Service = require('egg').Service;

class ArticleService extends Service {
    async getAllArticle() {
        const result = await this.app.mysql.select('article');
        return result;
    }
}

module.exports = ArticleService;