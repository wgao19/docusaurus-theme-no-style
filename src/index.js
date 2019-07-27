/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

module.exports = function(context, options) {
  const {customCss} = options || {};
  return {
    name: '@wgao19/docusaurus-theme-no-style',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getClientModules() {
      return [path.resolve(__dirname, './style.css'), customCss];
    },
  };
};
