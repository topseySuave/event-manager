import data from '../controllers';

const api = '/api/v1'; // Initialize api prefix

module.exports = (app) => {
    app.get(api + '/events', data.events.getEvents)
        .get(api + '/events/:id', data.events.getEvent)
        .post(api + '/events', data.events.createEvent);

    app.get(api + '/centers', data.center.getCenters)
        .get(api + '/centers/:id', data.center.getCenter)
        .post(api + '/centers', data.center.createCenter);
};