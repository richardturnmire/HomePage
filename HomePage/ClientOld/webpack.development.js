const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const helpers = require('./webpack.helpers');

const ROOT = path.resolve(__dirname, '..');

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  entry: {
    polyfills: 'polyfills.ts',
    vendor: 'vendor.development.ts',
    app: 'main.ts'
    
  },

  output: {
    path: ROOT + '/wwwroot/',
    filename: 'dist/[name].bundle.js',
    chunkFilename: 'dist/[id].chunk.js',
    publicPath: 'wwwroot/'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: rxPaths()
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(ROOT, '/wwwroot/'),
    watchOptions: {
      aggregateTimeout: 900,
      poll: 1000,
      port: 4200,
      https: true,
      clientLogLevel: 'debug'
    }
  },

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
        use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
      },
      {
        test: /favicon.ico$/,
        use: 'file-loader?name=/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: path.join(ROOT, '/ClientApp/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        exclude: path.join(ROOT, '/ClientApp/styles'),
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ],
    exprContextCritical: false
  },
  plugins: [
    function() {
      this.plugin('watch-run', function(watching, callback) {
        console.log(
          '\x1b[33m%s\x1b[0m',
          `Begin compile at ${new Date().toTimeString()}`
        );
        callback();
      });
    },

    new AngularCompilerPlugin({
      tsConfigPath: 'tsconfig.json',
      entryModule: './app.module#AppModule',
      sourceMap: true
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    // new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./wwwroot/dist', './wwwroot/assets']
    }),

    //new HtmlWebpackPlugin({
    //  filename: '../Pages/_Layout.cshtml',
    //  inject: 'body',
    //  template: './_Layout.cshtml'
    //}),

    new CopyWebpackPlugin([
      {
        from: './assets/*.*',
        to: 'assets/',
        flatten: false
      }
    ])

    //new CopyWebpackPlugin([
    //  {
    //    from: './node_modules/bootstrap/dist/css/*.*',
    //    to: 'css/',
    //    flatten: true
    //  }
    //]),

    //new CopyWebpackPlugin([
    //  {
    //    from: './node_modules/mdbootstrap/css/*.*',
    //    to: 'css/',
    //    flatten: true
    //  }
    //])
  ]
};
