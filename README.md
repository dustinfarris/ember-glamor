# ember-glamor

[![CircleCI](https://circleci.com/gh/dustinfarris/ember-glamor.svg?style=svg)](https://circleci.com/gh/dustinfarris/ember-glamor)

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


## Configure

### `speedy`

[speedy mode](https://github.com/threepointone/glamor#speedy-mode) is enabled in production and is disabled otherwise.  You can override in `config/environment.js`:

```
if (environment === 'test') {
  ENV.glamor.speedy = true;
}
```


## Developing

### Installing dependencies

```
yarn install && bower install
```

### Running tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
