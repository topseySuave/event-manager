import chai from 'chai';
import faker from 'faker';
import dotenv from 'dotenv';
import supertest from 'supertest';
import app from '../app';
import testHelper from './testHelpers';

chai.should();
const request = supertest(app);
const { expect } = chai;
const testHelpers = new testHelper();

describe('Test center API', () => {
  describe('Creating a new center', () => {
    before('show token', () => {
      console.log(testHelpers.getToken());
    });

    it('should return 401 error response for no token', (done) => {
      request.post(testHelpers.centersApiRoute)
        .send({
          title: testHelpers.democenterTitle,
          img_url: testHelpers.demoCenterImg,
          location: testHelpers.democenterLocation,
          description: testHelpers.demoCenterDescrp,
          facilities: testHelpers.demoCenterFacilities,
          capacity: testHelpers.democenterCapacity,
          price: testHelpers.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
          done();
        });
    });

    it('should return 401 error response for a invalid token', (done) => {
      request.post(`${testHelpers.centersApiRoute}?token=undefined`)
        .send({
          title: testHelpers.democenterTitle,
          img_url: testHelpers.demoCenterImg,
          location: testHelpers.democenterLocation,
          description: testHelpers.demoCenterDescrp,
          facilities: testHelpers.demoCenterFacilities,
          capacity: testHelpers.democenterCapacity,
          price: testHelpers.demoCenterPrice
        })
        .end((err, res) => {
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

