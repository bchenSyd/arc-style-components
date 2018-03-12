// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require('@webpack-blocks/dev-server2')
const splitVendor = require('webpack-blocks-split-vendor')
const happypack = require('webpack-blocks-happypack')
const printJson = require('./print-json');


const {
  addPlugins, createConfig, entryPoint, env, setOutput,
  sourceMaps, defineConstants, webpack,
} = require('@webpack-blocks/webpack2')

const host = process.env.HOST || 'localhost'
// const port = process.env.PORT || 3000

const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const babel = () => () => ({
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
})

const assets = () => () => ({
  module: {
    rules: [
      // last match prevail
      { test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, 
        loader: 'file-loader',
        options: {
          // default name = [hash].[ext]
          name: '[name].[ext]',
        }
      },

      { test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, 
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: 42000, // 3 files greater than 42k, 1 file less than 42k
        },
      },
    ],
  },
})

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),

  happypack([
    babel(),
  ]),

  assets(),

  // resolve { modules:['node_modules', './src'] }
  resolveModules(sourceDir),



  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      //port
    }),
    sourceMaps(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    splitVendor(),
    addPlugins([
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
])

printJson('webpack.config.json', config);
module.exports = config
