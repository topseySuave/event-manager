'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Events = require('../controllers/Events');

var _Events2 = _interopRequireDefault(_Events);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _Validation = require('../middleware/Validation');

var _Validation2 = _interopRequireDefault(_Validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var validate = new _Validation2.default();
var eventController = new _Events2.default();

router.get('/events', eventController.getEvents).get('/events/:id', eventController.getEvent).post('/events', _authenticate2.default, validate.validateEvent, eventController.createEvent).delete('/events/:id', _authenticate2.default, eventController.deleteEvent).put('/events/:id', _authenticate2.default, validate.validateEvent, eventController.updateEvent);

module.exports = router;
//# sourceMappingURL=events.js.map