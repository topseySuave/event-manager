/* global describe, it */

import chai from 'chai';
import supertest from 'supertest';
import faker from 'faker';
import jwtDecode from 'jwt-decode';
import app from '../app';
import testInit from './testInit';

const request = supertest(app);
const { expect } = chai;
const testConstants = new testInit();

describe('Test user API', () => {
  let adminId;
  let userId;
  let adminToken;

  describe('Creating a new admin or user', () => {
    let firstName = testConstants.firstName;
    let lastName = testConstants.lastName;
    let adminFirstName = testConstants.adminFirstName;
    let adminLastName = testConstants.adminLastName;

    it('should return a status 400 error response for a empty firstName field', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName: '',
          lastName,
          email: testConstants.demoUserEmail,
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty firstName field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName: '            ',
          lastName,
          email: testConstants.demoUserEmail,
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty lastName field', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName: '',
          email: testConstants.demoUserEmail,
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });
    it('should return a status 400 error response for a empty lastName field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName: '             ',
          email: testConstants.demoUserEmail,
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '',
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '            ',
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email is not correct', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: 'testConstants.demoUserEmail',
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testConstants.demoUserEmail,
          password: ''
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testConstants.demoUserEmail,
          password: '          '
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should create a user ', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testConstants.constMailAddr,
          password: testConstants.constPass
        })
        .end((err, res) => {
          userId = res.body.id;
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
        });
      done();
    });

    it('should return 201 response for creating another user', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testConstants.demoUserEmail,
          password: testConstants.constPass
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
          done();
        });
    });
  });

  describe('Test to sign a user and/or admin in/out', () => {
    it('should return a status 400 error response if email is empty', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          email: '',
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          email: '          ',
          password: testConstants.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          email: testConstants.constMailAddr,
          password: ''
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password field is only spaces', (done) => {
      request.post(testConstants.usersApiRoute)
        .send({
          email: testConstants.constMailAddr,
          password: '         '
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 200 success response for logging in a user', (done) => {
      request.post(`${testConstants.usersApiRoute}/authentication`)
        .send({
          email: testConstants.constMailAddr,
          password: testConstants.constPass,
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('token');
          expect(res.body).to.haveOwnProperty('message').to.equal('signin successful');
          process.env.TOKEN = res.body.token;
          userId = jwtDecode(process.env.TOKEN).id;
        });
      done();
    });
  });
});
