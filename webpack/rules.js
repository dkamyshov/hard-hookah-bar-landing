var ExtractCSS = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.html$/, use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './'
      }
    }
  },

  {
    test: /(\.jpg|\.png)$/, use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './media/'
      }
    }
  },

  {
    test: /\.less$/,
    use: ExtractCSS.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }, 'less-loader']
    })
  }
];