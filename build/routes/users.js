'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Users = require('../controllers/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Validation = require('../middleware/Validation');

var _Validation2 = _interopRequireDefault(_Validation);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var userController = new _Users2.default();
var validate = new _Validation2.default();

router.post('/users', validate.validateSignUp, userController.createUser).post('/users/authentication', validate.validateLogin, userController.loginUser).get('/users/signed', _authenticate2.default, userController.currUser);

module.exports = router;
//# sourceMappingURL=users.js.map