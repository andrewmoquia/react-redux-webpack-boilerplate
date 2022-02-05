const target = 'web';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   target: target,
   devtool: 'cheap-module-source-map',
   devServer: {
      host: '0.0.0.0',
      port: 3000,
      hot: true,
      historyApiFallback: {
         disableDotRule: true,
      },
   },
   module: {
      rules: [
         {
            test: /\.(s[ac]ss|css)$/i,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true,
                     modules: {
                        localIdentName: '[local]',
                     },
                  },
               },
               'postcss-loader',
               'sass-loader',
            ],
         },
      ],
   },
   optimization: { runtimeChunk: { name: 'runtime' } },
   output: {
      filename: '[name].js',
   },
};
