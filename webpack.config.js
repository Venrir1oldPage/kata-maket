const path = require('path'); //модуль ноджс для работы с путями
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinimizeCssAssetWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new MinimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    'css-loader',
    'postcss-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development', //мод для разработки в бандл дает относительно понятный НЕ МИНИфицированный код. продакшн даем мини (наш код гдет в конце)
  entry: {
    main: ['@babel/polyfill', './js/index.js'], //точка входа.первый файл джс
    // side: '.src/путь к файлу .js', //вторая точка входа
  },
  output: {
    filename: '[name].[hash].js', //когда все файлы соберутся в один, этот файл будет иметь это названиююютут короч паттерн уже применен
    path: path.resolve(__dirname, 'dist'), //более корректно,чем просто дист
    clean: true,
  },

  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLWebpackPlugin({
      // плагин для вставки в индекс.хтмл в папке дист из индекс.хтмл из папки сорс
      template: './index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(), // плагин для очищения папки дист от неактуальных файлов
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),
  ],
  optimization: optimization(),
  devtool: 'source-map',

  module: {
    // loaders
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i, //регулярное выражение: если файл соответствует этому паттерну, то надо использовать ...
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
