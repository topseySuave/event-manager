'use strict';

var _controllers = require('../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post('/api/v1/events', _controllers2.default.events.createEvent).delete('/api/v1/events/:id', _controllers2.default.events.deleteEvent).put('/api/v1/events/:id', _controllers2.default.events.updateEvent);

    app.get('/api/v1/centers', _controllers2.default.center.getCenters).get('/api/v1/centers/:id', _controllers2.default.center.getCenter).post('/api/v1/centers', _controllers2.default.center.createCenter).put('/api/v1/centers/:id', _controllers2.default.center.updateCenter);
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
//# sourceMappingURL=index.js.map