module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
      path: __dirname + "/public",
      filename: "bundle.js",
    },
    context: __dirname,
    devtool: "source-map",
    devServer: {
      static: {
        directory: __dirname + "/public",
      },
    },
    module: {
      rules: [
        {
          test: /js|jsx?$/,
          // use: 'babel-loader'
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ],
    },
  };