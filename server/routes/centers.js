import Center from '../controllers/center';
import  authenticate from '../middleware/authenticate';

const centersController = new Center();

module.exports = (app) => {
    app.get('/api/v1/centers', authenticate, centersController.getCenters)
        .get('/api/v1/centers/:id', authenticate, centersController.getCenter)
        .post('/api/v1/centers', authenticate, centersController.createCenter)
        .put('/api/v1/centers/:id', authenticate, centersController.updateCenter);
};