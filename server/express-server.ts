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

app.get('/:moduleName?/*', (req, res, next) => {
    // FIXME 这里模块还是有问题
    const moduleName = req.params['0'];
    console.info('模块--> ' + moduleName);
    const filePath = path.join(`${compiler.outputPath}/index.html`);
    console.log("compiler.outputPath : ",compiler.outputPath)
    console.log("filePath : ",filePath)
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
