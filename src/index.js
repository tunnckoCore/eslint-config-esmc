'use strict';

/**
 * @copyright 2018-present, Charlike Mike Reagent (https://tunnckocore.com)
 * @license Apache-2.0
 */

const path = require('path');

module.exports = {
  extends: ['flowtype', 'base', 'node', 'promise', 'unicorn']
    .filter(Boolean)
    .map((x) => path.join(__dirname, 'configs', `${x}.js`)),
};
