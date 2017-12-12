import User from '../controllers/user';
import Validation from '../middleware/validator';
import authenticate from '../middleware/authenticate';

const userController = new User();
const validate = new Validation();

module.exports = (app) => {
    app.post('/api/v1/users', validate.validateSignUp, userController.createUser)
        .post('/api/v1/users/authentication', validate.validateLogin, userController.loginUser)
        .get('/api/v1/users/signed', authenticate, userController.currUser);
};