import Center from '../controllers/center';

const centersController = new Center();

module.exports = (app) => {
    app.get('/api/v1/centers', centersController.getCenters)
        .get('/api/v1/centers/:id', centersController.getCenter)
        .post('/api/v1/centers', centersController.createCenter)
        .put('/api/v1/centers/:id', centersController.updateCenter);
};