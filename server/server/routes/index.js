// import centerController from '../controllers/center';
// const centerController = require('../controllers/center');

module.exports = (app) => {
    app.get('/api/v1/', (req, res) => res.status(200).send({
        message: 'Welcome to the Center API!',
    }));
    app.post('/api/v1/center', {type: 'post'});
    // return app;
};