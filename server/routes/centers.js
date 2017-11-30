import Center from '../controllers/center';
import Validation from '../middleware/validator';
import  authenticate from '../middleware/authenticate';

const centersController = new Center();
const validate = new Validation();

module.exports = (app) => {
    app.get('/api/v1/centers', authenticate, centersController.getCenters)
        .get('/api/v1/centers/:id', authenticate, centersController.getCenter)
        .post('/api/v1/centers', authenticate, validate.validateCenter, centersController.createCenter)
        .put('/api/v1/centers/:id', authenticate, validate.validateCenter, centersController.updateCenter)
        .delete('/api/v1/centers/:id', authenticate, centersController.deleteCenter);
};