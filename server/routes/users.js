import express from 'express';
import Users from '../controllers/Users';
import Validation from '../middleware/Validation';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const userController = new Users();
const validate = new Validation();

router.post('/users', validate.validateSignUp, userController.createUser)
  .post(
    '/users/authentication',
    validate.validateLogin,
    userController.loginUser
  )
  .get('/users/signed', authenticate, userController.currUser);

module.exports = router;
