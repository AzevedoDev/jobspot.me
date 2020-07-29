const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin');
const Serve = require('webpack-plugin-serve');

const dotEnv = require('dotenv-webpack');
const HappyPack = require('happypack');

const PORT = process.env.PORT || 4001;
const cwd = process.cwd();

const outputPath = path.join(cwd, 'build');
const srcPath = path.join(cwd, 'src');

module.exports = {
  mode: 'development',
  context: path.resolve(cwd, './'),
  entry: ['./src/index.tsx', 'webpack-plugin-serve/client'],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: 'happypack/loader?id=js',
        include: [srcPath, path.join(cwd, '../../')],
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|csv|xlsx|ttf|woff(2)?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: 'happypack/loader?id=styles',
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
    compress: false,
    port: PORT,
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    watchOptions: {
      aggregateTimeout: 800,
      ignored: ['data', 'node_modules'],
    },
    stats: {
      // reasons: true,
      source: true,
      timings: true,
      warnings: true,
    },
    hotOnly: true,
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Serve.WebpackPluginServe({
      port: PORT,
      historyFallback: true,
      static: [outputPath],
      status: false,
    }),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, '..', 'graphql', 'schema.graphql'),
      src: path.resolve(__dirname, 'src'),
    }),
    new dotEnv({
      path: './.env',
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader?cacheDirectory'],
    }),
    new HappyPack({
      id: 'styles',
      threads: 2,
      loaders: ['style-loader', 'css-loader'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunksSortMode: 'none',
    }),
  ],
};
