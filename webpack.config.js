module.exports = {
  entry: './frontend/src/js/index.jsx',
  output: {
    filename: './frontend/public/bundle.js'
  },
  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },     
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"],
        exclude: /flexboxgrid/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      }
    ],
  },
};
