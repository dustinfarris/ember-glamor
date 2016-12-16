# ember-glamor

Use [glamor](https://github.com/threepointone/glamor) in your Ember project.


## Installation

```
ember install ember-glamor
```


## Usage

```js
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { css } from 'glamor';


const styles = {
  red: css({
    backgroundColor: 'red'
  }),
  blueGreen: css({
    backgroundColor: 'blue',
    ':hover': {
      backgroundColor: 'green'
    }
  })
};


export default Ember.Component.extend({

  styles,

  layout: hbs`

    <div class={{styles.red}}>
      This is red.
    </div>

    <div class={{styles.blueGreen}}>
      This is blue, and green on hover.
    </div>

  `
});
```


## Developing

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
