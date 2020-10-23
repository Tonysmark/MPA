"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("webpack");
const path_1 = __importDefault(require("path"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const ROOT_PATH = path_1.default.resolve(__dirname, '../');
const SRC_PATH = path_1.default.resolve(ROOT_PATH, 'src');
const DIST_PATH = path_1.default.resolve(ROOT_PATH, 'dist');
const NODE_MODULES = path_1.default.resolve(ROOT_PATH, 'node_modules');
const config = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?x$/,
                use: { loader: 'ts-loader' },
                options: {
                    transpileOnly: true,
                },
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
    plugins: [new fork_ts_checker_webpack_plugin_1.default()],
};
exports.default = config;
