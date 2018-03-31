'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

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
  describe('Creating a new center', function () {
    before('show token', function () {
      console.log(testHelpers.getToken());
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

    // it('should return 201 response for a valid token', (done) => {
    //   request.post(`${testHelpers.centersApiRoute}?token=${testHelpers.getToken()}`)
    //     .send({
    //       title: testHelpers.democenterTitle,
    //       img_url: testHelpers.demoCenterImg,
    //       location: testHelpers.democenterLocation,
    //       description: testHelpers.demoCenterDescrp,
    //       facilities: testHelpers.demoCenterFacilities,
    //       capacity: testHelpers.democenterCapacity,
    //       price: testHelpers.demoCenterPrice
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.equal(201);
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.haveOwnProperty('message').to.equal('Center has been created');
    //       done();
    //     });
    // });
  });
});
//# sourceMappingURL=b_center.test.js.map