import express from 'express';
import Centers from '../controllers/Centers';
import Validation from '../middleware/Validation';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const centersController = new Centers();
const validate = new Validation();

router.get('/centers', centersController.getCenters)
  .get('/centers/:id', centersController.getCenter)
  .post('/centers', authenticate, validate.validateCenter, centersController.createCenter)
  .put('/centers/:id', authenticate, validate.validateCenter, centersController.updateCenter)
  .delete('/centers/:id', authenticate, centersController.deleteCenter);

module.exports = router;
