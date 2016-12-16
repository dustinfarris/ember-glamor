/* jshint node: true */
'use strict';


const Funnel = require('broccoli-funnel');
const Webpack = require('broccoli-webpack');
const merge = require('broccoli-merge-trees');
const path = require('path');


module.exports = {
  name: 'ember-glamor',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/glamor/index.js', {
      using: [{ transformation: 'amd', as: 'glamor' }]
    });
    app.import('vendor/glamor-reset.amd.js');
  },

  _treeForGlamor() {
    const umdDist = path.join(path.dirname(require.resolve('glamor/package.json')), 'umd');

    return new Funnel(umdDist, {
      include: ['index.js'],
      destDir: 'glamor'
    });
  },

  _treeForGlamorReset() {
    // glamor provides a es6 dist, we'll use that to avoid babel
    const resetPath = path.dirname(require.resolve('glamor/reset'));
    return new Webpack([ resetPath ], {
      entry: './reset.js',
      output: {
        library: 'glamor/reset',
        libraryTarget: 'amd',
        filename: 'glamor-reset.amd.js'
      }
    });
  },

  treeForVendor(vendorTree) {
    const trees = merge([
      vendorTree,
      this._treeForGlamor(),
      this._treeForGlamorReset()
    ], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
