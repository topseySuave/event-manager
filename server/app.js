import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import events from './server/dummy';

// Set up the express app
const app = express();

const api = '/api/v1'; // Initialize api prefix

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

// Setup a default catch-all route that sends back a welcome message in JSON format.
router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

// all of our routes will be prefixed with /api/v1
app.use(api, router);

router.get('/events', (req, res) => {res.send(events)})
    .post('/events', (req, res) => {
        let r = events.length;
        events.push(req.body);
        res.send(events[r]);
    });

// app.route(api + '/events/:id')
//     .get((req, res) => res.send(events[req.params.id]))
//     .post((req, res) => {
//         let r = events.length;
//         events.push(req.body);
//         res.status(200).send(events[r])});


module.exports = app;