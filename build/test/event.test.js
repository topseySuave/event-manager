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

var _mocha = require("mocha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe, it */

var request = (0, _supertest2.default)(_app2.default);
var expect = _chai2.default.expect;

var testConstants = new _testInit2.default();
var userId = 1;
var centerId = 1;
var eventId = void 0;
var tokenn = void 0;

describe("/api/v1/events Route Test API Endpoints", function () {
  var decodedToken = void 0;
  var token = void 0;
  var centerId = void 0;

  // create a user so as to obtain a token for authentication
  (0, _mocha.beforeEach)(function () {
    userId = (0, _jwtDecode2.default)(process.env.TOKEN).id;
    request.get(testConstants.centersApiRoute).end(function (err, res) {
      centerId = res.body.centers[0].id;
    });
  });

  it("Should return 200 with an empty event array", function (done) {
    request.get(testConstants.eventsApiRoute).end(function (err, res) {
      expect(res.body).to.be.an("object");
      expect(res.status).to.be.equal(200);
    });
    done();
  });

  // Creating a new event
  it("Should return 401 for unauthorized user without token", function (done) {
    request.post(testConstants.eventsApiRoute).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(401);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("Unauthorized user, You need to sign in");
    });
    done();
  });

  it("Should return 400 for missing title field", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: "",
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
    });
    done();
  });

  it("Should return 400 for missing description field", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: "",
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
      expect(res.body.error).to.haveOwnProperty("description").to.equal("The description field is required.");
    });
    done();
  });

  it("Should return 400 for missing start date field", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: "",
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
      done();
    });
  });

  it("Should return 400 for missing end date field", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: "",
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
      done();
    });
  });

  it("Should return 400 for missing center id field", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: "",
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.be.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("a required field is missing");
      expect(res.body.error).to.haveOwnProperty("centerId").to.equal("The centerId field is required.");
    });
    done();
  });

  it("Should return 400 when the center has been booked already. (when startDate is the past)", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventPastedDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.deep.equal(400);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("Center has been booked for this date");
    });
    done();
  });

  it("Should return 200 for creating an event", function (done) {
    request.post(testConstants.eventsApiRoute).set("x-access-token", process.env.TOKEN).send({
      title: testConstants.demoEventTitle,
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId,
      userId: userId
    }).end(function (err, res) {
      expect(res.status).to.deep.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.equal("Event has been created");
    });
    done();
  });

  // getting all events
  it("should return 200 response with all events in the database", function (done) {
    request.get(testConstants.eventsApiRoute).end(function (err, res) {
      expect(res.status).to.deep.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.ownProperty("message").to.be.equal("Successful Events!");
      expect(res.body).to.have.ownProperty("events").to.be.an("object");
      expect(res.body).to.have.ownProperty("meta").to.be.an("object");
    });
    done();
  });

  // Updating an event
  it("should return 400 for an invalid id", function (done) {
    request.put(testConstants.eventsApiRoute + "/wrongidparam").set("x-access-token", process.env.TOKEN).send({
      title: "A demo title to update this event",
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId
    }).end(function (err, res) {
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.be.equal("the id specified is not a number");
    });
    done();
  });

  it("should successfully update an event", function (done) {
    request.put(testConstants.eventsApiRoute + "/1").set("x-access-token", process.env.TOKEN).send({
      title: "A demo title to update this event",
      img_url: testConstants.demoEventImg,
      location: testConstants.demoEventLocation,
      description: testConstants.demoEventDescrp,
      startDate: testConstants.demoEventStartDate,
      endDate: testConstants.demoEventEndDate,
      centerId: centerId
    }).end(function (err, res) {
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.be.equal("Event has been updated accordingly");
    });
    done();
  });

  // deleting an event
  it("should succesfully delete an event", function (done) {
    request.delete(testConstants.eventsApiRoute + "/1").set("x-access-token", process.env.TOKEN).end(function (err, res) {
      console.log("delete event 1 ====> ", res.body);
      expect(res.body).to.be.an("object");
      expect(res.body).to.haveOwnProperty("message").to.be.equal("This Event has been deleted");
    });
    done();
  });

  (0, _mocha.after)(function (done) {
    request.post("/admin/users").send({
      userId: userId
    }).end(function (err, res) {
      expect(res.body).to.be.an("object");
      expect(res.status).to.equal(200);
      expect(res.body).to.haveOwnProperty("message").to.equal("User has been deleted successfully");
    });
    done();
  });
});
//# sourceMappingURL=event.test.js.map