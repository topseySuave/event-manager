import data from '../controllers';

module.exports = (app) => {
    app.post('/api/v1/events', data.events.createEvent)
        .delete('/api/v1/events/:id', data.events.deleteEvent)
        .put('/api/v1/events/:id', data.events.updateEvent);
};