import express from 'express';
import path from 'path';
import jwtDecode from 'jwt-decode';
import Users from '../controllers/Users';
import Events from '../controllers/Events';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const userController = new Users();
const eventsController = new Events();

const renderAllUsers = (req, res) => {
  if (req.query.token) {
    let token = jwtDecode(req.query.token);
    if (token.role) {
      return res
        .status(200)
        .sendFile(path
          .join(__dirname, '../..', 'client/public/admin-users.html'));
    }
  }

  return res.status(401).send({
    message: 'Unauthorized access',
    error: true
  });
};

router
  .get('/', (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, '../..', 'client/public/admin.html'));
  })
  .get('/pending-events', (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, '../..', 'client/public/pending.html'));
  })
  .get('/users', (req, res) => {
    renderAllUsers(req, res);
  })
  .get('/pending-events/all', eventsController.getEvents)
  .get('/users/all', userController.allUsers)
  .post('/assign', userController.assignAdmin)
  .post('/users', userController.removeUsers);

module.exports = router;
