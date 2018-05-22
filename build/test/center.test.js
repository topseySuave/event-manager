"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _jwtDecode = require("jwt-decode");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _supertest = require("supertest");

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require("../app");

var _app2 = _interopRequireDefault(_app);

var _testInit = require("./testInit");

var _testInit2 = _interopRequireDefault(_testInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = (0, _supertest2.default)(_app2.default); /* global describe, it */

var expect = _chai2.default.expect;

var testConstants = new _testInit2.default();
process.env.DATA_LIMIT = 30;

describe("Test center API", function () {
  var decodedToken = void 0;
  var token = void 0;
  var centerId = void 0;

  describe("Creating a new center", function () {
    beforeEach(function () {
      token = process.env.TOKEN;
    });

    it("should return 401 error response for no token", function (done) {
      request.post(testConstants.centersApiRoute).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Unauthorized user, You need to sign in");
        done();
      });
    });

    it("should return 401 error response for a invalid token", function (done) {
      request.post(testConstants.centersApiRoute + "?token=undefined").send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Failed to authenticate token, please sign in");
        done();
      });
    });

    it("should return 400 response for an empty title field", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: "",
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 400 response for an empty location field", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: "",
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 400 response for an empty description field", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: "",
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 400 response if facility field is not an array", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: "swimming pool, parking lot, stage",
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 400 response if capacity field is empty", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: "",
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 400 response if price field is empty", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: ""
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should create center and return 201 response for a valid token", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center has been created");
        done();
      });
    });

    it('should create center and return 400 response for "center all ready exist"', function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center already exist");
        done();
      });
    });

    it("should return 200 response for getting all centers", function (done) {
      request.get("" + testConstants.centersApiRoute).end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("meta");
        expect(res.body).to.haveOwnProperty("message").to.equal("Successful Center!");
        var rand5 = Math.floor(Math.random() * res.body.centers.length + 1);
        centerId = rand5;
        done();
      });
    });

    it("should return 200 response for getting search result for centers but centers array will be empty", function (done) {
      process.env.DATA_LIMIT = 30;
      request.get(testConstants.centersApiRoute + "?search=tfniurhaefidcekubifr").end(function (err, res) {
        var centerLength = res.body.centers.length;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("centers").to.deep.equal([]);
        expect(res.body.centers.length).to.equal(centerLength);
        done();
      });
    });

    it("should return 200 response for getting search result for centers with filters by capacity", function (done) {
      request.get(testConstants.centersApiRoute + "?filter=capacity&search=2000").end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("meta").to.be.an("object");
      });
      done();
    });

    it("should return 200 response for getting search result for centers with filters by price", function (done) {
      request.get(testConstants.centersApiRoute + "?filter=price&search=200000").end(function (err, res) {
        var meta = res.body.meta;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(meta).to.haveOwnProperty("totalCount").to.equal(0);
      });
      done();
    });

    it("should return 200 response for getting search result for centers with filters by location", function (done) {
      request.get(testConstants.centersApiRoute + "?filter=location&search=").end(function (err, res) {
        var centerCount = res.body.centers.length;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("meta").to.be.an("object");
      });
      done();
    });

    it("should return 400 response for getting one center with wrong id parameter", function (done) {
      request.get(testConstants.centersApiRoute + "/wrongidparam").end(function (err, res) {
        done();
      });
    });

    it('should return 404 response for getting one center with "Center with id: <centerId> does not exist"', function (done) {
      var centId = 200;
      request.get(testConstants.centersApiRoute + "/" + centId).end(function (err, res) {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center with id: " + centId + " does not exist");
        done();
      });
    });

    it("should return 200 response for getting one center", function (done) {
      request.get(testConstants.centersApiRoute + "/" + centerId).end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center with id: " + centerId + " was found");
        done();
      });
    });

    it('should return 404 response with "center not found" for trying to updating a center', function (done) {
      request.put(testConstants.centersApiRoute + "/900").set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center with the id of 900 was not Found");
        done();
      });
    });

    it("should return 400 response for a invalid id parameter when trying to update a center", function (done) {
      request.put(testConstants.centersApiRoute + "/params").set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Center id is not a number");
        done();
      });
    });

    it("should return an error response with missing title field for updating a center", function () {
      request.put(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).send({
        title: "",
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return an error response with missing location field for updating a center", function () {
      request.put(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: "",
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return an error response with missing description field for updating a center", function () {
      request.put(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: "",
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return an error response with missing capacity field for updating a center", function () {
      request.put(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: "",
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 200 response for finally updating a center", function () {
      request.put(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).send({
        title: "A descriptive title for a center",
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: 200000
      }).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
        done();
      });
    });

    it("should return 401 for trying to delete a center with an id parameter but no token", function (done) {
      request.delete(testConstants.centersApiRoute + "/" + centerId).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Unauthorized user, You need to sign in");
      });
      done();
    });

    it("should return 400 for trying to delete a center without authorization", function (done) {
      request.delete(testConstants.centersApiRoute + "/2000").end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("Unauthorized user, You need to sign in");
      });
      done();
    });

    it("should return 200 for successfully deleting a center with token", function (done) {
      request.delete(testConstants.centersApiRoute + "/" + centerId).set("x-access-token", token).end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("center").to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.equal("This Center has been deleted");
      });
      done();
    });

    it("should create another center and return 201 response for a valid token", function (done) {
      request.post(testConstants.centersApiRoute).set("x-access-token", token).send({
        title: testConstants.democenterTitle,
        img_url: testConstants.demoCenterImg,
        location: testConstants.democenterLocation,
        description: testConstants.demoCenterDescrp,
        facilities: testConstants.demoCenterFacilities,
        capacity: testConstants.democenterCapacity,
        price: testConstants.demoCenterPrice
      }).end(function (err, res) {
        expect(res.body.statusCode).to.deep.equal(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.haveOwnProperty("message").to.deep.equal("Center has been created");
      });
      done();
    });
  });
});
//# sourceMappingURL=center.test.js.map