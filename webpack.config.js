// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

/*
 * Config
 */
module.exports = {
  entry: {
    'vendor': [
      'basscss/css/basscss.css',
      'font-awesome/css/font-awesome.css',
      './webpack.vendor.ts',
    ],
    'app': [
      './app/src/app'
    ]
  },

  debug: true, // remove in production

  // for faster builds use 'eval'
  devtool: 'source-map',

  // Config for our build files
  output: {
    path: root('__build__'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    // ensure loader extensions match
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [
          /\.(spec|e2e)\.ts$/,
          /node_modules\/(?!(ng2-.+))/
        ]
      },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },

      { test: /\.svg/, loader: 'url' },

      { test: /\.eot/, loader: 'url' },

      { test: /\.woff/, loader: 'url' },

      { test: /\.woff2/, loader: 'url' },

      { test: /\.ttf/, loader: 'url' }
    ],
    noParse: [
      /.+zone\.js\/dist\/.+/,
      /reflect-metadata/,
      /.+angular2\/bundles\/.+/
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      minify: false
    })
    // include uglify in production
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
  // our Webpack Development Server config
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: './__build__',
    publicPath: '/'
  }
};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}