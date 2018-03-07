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

// correct readMe

// heading name of app
// what project do
// what it is build with

// sub - features
// what feature sso of the app
// why the proj is useful
// app requirement

// CLI installation
// how to start the project.
// sub - testing
// heading - Api documentation

//status
// sub - contributing to project

//limitation
// state limitations

//Deployment

//License