import Koa from 'koa';
import koaWebpack from 'koa-webpack';
import webpack from 'webpack';
import config from '../webpack/webpack.config';

async function BootStrap() {
	const app = new Koa();
	const compiler = webpack(config);
	const middleware = await koaWebpack({
		compiler,
		devMiddleware: { publicPath: config.output ? (config.output.publicPath as string) : '/' },
		hotClient: true,
	});
	app.use(middleware);
	app.listen(3000, () => {
		console.log('App start @port:3000');
	});
	app.use(middleware);
}
BootStrap();
