/* global describe, it */

import chai from "chai";
import jwtDecode from "jwt-decode";
import supertest from "supertest";
import app from "../app";
import testInit from "./testInit";
import { before, beforeEach, after } from "mocha";

const request = supertest(app);
const { expect } = chai;
const testConstants = new testInit();
let userId = 1;
let centerId = 1;
let eventId;
let tokenn;

describe("/api/v1/events Route Test API Endpoints", () => {
  let decodedToken;
  let token;
  let centerId;

  // create a user so as to obtain a token for authentication
  beforeEach(() => {
    userId = jwtDecode(process.env.TOKEN).id;
    request.get(testConstants.centersApiRoute).end((err, res) => {
      centerId = res.body.centers[0].id;
    });
  });

  it("Should return 200 with an empty event array", done => {
    request.get(testConstants.eventsApiRoute).end((err, res) => {
      expect(res.body).to.be.an("object");
      expect(res.status).to.be.equal(200);
    });
    done();
  });

  // Creating a new event
  it("Should return 401 for unauthorized user without token", done => {
    request
      .post(testConstants.eventsApiRoute)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(401);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("Unauthorized user, You need to sign in");
      });
    done();
  });

  it("Should return 400 for missing title field", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: "",
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("a required field is missing");
      });
    done();
  });

  it("Should return 400 for missing description field", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: "",
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("a required field is missing");
        expect(res.body.error)
          .to.haveOwnProperty("description")
          .to.equal("The description field is required.");
      });
    done();
  });

  it("Should return 400 for missing start date field", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: "",
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("a required field is missing");
        done();
      });
  });

  it("Should return 400 for missing end date field", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: "",
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("a required field is missing");
        done();
      });
  });

  it("Should return 400 for missing center id field", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId: "",
        userId
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("a required field is missing");
        expect(res.body.error)
          .to.haveOwnProperty("centerId")
          .to.equal("The centerId field is required.");
      });
    done();
  });

  it("Should return 400 when the center has been booked already. (when startDate is the past)", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventPastedDate,
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.deep.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("Center has been booked for this date");
      });
    done();
  });

  it("Should return 200 for creating an event", done => {
    request
      .post(testConstants.eventsApiRoute)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: testConstants.demoEventTitle,
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId,
        userId
      })
      .end((err, res) => {
        expect(res.status).to.deep.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("Event has been created");
      });
    done();
  });

  // getting all events
  it("should return 200 response with all events in the database", done => {
    request.get(testConstants.eventsApiRoute).end((err, res) => {
      expect(res.status).to.deep.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body)
        .to.have.ownProperty("message")
        .to.be.equal("Successful Events!");
      expect(res.body)
        .to.have.ownProperty("events")
        .to.be.an("object");
      expect(res.body)
        .to.have.ownProperty("meta")
        .to.be.an("object");
    });
    done();
  });

  // Updating an event
  it("should return 400 for an invalid id", done => {
    request
      .put(`${testConstants.eventsApiRoute}/wrongidparam`)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: "A demo title to update this event",
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId
      })
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.be.equal("the id specified is not a number");
      });
    done();
  });

  it("should successfully update an event", done => {
    request
      .put(`${testConstants.eventsApiRoute}/1`)
      .set("x-access-token", process.env.TOKEN)
      .send({
        title: "A demo title to update this event",
        img_url: testConstants.demoEventImg,
        location: testConstants.demoEventLocation,
        description: testConstants.demoEventDescrp,
        startDate: testConstants.demoEventStartDate,
        endDate: testConstants.demoEventEndDate,
        centerId
      })
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.be.equal("Event has been updated accordingly");
      });
    done();
  });

  // deleting an event
  it("should succesfully delete an event", done => {
    request
      .delete(`${testConstants.eventsApiRoute}/1`)
      .set("x-access-token", process.env.TOKEN)
      .end((err, res) => {
        console.log("delete event 1 ====> ", res.body);
        expect(res.body).to.be.an("object");
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.be.equal("This Event has been deleted");
      });
    done();
  });

  after(done => {
    request
      .post("/admin/users")
      .send({
        userId
      })
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(res.status).to.equal(200);
        expect(res.body)
          .to.haveOwnProperty("message")
          .to.equal("User has been deleted successfully");
      });
    done();
  });
});
