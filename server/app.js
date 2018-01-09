import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import swagger from 'swagger-ui-express';
import swaggerDoc from './docs/swagger.json';
import dotenv from 'dotenv';
import event from './routes/events';
import center from './routes/centers';
import users from './routes/users';
import cors from 'cors';
// import cons from 'consolidate';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

dotenv.config();

// Set up the express app
const app = express();
let compiler = webpack(config);

app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));

app.set('superSecret', process.env.SECRET_KEY); // secret variable

app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(webpackHotMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    noInfo: true
}));

app.use(webpackMiddleware(compiler));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

center(app);
event(app);
users(app);

app.use(express.static(path.join(__dirname, '../client/public')));

app.set('views', path.join(__dirname, '..', 'client', 'public'));

// Setup a default catch-all route that sends back the index html file.
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'client/public/index.html'));
});

app.use((req, res, next) => {
    const err = res.status(404).send({
        error: '404: Sorry Page Not Found!'
    });
    next(err);
});

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log('server listening on port ' + port);

module.exports = app;