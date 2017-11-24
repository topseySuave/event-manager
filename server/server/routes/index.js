import data from '../controllers';

module.exports = (app) => {
    app.post('/api/v1/events', data.events.createEvent)
        .delete('/api/v1/events/:id', data.events.deleteEvent)
        .put('/api/v1/events/:id', data.events.updateEvent);

    app.get('/api/v1/centers', data.center.getCenters)
        .get('/api/v1/centers/:id', data.center.getCenter)
        .post('/api/v1/centers', data.center.createCenter)
        .put('/api/v1/centers/:id', data.center.updateCenter);
};