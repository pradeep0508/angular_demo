var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app.jsx",
  resolve: {
    root: __dirname,
    alias: {
      Greeter: '../../reactComponent/reactComponent.jsx',
      ReduxStore: '../../reactComponent/store/store.jsx',
      AngularCtrl: './angularPage/angularCtrl.jsx',
      ReactCtrl: './reactPage/reactCtrl.jsx',
      angularModule: '../app.jsx',
      Action: '../../reactComponent/actions/actions.jsx',
      Reducers: '../reducers/reducers.jsx'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
