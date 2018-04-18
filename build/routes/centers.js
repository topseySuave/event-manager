'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Centers = require('../controllers/Centers');

var _Centers2 = _interopRequireDefault(_Centers);

var _Validation = require('../middleware/Validation');

var _Validation2 = _interopRequireDefault(_Validation);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var centersController = new _Centers2.default();
var validate = new _Validation2.default();

router.get('/centers', centersController.getCenters).get('/centers/:id', centersController.getCenter).post('/centers', _authenticate2.default, validate.validateCenter, centersController.createCenter).put('/centers/:id', _authenticate2.default, validate.validateCenter, centersController.updateCenter).delete('/centers/:id', _authenticate2.default, centersController.deleteCenter);

module.exports = router;
//# sourceMappingURL=centers.js.map