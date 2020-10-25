const path = require ('path');
const env = process.env.NODE_ENV;

/** @type import('webpack').Configuration */
module.exports = {
  mode: env || 'development',
  context: path.resolve (__dirname, './public/'),
  entry: {
    index: [path.resolve (__dirname, 'src/index.tsx')],
  },
  output: {
    path: path.resolve (__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-modules-typescript-loader'},
          {loader: 'css-loader', options: {modules: true}},
          {loader: 'sass-loader'},
        ],
      },
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'light-ts-loader',
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    alias: {
      src: path.resolve (__dirname, './src'),
      appTypes: path.resolve (__dirname, './types/app/'),
      modelTypes: path.resolve (__dirname, './types/models/'),
      payloadTypes: path.resolve (__dirname, './types/payloads/'),
      assets: path.resolve (__dirname, './assets'),
      mock: path.resolve (__dirname, './mock'),
      usecase: path.resolve (__dirname, './src/usecase/'),
    },
  },
  performance: {hints: false},
  node: {fs: 'empty'},
};
