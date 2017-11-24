import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import event from './server/routes/events';
import center from './server/routes/centers';

center(app);
event(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;