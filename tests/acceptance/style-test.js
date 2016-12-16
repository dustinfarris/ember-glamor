import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | style');

test('styles are added to elements', function(assert) {
  visit('/');

  andThen(function() {
    const redDiv = find('.test-show-colors > div');

    assert.equal(redDiv.css('backgroundColor'), 'rgb(255, 0, 0)');
  });
});
