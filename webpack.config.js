/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');

const buildModules = process.env.BUILD_MODULES || '';
const entries = {};
const htmlModules = [];
const insertModules = moduleName => {
    entries[moduleName] = ['webpack-hot-middleware/client', `${SRC_PATH}/${moduleName.trim()}/App.tsx`];
    console.log('entries : ', entries);
    htmlModules.push(
        new HtmlWebpackPlugin({
            filename: './' + moduleName + '.html',
            template: `${ROOT_PATH}/public/index.html`,
            hash: false,
            chunks: [moduleName],
        }),
    );
};
buildModules.split(',').forEach(insertModules);

module.exports = {
    mode: 'development',
    entry: entries, // 在使用的时候 设置 MODULE_NAME 然后这里解析同名文件夹，找到唯一入口就可以
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?x$/,
                use: [
                    // { loader: 'thread-loader' }, // https://github.com/webpack-contrib/thread-loader/issues/84
                    { loader: 'ts-loader', options: { transpileOnly: true } },
                ],
                include: [SRC_PATH],
                exclude: [NODE_MODULES],
            },
            {
                test: /\.module\.scss$/,
                // https://webpack.docschina.org/loaders/css-loader/#compiletype
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        // 0 => no loaders (default);// 1 => postcss-loader;// 2 => postcss-loader, sass-loader
                        options: { importLoaders: 1, modules: { compileType: 'module' } },
                    },
                    {
                        loader: 'postcss-loader', // TODO 添加 样式扩展
                    },
                    {
                        loader: 'sass-loader',
                        options: { implementation: require('sass') }, // 放弃 node-sass 转用 dart-sass
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { encoding: 'utf8' },
                    },
                ],
            },
        ],
    },

    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/',
        path: DIST_PATH,
    },

    plugins: [
        ...htmlModules,
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: `${SRC_PATH}/**/*.{ts,tsx,js,jsx}`,
            },
        }),
    ],
};
