/**
 * @copyright 2018-present, Charlike Mike Reagent (https://tunnckocore.com)
 * @license Apache-2.0
 */

const test = require('asia');
const config = require('../src/index');

test('foo bar', (t) => {
  t.ok(config);
  t.ok(config.extends);
});
