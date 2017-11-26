import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';

// Set up the express app
const app = express();
const router = express.Router();

app.use('/api/v1', router);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import event from './routes/events';
import center from './routes/centers';

center(app);
event(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log('server listening on port ' + port);

module.exports = app;