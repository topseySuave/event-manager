'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

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
  var adminId = void 0;
  var userId = void 0;
  var adminToken = void 0;

  describe('Creating a new admin or user', function () {
    var firstName = _faker2.default.name.firstName();
    var lastName = _faker2.default.name.lastName();

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
        userId = res.body.user.id;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Account Created for ' + firstName + ' ' + lastName);
        done();
      });
    });

    it('should create an admin', function (done) {
      request.post(testHelpers.usersApiRoute).send({
        firstName: firstName,
        lastName: lastName,
        email: testHelpers.adminEmailAddr,
        password: testHelpers.constPass,
        role: true
      }).end(function (err, res) {
        adminId = res.body.user.id;
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
        password: testHelpers.constPass
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
      });
      done();
    });

    it('should return a status 200 success response for logging in an admin user', function (done) {
      request.post(testHelpers.usersApiRoute + '/authentication').send({
        email: testHelpers.adminEmailAddr,
        password: testHelpers.constPass
      }).end(function (err, res) {
        adminToken = res.body.token;
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('token');
        expect(res.body).to.haveOwnProperty('message').to.equal('Here`s your Token');
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

    it('should return 200 for succesfully deleting an admin user', function (done) {
      request.post('/admin/users').send({
        userId: adminId
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('message').to.equal('User has been deleted successfully');
        expect(res.body).to.haveOwnProperty('error').to.equal(false);
        done();
      });
    });
  });
});
//# sourceMappingURL=a_users.test.js.map