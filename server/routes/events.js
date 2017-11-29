import Events from '../controllers/events';
const eventController = new Events();

module.exports = (app) => {
    app.get('/api/v1/events', eventController.getEvents)
        .get('/api/v1/events/:id', eventController.getEvent)
        .post('/api/v1/events', eventController.createEvent)
        .delete('/api/v1/events/:id', eventController.deleteEvent)
        .put('/api/v1/events/:id', eventController.updateEvent);
};