const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        './src/components/PaintingsLoader.ts',
        './src/components/ImageSwitcher.ts',
        './src/components/ConfirmButton.ts'
    ],
    module: {
      rules: [
          {
              test: /\.ts$/,
              use: 'ts-loader',
              include: [path.resolve(__dirname, 'src')]
          }
      ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
