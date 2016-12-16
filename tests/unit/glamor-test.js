import { module, test } from 'ember-qunit';

import {
  css,
  flush,
  simulate,
  speedy
} from 'glamor';

module('Unit | vendor imports | glamor');

test('it exports css', function(assert) {
  assert.ok(css);
});

test('it exports flush', function(assert) {
  assert.ok(flush);
});

test('it exports simulate', function(assert) {
  assert.ok(simulate);
});

test('it exports speedy', function(assert) {
  assert.ok(speedy);
});
