import chai from 'chai';
import faker from 'faker';
import dotenv from 'dotenv';
import supertest from 'supertest';
import app from '../app';
import {
  centersApiRoute,
  democenterTitle,
  demoCenterImg,
  democenterLocation,
  demoCenterDescrp,
  demoCenterFacilities,
  democenterCapacity,
  demoCenterPrice
} from './testHelpers';

chai.should();
const request = supertest(app);
const { expect } = chai;

describe('Test center API', () => {
  describe('Creating a new center', () => {
    it('should return 401 error response for no token', (done) => {
      request.post(centersApiRoute)
        .send({
          title: democenterTitle,
          img_url: demoCenterImg,
          location: democenterLocation,
          description: demoCenterDescrp,
          facilities: demoCenterFacilities,
          capacity: democenterCapacity,
          price: demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
          done();
        });
    });

    it('should return 401 error response for a invalid token', (done) => {
      request.post(`${centersApiRoute}?token=undefined`)
        .send({
          title: democenterTitle,
          img_url: demoCenterImg,
          location: democenterLocation,
          description: demoCenterDescrp,
          facilities: demoCenterFacilities,
          capacity: democenterCapacity,
          price: demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Failed to authenticate token, please sign in');
          done();
        });
    });
  });
});

