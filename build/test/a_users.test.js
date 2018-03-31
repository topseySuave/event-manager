'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

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

describe('Test user API', function () {
  describe('Creating a new admin or user', function () {
    var firstName = 'Gabriel';
    var lastName = 'Micah';

    it('should return a status 400 error response for a empty firstName field', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: '',
        lastName: lastName,
        email: testHelpers.demoUserEmail,
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty firstName field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: '            ',
        lastName: lastName,
        email: testHelpers.demoUserEmail,
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty lastName field', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: '',
        email: testHelpers.demoUserEmail,
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });
    it('should return a status 400 error response for a empty lastName field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: '             ',
        email: testHelpers.demoUserEmail,
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty email field', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: '',
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response for a empty email field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: '            ',
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if email is not correct', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: 'testHelpers.demoUserEmail',
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password is empty', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.demoUserEmail,
        password: ''
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.demoUserEmail,
        password: '          '
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should create a user ', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.constMailAddr,
        password: testHelpers.constPass
      }).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Account Created for ' + firstName + ' ' + lastName);
      });
      done();
    });

    it('should create an admin', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.adminEmailAddr,
        password: testHelpers.constPass,
        role: true
      }).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Account Created for ' + firstName + ' ' + lastName);
        done();
      });
    });

    it('should return 401 error response for existing email', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.constMailAddr,
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Email has been taken, Please Choose another');
        done();
      });
    });
  });

  describe('Test to sign a user and/or admin in/out', function () {
    it('should return a status 400 error response if email is empty', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        email: '',
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if email field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        email: '          ',
        password: testHelpers.demoUserPassword
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password is empty', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        email: testHelpers.constMailAddr,
        password: ''
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 400 error response if password field is only spaces', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        email: testHelpers.constMailAddr,
        password: '         '
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return a status 200 success response for logging in a user', function (done) {
      request.post(testHelpers.usersApiRoute + '/authentication').send({
        email: testHelpers.constMailAddr,
        password: testHelpers.constPass
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('token');
        expect(res.body).to.haveOwnProperty('message').to.equal('Here`s your Token');
        testHelpers.setToken(res.body.token);
      });
      done();
    });
  });

  describe('Test to set a user as admin', function () {
    it('should return 404 for "user not found"', function (done) {
      request.post('/admin/assign').send({
        email: 'person',
        password: testHelpers.constPass
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body).to.haveOwnProperty('error').to.equal(true);
        expect(res.body).to.haveOwnProperty('message').to.equal('User Not Found! Please Sign Up');
        done();
      });
    });

    it('should return 200 for all users', function (done) {
      request.get('/admin/users/all').end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('message').to.equal('all users found');
        expect(res.body).to.haveOwnProperty('users').to.be.an('array');
        done();
      });
    });
  });

  describe('Tests for deleting users from the database', function () {
    it('should return 404 for trying to delete a user but user not found', function (done) {
      request.post('/admin/users').send({
        userId: 100
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body).to.haveOwnProperty('message').to.equal('User was not found');
        expect(res.body).to.haveOwnProperty('error').to.equal(true);
        done();
      });
    });
  });

  // describe('Test for admin render routes', () => {
  //   it('should return 200 for "/admin/" route', (done) => {
  //     request.get('/admin/')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //       });
  //   });

  //   it('should return 200 for "/admin/pending-events" route', (done) => {
  //     request.get('/admin/pending-events')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //       });
  //   });

  //   it('should return 401 for unauthorized access to "/admin/users" route', (done) => {
  //     request.get('/admin/users')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(401);
  //         expect(res.body).to.haveOwnProperty('error').to.equal(true);
  //         expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized access');
  //       });
  //   });
  // });
});
//# sourceMappingURL=a_users.test.js.map