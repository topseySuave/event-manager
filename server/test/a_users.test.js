import chai from 'chai';
import dotenv from 'dotenv';
import jwtDecode from 'jwt-decode';
import supertest from 'supertest';
import faker from 'faker';
import app from '../app';
import testHelper from './testHelpers';

chai.should();
const request = supertest(app);
const { expect } = chai;
const testHelpers = new testHelper();

describe('Test for users API "/api/v1/users"', () => {
  let adminId;
  let userId;
  let adminToken;

  describe('Creating a new admin or user', () => {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    it('should return a status 400 error response for a empty firstName field', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName: '',
          lastName,
          email: testHelpers.demoUserEmail,
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty firstName field is only spaces', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName: '            ',
          lastName,
          email: testHelpers.demoUserEmail,
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty lastName field', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName: '',
          email: testHelpers.demoUserEmail,
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });
    it('should return a status 400 error response for a empty lastName field is only spaces', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName: '             ',
          email: testHelpers.demoUserEmail,
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '',
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field is only spaces', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '            ',
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email is not correct', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: 'testHelpers.demoUserEmail',
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testHelpers.demoUserEmail,
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
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testHelpers.demoUserEmail,
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
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testHelpers.constMailAddr,
          password: testHelpers.constPass
        })
        .end((err, res) => {
          expect(res.status).to.be.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
          done();
        });
    });

    it('should create an admin', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testHelpers.adminEmailAddr,
          password: testHelpers.constPass,
          role: true
        })
        .end((err, res) => {
          expect(res.status).to.be.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
          done();
        });
    });

    it('should return 401 error response for existing email', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          firstName,
          lastName,
          email: testHelpers.constMailAddr,
          password: testHelpers.constPass
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Email has been taken, Please Choose another');
          done();
        });
    });
  });

  describe('Test to sign a user and/or admin in/out', () => {
    it('should return a status 400 error response if email is empty', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          email: '',
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email field is only spaces', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          email: '          ',
          password: testHelpers.demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(testHelpers.usersApiRoute)
        .send({
          email: testHelpers.constMailAddr,
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
      request.post(testHelpers.usersApiRoute)
        .send({
          email: testHelpers.constMailAddr,
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
      request.post(`${testHelpers.usersApiRoute}/authentication`)
        .send({
          email: testHelpers.constMailAddr,
          password: testHelpers.constPass,
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('token');
          expect(res.body).to.haveOwnProperty('message').to.equal('Here`s your Token');
          process.env.TOKEN = res.body.token;
          userId = jwtDecode(process.env.TOKEN).id;
        });
      done();
    });

    it('should return a status 200 success response for logging in an admin user', (done) => {
      request.post(`${testHelpers.usersApiRoute}/authentication`)
        .send({
          email: testHelpers.adminEmailAddr,
          password: testHelpers.constPass,
        })
        .end((err, res) => {
          adminId = jwtDecode(res.body.token).id;
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('token');
          expect(res.body).to.haveOwnProperty('message').to.equal('Here`s your Token');
        });
      done();
    });
  });

  describe('Test to set a user as admin', () => {
    it('should return 404 for "user not found"', (done) => {
      request.post('/admin/assign')
        .send({
          email: 'person',
          password: testHelpers.constPass
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(404);
          expect(res.body).to.haveOwnProperty('message').to.equal('User Not Found! Please Sign Up');
          done();
        });
    });

    it('should return 200 for all users', (done) => {
      request.get('/admin/users/all')
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('message').to.equal('all users found');
          expect(res.body).to.haveOwnProperty('users').to.be.an('array');
          done();
        });
    });
  });

  describe('Tests for deleting users from the database', () => {
    it('should return 404 for trying to delete a user but user not found', (done) => {
      request.post('/admin/users')
        .send({
          userId: 100
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(404);
          expect(res.body).to.haveOwnProperty('message').to.equal('User was not found');
          done();
        });
    });

    it('should return 200 for succesfully deleting an admin user', (done) => {
      request.post('/admin/users')
        .send({
          userId: adminId
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('message').to.equal('User has been deleted successfully');
          done();
        });
    });
  });
});
