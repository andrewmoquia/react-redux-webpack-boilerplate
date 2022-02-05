const target = 'browserslist';
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'production',
   target: target,
   module: {
      rules: [
         {
            test: /\.(s[ac]ss|css)$/i,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     modules: true,
                     sourceMap: false,
                  },
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: [['postcss-preset-env', 'autoprefixer']],
                     },
                  },
               },
               'sass-loader',
            ],
         },
      ],
   },
   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin({
            parallel: true,
            minimizerOptions: [
               {
                  preset: ['default'],
               },
            ],
            minify: [CssMinimizerPlugin.cssnanoMinify],
         }),
         new TerserPlugin({
            parallel: true,
            extractComments: 'all',
            terserOptions: {
               compress: {
                  drop_console: true,
                  defaults: true,
                  arguments: true,
                  toplevel: true,
               },
               sourceMap: false,
            },
         }),
      ],
   },
   output: {
      filename: '[contenthash].js',
   },
   plugins: [
      new InjectManifest({
         swSrc: './service_worker.js',
         swDest: 'sw.js',
      }),
      new CopyPlugin({
         patterns: [
            { from: './public/manifest.json', to: '' },
            { from: './public/robots.txt', to: '' },
         ],
      }),
   ],
};
