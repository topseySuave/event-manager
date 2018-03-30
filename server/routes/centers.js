import express from 'express';
import Center from '../controllers/center';
import Validation from '../middleware/validator';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const centersController = new Center();
const validate = new Validation();

router.get('/centers', centersController.getCenters)
  .get('/centers/:id', centersController.getCenter)
  .post('/centers', authenticate, validate.validateCenter, centersController.createCenter)
  .post('/centers/:id', authenticate, validate.validateCenter, centersController.updateCenter)
  .delete('/centers/:id', authenticate, centersController.deleteCenter);

module.exports = router;
