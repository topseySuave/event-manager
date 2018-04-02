'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _testHelpers = require('./testHelpers');

var _testHelpers2 = _interopRequireDefault(_testHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();
var request = (0, _supertest2.default)(_app2.default);
var expect = _chai2.default.expect;

var testHelpers = new _testHelpers2.default();

// describe('Test event API', () => {
//   describe('Creating a new event', () => {
//     it();
//   });
// });
//# sourceMappingURL=c_event.test.js.map