import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

import express from 'express';

const app = express();

const file = process.argv[process.argv.length - 1];

const compiler = webpack({
  mode: 'development',

  plugins: [new HtmlWebpackPlugin()],
  entry: [
    resolve(__dirname, '..', 'client', 'renderer.js'),
    resolve(process.cwd(), file),
  ],
});

app.use(webpackDevMiddleware(compiler));

app.listen(3000, () => {
  console.log('app started');
});
