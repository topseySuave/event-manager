import User from '../controllers/user';
import authenticate from '../middleware/authenticate';

const userController = new User();

module.exports = (app) => {
    app.post('/api/v1/users/signup', userController.createUser)
        .post('/api/v1/users/signin', userController.loginUser)
        .get('/api/v1/users/signed', authenticate, userController.currUser);
};