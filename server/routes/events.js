import express from 'express';
import Events from '../controllers/events';
import authenticate from '../middleware/authenticate';
import Validation from '../middleware/validator';

const router = express.Router();
const validate = new Validation();
const eventController = new Events();

router.get('/events', eventController.getEvents)
    .get('/events/:id', eventController.getEvent)
    .post('/events', authenticate, validate.validateEvent, eventController.createEvent)
    .delete('/events/:id', authenticate, eventController.deleteEvent)
    .put('/events/:id', authenticate, validate.validateEvent, eventController.updateEvent);

module.exports = router;
