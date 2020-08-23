/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597751083644_5700';

  // add your middleware config here
  config.middleware = [];

  // add egg-mysql
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'vue_egg_test',
    },
    app: true, // 是否加载到app上
    agent: false
  };

  // 配置跨域访问
  config.security = {
    csrf: {
      // eggjs的安全机制
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8888']  // 配置白名单
  };
  config.cors = {
    // origin: '*', // 允许跨域访问，注释掉则允许白名单访问
    credentials: true, //允许跨域携带cookies
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
