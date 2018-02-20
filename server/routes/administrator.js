import express from 'express';
import path from 'path';
import User from '../controllers/user';
// import authenticate from '../middleware/authenticate';

const router = express.Router();
const userController = new User();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../..', 'client/public/admin.html'));
})
 .get('/users', userController.allUsers)
 .post('/assign', userController.assignAdmin);

module.exports = router;
