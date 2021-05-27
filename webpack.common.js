const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 600000000,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Mager App',
      short_name: 'Mager',
      description: 'Mager Restaurant For You',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      start_url: './index.html',
      theme_color: '#ffffff',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve(__dirname, 'src/public/images/logo.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve(__dirname, 'src/public/images/logo.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
