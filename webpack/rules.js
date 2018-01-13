var ExtractCSS = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.html$/, use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './'
      }
    }, {
      loader: 'html-minifier-loader'
    }]
  },

  {
    test: /(\.jpg|\.png)$/, use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'media/images/'
      }
    }
  },

  {
    test: /(\.ttf|\.woff2)$/, use: {
      loader: 'file-loader',
      options: {
        name: '[sha1:hash:hex:4].[ext]',
        outputPath: 'media/fonts/'
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
