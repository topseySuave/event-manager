import Events from '../controllers/events';
import authenticate from '../middleware/authenticate';
import Validation from '../middleware/validator';

const validate = new Validator();
const eventController = new Events();

module.exports = (app) => {
    app.get('/api/v1/events', eventController.getEvents)
        .get('/api/v1/events/:id', eventController.getEvent)
        .post('/api/v1/events', authenticate, validate.validateEvent, eventController.createEvent)
        .delete('/api/v1/events/:id', authenticate, eventController.deleteEvent)
        .put('/api/v1/events/:id', authenticate, validate.validateEvent, eventController.updateEvent);
};