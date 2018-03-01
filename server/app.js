import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import cors from 'cors';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import swagger from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDoc from './docs/swagger';
import event from './routes/events';
import center from './routes/centers';
import users from './routes/users';
import admin from './routes/administrator';
import config from '../webpack.config';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { App } from '../client/src/components/homepage';
dotenv.config();

// Set up the express app
const app = express();
let compiler = webpack(config);

// Init API Route string
const apiRoute = '/api/v1';

app.set('superSecret', process.env.SECRET_KEY); // secret variable

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }));

// Log requests to the console.
app.use(logger('dev'));
app.use(cors());
app.use(apiRoute, center);
app.use(apiRoute, users);
app.use(apiRoute, event);
app.use('/admin', admin);
app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));

app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  noInfo: true,
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use(express.static(path.join(__dirname, '../client/public')));
app.set('views', path.join(__dirname, '..', 'client', 'public'));

// Setup a default catch-all route that sends back the index html file.
app.get('*', (req, res) => {
  // const appString = renderToString(<App />);
  res.status(200).sendFile(path.join(__dirname, '..', 'client/public/index.html'));
});

app.get('*.js.gz', function (req, res, next) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
});
app.get('*.css.gz', function (req, res, next) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
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
server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server listening on port ${port}`);
});
