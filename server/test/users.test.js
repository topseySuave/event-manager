import chai from 'chai';
import uuidv4 from 'uuid/v4';
import dotenv from 'dotenv';
import supertest from 'supertest';
import app from '../app';

chai.should();
const request = supertest(app);
const { expect } = chai;

// Init constants
const host = '/api/v1';
const demoUserEmail = `${uuidv4()}@gmail.com`;
const demoUserPassword = uuidv4();
const adminEmailAddr = 'topse@gmail.com';
const constMailAddr = 'gabriel@gmail.com';
const constPass = '123456789';
const usersApiRoute = `${host}/users`;

describe('Test user API', () => {
  describe('Creating a new admin or user', () => {
    let firstName = 'Gabriel';
    let lastName = 'Micah';

    it('should return a status 400 error response for a empty firstName field', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName: '',
          lastName,
          email: demoUserEmail,
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty firstName field is only spaces', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName: '            ',
          lastName,
          email: demoUserEmail,
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty lastName field', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName: '',
          email: demoUserEmail,
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });
    it('should return a status 400 error response for a empty lastName field is only spaces', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName: '             ',
          email: demoUserEmail,
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '',
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response for a empty email field is only spaces', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: '            ',
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email is not correct', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: 'demoUserEmail',
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: demoUserEmail,
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
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: demoUserEmail,
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
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: constMailAddr,
          password: constPass
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
          done();
        });
    });

    it('should create an admin', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: adminEmailAddr,
          password: constPass,
          role: true
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Account Created for ${firstName} ${lastName}`);
          done();
        });
    });

    it('should return 401 error response for existing email', (done) => {
      request.post(usersApiRoute)
        .send({
          firstName,
          lastName,
          email: constMailAddr,
          password: demoUserPassword
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
      request.post(usersApiRoute)
        .send({
          email: '',
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if email field is only spaces', (done) => {
      request.post(usersApiRoute)
        .send({
          email: '          ',
          password: demoUserPassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return a status 400 error response if password is empty', (done) => {
      request.post(usersApiRoute)
        .send({
          email: constMailAddr,
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
      request.post(usersApiRoute)
        .send({
          email: constMailAddr,
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
      request.post(`${usersApiRoute}/authentication`)
        .send({
          email: constMailAddr,
          password: constPass,
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('token');
          expect(res.body).to.haveOwnProperty('message').to.equal('Here`s your Token');
          done();
        });
    });
  });

  describe('Test to set a user as admin', () => {
    it('should return 404 for "user not found"', (done) => {
      request.post('/admin/assign')
        .send({
          email: 'person',
          password: constPass
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(404);
          expect(res.body).to.haveOwnProperty('error').to.equal(true);
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

    it('should return 404 for trying to delete a user but user not found', (done) => {
      request.post('/admin/users')
        .send({
          userId: 100
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(404);
          expect(res.body).to.haveOwnProperty('message').to.equal('User was not found');
          expect(res.body).to.haveOwnProperty('error').to.equal(true);
          done();
        });
    });
  });
});
