const path = require('path');

module.exports = {
  entry: './src/walletConnectFuel.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'walletConnectFuel.bundle.js', 
    library: 'WalletConnectFuel', 
    libraryTarget: 'umd' 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
