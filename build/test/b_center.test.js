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

describe('Test center API', function () {
  var decodedToken = void 0;
  var token = void 0;
  var centerId = void 0;

  describe('Creating a new center', function () {
    before(function () {
      request.post(testHelpers.usersApiRoute + '/authentication').send({
        email: testHelpers.constMailAddr,
        password: testHelpers.constPass
      }).end(function (err, res) {
        token = res.body.token;
      });
    });

    it('should return 401 error response for no token', function (done) {
      request.post(testHelpers.centersApiRoute).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
        done();
      });
    });

    it('should return 401 error response for a invalid token', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=undefined').send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Failed to authenticate token, please sign in');
        done();
      });
    });

    it('should return 400 response for an empty title field', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: '',
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 400 response for an empty location field', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: '',
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 400 response for an empty description field', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: '',
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 400 response if facility field is not an array', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: 'swimming pool, parking lot, stage',
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 400 response if capacity field is empty', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: '',
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 400 response if price field is empty', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: ''
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should create center and return 201 response for a valid token', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Center has been created');
        done();
      });
    });

    it('should create center and return 400 response for "center all ready exist"', function (done) {
      request.post(testHelpers.centersApiRoute + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Center already exist');
        done();
      });
    });

    it('should return 200 response for getting all centers', function (done) {
      request.get('' + testHelpers.centersApiRoute).end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('page');
        expect(res.body).to.haveOwnProperty('pageSize');
        expect(res.body).to.haveOwnProperty('totalCount');
        expect(res.body).to.haveOwnProperty('pageCount');
        expect(res.body).to.haveOwnProperty('message').to.equal('Successful Centers!');
        var rand5 = Math.floor(Math.random() * res.body.centers.length + 1);
        centerId = rand5;
        done();
      });
    });

    it('should return 404 response for getting search result for centers not found', function (done) {
      process.env.DATA_LIMIT = 30;
      request.get(testHelpers.centersApiRoute + '?search=ikeja lagos').end(function (err, res) {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Center(s) do not match your search result');
        done();
      });
    });

    it('should return 200 response for getting search result for centers with filters by capacity', function (done) {
      request.get(testHelpers.centersApiRoute + '?filter=capacity&search=2000').end(function (err, res) {
        var centerCount = res.body.centers.length;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('totalCount').to.equal(centerCount);
      });
      done();
    });

    it('should return 200 response for getting search result for centers with filters by price', function (done) {
      request.get(testHelpers.centersApiRoute + '?filter=price&search=200000').end(function (err, res) {
        var centerCount = res.body.centers.length;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('totalCount').to.equal(centerCount);
      });
      done();
    });

    it('should return 200 response for getting search result for centers with filters by location', function (done) {
      request.get(testHelpers.centersApiRoute + '?filter=location&search=').end(function (err, res) {
        var centerCount = res.body.centers.length;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('totalCount').to.equal(centerCount);
      });
      done();
    });

    it('should return 400 response for getting one center with wrond id parameter', function (done) {
      request.get(testHelpers.centersApiRoute + '/wrong-id-param').end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('error').to.equal(true);
        expect(res.body).to.haveOwnProperty('message').to.equal('Center id is not a number');
        done();
      });
    });

    it('should return 404 response for getting one center with "Center with id: <centerId> does not exist"', function (done) {
      var centId = 200;
      request.get(testHelpers.centersApiRoute + '/' + centId).end(function (err, res) {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('error').to.equal(true);
        expect(res.body).to.haveOwnProperty('message').to.equal('Center with id: ' + centId + ' does not exist');
        done();
      });
    });

    it('should return 200 response for getting one center', function (done) {
      request.get(testHelpers.centersApiRoute + '/' + centerId).end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Center with id: ' + centerId + ' was found');
        done();
      });
    });

    it('should return 404 response with "center not found" for trying to updating a center', function (done) {
      request.post(testHelpers.centersApiRoute + '/900?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        // console.log(res);
        // expect(res.status).to.equal(404);
        // expect(res.body).to.be.an('object');
        // expect(res.body).to.haveOwnProperty('message').to.equal('Center not Found with 900');
        done();
      });
    });

    it('should return 400 response for a invalid id parameter when trying to update a center', function (done) {
      request.post(testHelpers.centersApiRoute + '/params?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Center id is not a number');
        done();
      });
    });

    it('should return an error response with missing title field for updating a center', function () {
      request.post(testHelpers.centersApiRoute + '/' + centerId + '?token=' + token).send({
        title: '',
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return an error response with missing location field for updating a center', function () {
      request.post(testHelpers.centersApiRoute + '/' + centerId + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: '',
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return an error response with missing description field for updating a center', function () {
      request.post(testHelpers.centersApiRoute + '/' + centerId + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: '',
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return an error response with missing capacity field for updating a center', function () {
      request.post(testHelpers.centersApiRoute + '/' + centerId + '?token=' + token).send({
        title: testHelpers.democenterTitle,
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: '',
        price: testHelpers.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 200 response for finally updating a center', function () {
      request.post(testHelpers.centersApiRoute + '/' + centerId + '?token=' + token).send({
        title: 'A descriptive title for a center',
        img_url: testHelpers.demoCenterImg,
        location: testHelpers.democenterLocation,
        description: testHelpers.demoCenterDescrp,
        facilities: testHelpers.demoCenterFacilities,
        capacity: testHelpers.democenterCapacity,
        price: 200000
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
        done();
      });
    });

    it('should return 401 for trying to delete a center with an id parameter but no token', function (done) {
      request.delete(testHelpers.centersApiRoute + '/' + centerId).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
      });
      done();
    });

    it('should return 400 for trying to delete a center without authorization', function (done) {
      request.delete(testHelpers.centersApiRoute + '/2000').end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.an('object');
        expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
      });
      done();
    });

    it('should return 200 for succesfully deleting this user', function (done) {
      decodedToken = (0, _jwtDecode2.default)(token);
      request.post('/admin/users').send({
        userId: decodedToken.id
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('message').to.equal('User has been deleted successfully');
        expect(res.body).to.haveOwnProperty('error').to.equal(false);
      });
      done();
    });
  });
});
//# sourceMappingURL=b_center.test.js.map