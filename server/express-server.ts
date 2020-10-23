import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.config';

const app = express();
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { publicPath: config.output ? (config.output.publicPath as string) : '/' }));
app.use(webpackHotMiddleware(compiler));
app.listen(3000, () => {
	console.log('App start @port:3000');
});
