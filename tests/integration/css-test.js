import Ember from 'ember';

import hbs from 'htmlbars-inline-precompile';

import { css } from 'glamor';
import { moduleForComponent, test } from 'ember-qunit';


const { Component } = Ember;


moduleForComponent('show-colors', 'css', {
  integration: true
});


test('render styles with css function', function(assert) {
  assert.expect(1);

  const style = css({
    backgroundColor: 'red'
  });

  this.register('component:test-component', Component.extend({
    style,
    layout: hbs`

    <span class={{style}}>This is red</span>

    `
  }));

  this.render(hbs`{{test-component}}`);

  assert.equal(this.$('span').css('backgroundColor'), 'rgb(255, 0, 0)');
});


test('render styles with css template tag', function(assert) {
  assert.expect(1);

  const style = css`

  backgroundColor: red;

  `;

  this.register('component:test-component', Component.extend({
    style,
    layout: hbs`

    <span class={{style}}>This is red</span>

    `
  }));

  this.render(hbs`{{test-component}}`);

  assert.equal(this.$('span').css('backgroundColor'), 'rgb(255, 0, 0)');
});
