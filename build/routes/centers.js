'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _center = require('../controllers/center');

var _center2 = _interopRequireDefault(_center);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var centersController = new _center2.default();
var validate = new _validator2.default();

router.get('/centers', centersController.getCenters).get('/centers/:id', centersController.getCenter).post('/centers', _authenticate2.default, validate.validateCenter, centersController.createCenter).post('/centers/:id', _authenticate2.default, validate.validateCenter, centersController.updateCenter).delete('/centers/:id', _authenticate2.default, centersController.deleteCenter);

module.exports = router;
//# sourceMappingURL=centers.js.map