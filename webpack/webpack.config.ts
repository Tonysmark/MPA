import webpack, { Configuration, Entry } from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');

const buildModules = process.env.BUILD_MODULES || '';
const entries: Entry = {};
const htmlModules: HtmlWebpackPlugin[] = [];
const insertModules = (moduleName: string) => {
    moduleName = moduleName.trim();
    entries[moduleName] = ['webpack-hot-middleware/client', `${SRC_PATH}/${moduleName}/App.tsx`];
    console.log('entries : ', entries);
    htmlModules.push(
        new HtmlWebpackPlugin({
            filename: './' + moduleName + '.html',
            template: `${ROOT_PATH}/public/index.html`,
            hash: true,
            chunks: [moduleName],
        }),
    );
};
buildModules.split(',').forEach(insertModules);
// TODO SPA 的 devServer
const config: Configuration = {
    mode: 'development',
    entry: entries, // 在使用的时候 设置 MODULE_NAME 然后这里解析同名文件夹，找到唯一入口就可以
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: [
                    // { loader: 'thread-loader' }, // https://github.com/webpack-contrib/thread-loader/issues/84
                    { loader: 'ts-loader' },
                ],
                include: [SRC_PATH],
                exclude: [NODE_MODULES],
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                // https://webpack.docschina.org/loaders/css-loader/#compiletype
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // 对于满足 `/\.module\.\w+$/i` 正则匹配发热文件自动启用 css 模块。
                            modules: { auto: true, localIdentName: '[name]--[local]--[hash:base64:8]' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // 放弃 node-sass 转用 dart-sass
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
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

export default config;
