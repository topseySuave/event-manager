'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _testInit = require('./testInit');

var _testInit2 = _interopRequireDefault(_testInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe, it */

var request = (0, _supertest2.default)(_app2.default);
var expect = _chai2.default.expect;

var testConstants = new _testInit2.default();

describe('Test user API', function () {
  var adminId = void 0;
  var userId = void 0;
  var adminToken = void 0;

  describe('Creating a new admin or user', function () {
    var firstName = testConstants.firstName;
    var lastName = testConstants.lastName;
    var adminFirstName = testConstants.adminFirstName;
    var adminLastName = testConstants.adminLastName;

    it('should return a status 400 error response for a empty firstName field', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: '',
        lastName: lastName,
        email: testConstants.demoUserEmail,
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty firstName field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: '            ',
        lastName: lastName,
        email: testConstants.demoUserEmail,
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty lastName field', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: '',
        email: testConstants.demoUserEmail,
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });
    it('should return a status 400 error response for a empty lastName field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: '             ',
        email: testConstants.demoUserEmail,
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty email field', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: '',
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty email field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: '            ',
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if email is not correct', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: 'testConstants.demoUserEmail',
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password is empty', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testConstants.demoUserEmail,
        password: ''
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testConstants.demoUserEmail,
        password: '          '
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should create a user ', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testConstants.constMailAddr,
        password: testConstants.constPass
      }).end(function (err, res) {
        userId = res.body.id;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Account Created for ' + firstName + ' ' + lastName);
      });
      done();
    });

    it('should return 201 response for creaqting another user', function (done) {
      request.post(testConstants.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testConstants.constMailAddr,
        password: testConstants.constPass
      }).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Account Created for ' + firstName + ' ' + lastName);
        done();
      });
    });
  });

  describe('Test to sign a user and/or admin in/out', function () {
    it('should return a status 400 error response if email is empty', function (done) {
      request.post(testConstants.usersApiRoute).send({
        email: '',
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if email field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        email: '          ',
        password: testConstants.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password is empty', function (done) {
      request.post(testConstants.usersApiRoute).send({
        email: testConstants.constMailAddr,
        password: ''
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password field is only spaces', function (done) {
      request.post(testConstants.usersApiRoute).send({
        email: testConstants.constMailAddr,
        password: '         '
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 200 success response for logging in a user', function (done) {
      request.post(testConstants.usersApiRoute + '/authentication').send({
        email: testConstants.constMailAddr,
        password: testConstants.constPass
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('token');
        expect(res.body).to.haveOwnProperty('message').to.equal('signin successful');
        process.env.TOKEN = res.body.token;
        userId = (0, _jwtDecode2.default)(process.env.TOKEN).id;
      });
      done();
    });
  });
});
//# sourceMappingURL=users.test.js.map