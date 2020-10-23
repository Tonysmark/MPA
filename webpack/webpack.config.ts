import webpack, { Configuration } from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');

const MODULES: string = process.env.MODULES || 'Auto';
const modulesPaths = MODULES.split(',').map((module) => `${SRC_PATH}/${module.trim()}/App.tsx`);

const config: Configuration = {
	mode: 'development',
	entry: ['webpack-hot-middleware/client', ...modulesPaths], // 在使用的时候 设置 MODULE_NAME 然后这里解析同名文件夹，找到唯一入口就可以
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: { loader: 'ts-loader', options: { transpileOnly: true } },
				include: [SRC_PATH],
				exclude: [NODE_MODULES],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	output: {
		filename: '[name].js',
		publicPath: '/',
		path: DIST_PATH,
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: `${SRC_PATH}/**/*.{ts,tsx,js,jsx}`,
			},
		}),
	],
};

export default config;
