import Events from '../controllers/events';
import authenticate from '../middleware/authenticate';
const eventController = new Events();

module.exports = (app) => {
    app.get('/api/v1/events', authenticate, eventController.getEvents)
        .get('/api/v1/events/:id', authenticate, eventController.getEvent)
        .post('/api/v1/events', authenticate, eventController.createEvent)
        .delete('/api/v1/events/:id', authenticate, eventController.deleteEvent)
        .put('/api/v1/events/:id', authenticate, eventController.updateEvent);
};