import chai from 'chai';
import jwtDecode from 'jwt-decode';
import supertest from 'supertest';
import faker from 'faker';
import dotenv from 'dotenv';
import app from '../app';
import testHelper from './testHelpers';

chai.should();
const request = supertest(app);
const {expect} = chai;
const testHelpers = new testHelper();
let userId = 1;
let centerId = 1;
let tokenn;

describe('Test for Events API "/api/v1/events"', () => {
  beforeEach(() => {
    // request.post(`${testHelpers.centersApiRoute}?token=${process.env.TOKEN}`)
    //   .send({
    //     title: testHelpers.democenterTitle,
    //     img_url: testHelpers.demoCenterImg,
    //     location: testHelpers.democenterLocation,
    //     description: testHelpers.demoCenterDescrp,
    //     facilities: testHelpers.demoCenterFacilities,
    //     capacity: testHelpers.democenterCapacity,
    //     price: testHelpers.demoCenterPrice
    //   });

    userId = jwtDecode(process.env.TOKEN).id;
    request.get(`${testHelpers.centersApiRoute}`)
      .end((err, res) => {
        // console.log('before each ====> ', res.body);
        centerId = res.body.centers[0].id;
      });

    // request.get(`${testHelpers.eventsApiRoute}`)
    //   .end((err, res) => {
    //     console.log('before each ====> ', res.body);
    //     expect(res.body).to.be.an('object');
    //     expect(res.status).to.be.equal(200);
    //   });
  });

  it('Should return 200 with an empty event array', (done) => {
    request.get(`${testHelpers.eventsApiRoute}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.be.equal(200);
      });
    done();
  });

  describe('Creating a new event', () => {
    it('Should return 401 for unauthorized user without token', (done) => {
      request.post(testHelpers.eventsApiRoute)
        .send({
          title: testHelpers.demoEventTitle,
          img_url: testHelpers.demoEventImg,
          location: testHelpers.demoEventLocation,
          description: testHelpers.demoEventDescrp,
          startDate: testHelpers.demoEventStartDate,
          endDate: testHelpers.demoEventEndDate,
          centerId,
          userId
        })
        .end((err, res) => {
          expect(res.status).to.be.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
          done();
        });
    });

    // it('Should return 400 for missing title field', (done) => {
    //   request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
    //     .send({
    //       title: '',
    //       img_url: testHelpers.demoEventImg,
    //       location: testHelpers.demoEventLocation,
    //       description: testHelpers.demoEventDescrp,
    //       startDate: testHelpers.demoEventStartDate,
    //       endDate: testHelpers.demoEventEndDate,
    //       centerId,
    //       userId
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.be.equal(400);
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
    //     });
    //   done();
    // });
    //
    // it('Should return 400 for missing description field', (done) => {
    //   request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
    //     .send({
    //       title: testHelpers.demoEventTitle,
    //       img_url: testHelpers.demoEventImg,
    //       location: testHelpers.demoEventLocation,
    //       description: '',
    //       startDate: testHelpers.demoEventStartDate,
    //       endDate: testHelpers.demoEventEndDate,
    //       centerId,
    //       userId
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.be.equal(400);
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
    //       done();
    //     });
    // });
    //
    // it('Should return 400 for missing start date field', (done) => {
    //   request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
    //     .send({
    //       title: testHelpers.demoEventTitle,
    //       img_url: testHelpers.demoEventImg,
    //       location: testHelpers.demoEventLocation,
    //       description: testHelpers.demoEventDescrp,
    //       startDate: '',
    //       endDate: testHelpers.demoEventEndDate,
    //       centerId,
    //       userId
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.be.equal(400);
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
    //       done();
    //     });
    // });
    //
    // it('Should return 400 for missing end date field', (done) => {
    //   request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
    //     .send({
    //       title: testHelpers.demoEventTitle,
    //       img_url: testHelpers.demoEventImg,
    //       location: testHelpers.demoEventLocation,
    //       description: testHelpers.demoEventDescrp,
    //       startDate: testHelpers.demoEventStartDate,
    //       endDate: '',
    //       centerId,
    //       userId
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.be.equal(400);
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
    //       done();
    //     });
    // });

    it('Should return 400 when the center has been booked already. (when startDate is the past)', (done) => {
      request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
        .send({
          title: testHelpers.demoEventTitle,
          img_url: testHelpers.demoEventImg,
          location: testHelpers.demoEventLocation,
          description: testHelpers.demoEventDescrp,
          startDate: testHelpers.demoEventPastedDate,
          endDate: testHelpers.demoEventEndDate,
          centerId,
          userId
        })
        .end((err, res) => {
          // console.log('booked center =====> ', res.body);
          expect(res.status).to.deep.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center has been booked for this date');
        });
      done();
    });

    it('Should return 200 for creating an event', (done) => {
      request.post(`${testHelpers.eventsApiRoute}?token=${process.env.TOKEN}`)
        .send({
          title: testHelpers.demoEventTitle,
          img_url: testHelpers.demoEventImg,
          location: testHelpers.demoEventLocation,
          description: testHelpers.demoEventDescrp,
          startDate: testHelpers.demoEventStartDate,
          endDate: testHelpers.demoEventEndDate,
          centerId,
          userId
        })
        .end((err, res) => {
          console.log('created event =====> ', res.body);
          expect(res.status).to.deep.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Event has been created');
        });
      done();
    });
  });

  // describe('getting all events', () => {
  //   it('should return all events in the database', (done) => {
  //     request.get(`${testHelpers.eventsApiRoute}`)
  //       .end((err, res) => {
  //         console.log('all events ====> ', res.body);
  //       });
  //     done();
  //   });
  // });
  //
  // describe('Updating an event', () => {
  //   it('should successfully update an event', (done) => {
  //     request.put(`${testHelpers.eventsApiRoute}/1?token=${process.env.TOKEN}`)
  //       .end((err, res) => {
  //         console.log('update event 1 ====> ', res.body);
  //         expect(res.body).to.be.an('object');
  //         expect(res.body).to.haveOwnProperty('message').to.be.equal('Event has been updated accordingly');
  //       });
  //     done();
  //   });
  // });
  //
  // describe('deleting an event', () => {
  //   it('should delete an event', (done) => {
  //     request.delete(`${testHelpers.eventsApiRoute}/1?token=${process.env.TOKEN}`)
  //       .end((err, res) => {
  //         console.log('delete event 1 ====> ', res.body);
  //         expect(res.body).to.be.an('object');
  //         expect(res.body).to.haveOwnProperty('message').to.be.equal('This Event has been deleted');
  //       });
  //     done();
  //   });
  // });
  //
  // it('should return 200 for successfully deleting this user', (done) => {
  //   request.post('/admin/users')
  //     .send({
  //       userId
  //     })
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object');
  //       expect(res.status).to.equal(200);
  //       expect(res.body).to.haveOwnProperty('message').to.equal('User has been deleted successfully');
  //       expect(res.body).to.haveOwnProperty('error').to.equal(false);
  //       done();
  //     });
  // });
});
