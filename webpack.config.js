var webpack = require('webpack');

module.exports = {
  entry: {
    main: './source/javascripts/site.js'
  },

  output: {
    path: __dirname + '/.tmp/webpack-build',
    filename: 'javascripts/[name].js',
  },
};
