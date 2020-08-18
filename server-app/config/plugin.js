'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // add egg-sql plugin
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
