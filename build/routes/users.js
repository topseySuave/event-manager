'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var userController = new _user2.default();
var validate = new _validator2.default();

router.post('/users', validate.validateSignUp, userController.createUser).post('/users/authentication', validate.validateLogin, userController.loginUser).get('/users/signed', _authenticate2.default, userController.currUser);

module.exports = router;
//# sourceMappingURL=users.js.map