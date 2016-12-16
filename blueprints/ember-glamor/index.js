/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-glamor',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'glamor', target: '^2.20.12' }
    ]);
  }
};
