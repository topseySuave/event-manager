import express from 'express';
import path from 'path';
import jwtDecode from 'jwt-decode';
import User from '../controllers/user';
import Event from '../controllers/events';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const userController = new User();
const eventsController = new Event();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../..', 'client/public/admin.html'));
})
  .get('/pending-events', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../..', 'client/public/pending.html'));
  })
  .get('/users', (req, res) => {
    if (req.query.token) {
      let token = jwtDecode(req.query.token);
      if (token.role) {
        return res.status(200).sendFile(path.join(__dirname, '../..', 'client/public/admin-users.html'));
      }
    }
    return res.send({
      message: 'Unauthorized access',
      error: true
    });
  })
  .get('/pending-events/all', eventsController.getEvents)
  .get('/users/all', userController.allUsers)
  .post('/users', userController.removeUsers)
  .post('/assign', userController.assignAdmin);

module.exports = router;