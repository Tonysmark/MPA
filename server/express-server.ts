import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.config';
import path from 'path';

const app = express();
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { publicPath: config.output ? (config.output.publicPath as string) : '/' }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../dist')));
// 如果满足 MPA 模式，路由上就得满足某一正则
app.get('/:moduleName?/*', (req, res, next) => {
    // NOTE: 代表着没有根路由，必须得存在至少两个参数的路由地址 Module/IndexPage 这样
    let moduleName = req.params['moduleName'];
    if (moduleName) {
        moduleName = moduleName.trim();
    } else {
        moduleName = req.params['0'];
    }
    moduleName.indexOf('.ico') > -1 && res.send('');
    console.info('请求模块: ', moduleName);
    console.log('路由参数: ', req.params);
    console.log('路由查询: ', req.query);
    const filePath = path.join(`${compiler.outputPath}/${moduleName}.html`);
    compiler.outputFileSystem.readFile(filePath, (err, result) => {
        if (err) {
            return next();
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});
app.listen(3000, () => {
    console.log('App start @port:3000');
});
