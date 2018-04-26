'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _Users = require('../controllers/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Events = require('../controllers/Events');

var _Events2 = _interopRequireDefault(_Events);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var userController = new _Users2.default();
var eventsController = new _Events2.default();

router.get('/', function (req, res) {
  res.status(200).sendFile(_path2.default.join(__dirname, '../..', 'client/public/admin.html'));
}).get('/pending-events', function (req, res) {
  res.status(200).sendFile(_path2.default.join(__dirname, '../..', 'client/public/pending.html'));
}).get('/users', function (req, res) {
  if (req.query.token) {
    var token = (0, _jwtDecode2.default)(req.query.token);
    if (token.role) {
      return res.status(200).sendFile(_path2.default.join(__dirname, '../..', 'client/public/admin-users.html'));
    }
  }

  return res.status(401).send({
    message: 'Unauthorized access',
    error: true
  });
}).get('/pending-events/all', eventsController.getEvents).get('/users/all', userController.allUsers).post('/users', userController.removeUsers).post('/assign', userController.assignAdmin);

module.exports = router;
//# sourceMappingURL=administrator.js.map