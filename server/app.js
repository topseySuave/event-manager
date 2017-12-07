import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import swagger from 'swagger-ui-express';
import swaggerDoc from './docs/swagger.json';
import dotenv from 'dotenv';
import event from './routes/events';
import center from './routes/centers';
import users from './routes/users';
import cors from 'cors';

dotenv.config();

// Set up the express app
const app = express();

app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));

app.set('superSecret', process.env.SECRET_KEY); // secret variable

app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

center(app);
event(app);
users(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Boots Events Manager.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log('server listening on port ' + port);

module.exports = app;