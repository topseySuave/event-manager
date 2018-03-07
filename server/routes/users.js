import express from 'express';
import User from '../controllers/user';
import Validation from '../middleware/validator';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const userController = new User();
const validate = new Validation();

router.post('/users', validate.validateSignUp, userController.createUser)
    .post('/users/authentication', validate.validateLogin, userController.loginUser)
    .get('/users/signed', authenticate, userController.currUser);

module.exports = router;
