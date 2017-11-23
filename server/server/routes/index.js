import data from '../controllers';

const api = '/api/v1'; // Initialize api prefix

module.exports = (app) => {
    app.get(api + '/events/:id', data.events.getEvent)
        .post(api + '/events', data.events.createEvent)
        .put(api + '/events/:id', (req, res)=>{res.send({message: 'suc'})}, data.events.updateEvent)
        .delete(api + '/events/:id', data.events.deleteEvent);

    app.get(api + '/centers', data.center.getCenters)
        .get(api + '/centers/:id', data.center.getCenter)
        .post(api + '/centers', data.center.createCenter)
        .put(api + '/centers/:id', (req, res)=>{res.send({message: 'suc'})}, data.centers.updateCenter);
};