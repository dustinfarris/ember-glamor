import Ember from 'ember';
import { initialize } from 'dummy/initializers/ember-glamor';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

import glamor from 'glamor';


module('Unit | Initializer | ember glamor', {
  beforeEach() {
    Ember.run(() => {
      glamor.flush();
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});


test('when speedy is configured `true`', function(assert) {
  this.application.register('config:environment', {
    glamor: {
      speedy: true
    }
  });

  initialize(this.application);

  assert.ok(glamor.styleSheet.isSpeedy, 'speedy should be turned on');
});


test('when speedy is configured `false`', function(assert) {
  this.application.register('config:environment', {
    glamor: {
      speedy: false
    }
  });

  initialize(this.application);

  assert.notOk(glamor.styleSheet.isSpeedy, 'speedy should be turned off');
});
