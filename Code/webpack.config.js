const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        // Komponenten
        './src/components/DetailButton/DetailButton.ts',
        './src/components/ImageSwitcher/ImageSwitcher.ts',
        './src/components/StandingArea/StandingArea.ts',
        './src/components/Painting/Painting.ts',
        './src/components/PaintingDescription/PaintingDescription.ts',
        // Szenen
        './src/scenes/PaintingsBuilder/PaintingsBuilder.ts',
        './src/scenes/Workshop/Workshop.ts',
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
    },
    devServer: {
        https: true,
        disableHostCheck: true
    }
}
