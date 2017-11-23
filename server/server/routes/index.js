import express from 'express';
const router = express.Router();
// import centerController from '../controllers/center';
// const centerController = require('../controllers/center');

const app = express();
const api = '/api/v1'; // Initialize api prefix

// all of our routes will be prefixed with /api/v1
app.use(api, router);

module.exports = (app) => {
    app.get('/api/v1/', (req, res) => res.status(200).send({
        message: 'Welcome to the Center API!',
    }));
    app.post('/api/v1/center', {type: 'post'});
    // return app;
};