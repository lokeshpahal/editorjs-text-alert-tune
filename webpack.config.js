module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          removeSVGTagAttrs: false,
        },
      },
    ],
  },
  output: {
    filename: 'alert-variant-tune.js',
    library: 'AlertVariantTune',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
