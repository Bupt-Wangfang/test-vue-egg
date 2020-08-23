'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/article', controller.article.showAllArticle);
  router.get('/article/:id', controller.article.showArticle);
  router.post('/article', controller.article.addArticle);
};
