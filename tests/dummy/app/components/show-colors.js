import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { css } from 'glamor';


const { Component } = Ember;


const styles = {
  red: css({
    backgroundColor: 'red'
  })
};


export default Component.extend({
  classNames: ['test-show-colors'],

  styles,

  layout: hbs`
    <div class={{styles.red}}>
      This is red
    </div>
  `
});
