// import path from 'path'
// import multipart from 'connect-multiparty';
import Center from '../controllers/center';
import Validation from '../middleware/validator';
import  authenticate from '../middleware/authenticate';

const centersController = new Center();
const validate = new Validation();

// const uploadPath = path.resolve(__dirname, '../public/image/uploads');
// const mutipartMiddleware = multipart({ uploadDir: uploadPath });

module.exports = (app) => {
    app.get('/api/v1/centers', centersController.getCenters)
        .get('/api/v1/centers/:id', centersController.getCenter)
        .post('/api/v1/centers', authenticate, validate.validateCenter, centersController.createCenter)
        .post('/api/v1/centers/:id', authenticate, validate.validateCenter, centersController.updateCenter)
        .delete('/api/v1/centers/:id', authenticate, centersController.deleteCenter);
};