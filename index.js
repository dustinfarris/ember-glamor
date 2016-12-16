/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel');
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
  },

  treeForVendor(tree) {
    const umdDist = path.join(path.dirname(require.resolve('glamor/package.json')), 'umd');

    const glamorTree = new Funnel(umdDist, {
      include: ['index.js'],
      destDir: 'glamor'
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, glamorTree);
    }

    const trees = merge([tree, glamorTree]);

    return this._super.treeForVendor.call(this, trees);
  }
};
