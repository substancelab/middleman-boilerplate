var webpack = require('webpack');

module.exports = {
  entry: {
    main: './source/javascripts/site.js',
    styles: './source/stylesheets/site.css.scss'
  },

  output: {
    path: __dirname + '/.tmp/webpack-build',
    filename: 'javascripts/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
