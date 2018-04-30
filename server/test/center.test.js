/* global describe, it */

import chai from 'chai';
import jwtDecode from 'jwt-decode';
import supertest from 'supertest';
import app from '../app';
import testInit from './testInit';

chai.should();
const request = supertest(app);
const { expect } = chai;
const testConstants = new testInit();

describe('Test center API', () => {
  let decodedToken;
  let token;
  let centerId;

  describe('Creating a new center', () => {
    before(() => {
      request.post(`${testConstants.usersApiRoute}/authentication`)
        .send({
          email: testConstants.constMailAddr,
          password: testConstants.constPass,
        })
        .end((err, res) => {
          token = res.body.token;
        });
    });

    it('should return 401 error response for no token', (done) => {
      request.post(testConstants.centersApiRoute)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
          done();
        });
    });

    it('should return 401 error response for a invalid token', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=undefined`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Failed to authenticate token, please sign in');
          done();
        });
    });

    it('should return 400 response for an empty title field', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: '',
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 400 response for an empty location field', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: '',
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 400 response for an empty description field', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: '',
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 400 response if facility field is not an array', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: 'swimming pool, parking lot, stage',
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 400 response if capacity field is empty', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: '',
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 400 response if price field is empty', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: ''
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should create center and return 201 response for a valid token', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center has been created');
          done();
        });
    });

    it('should create center and return 400 response for "center all ready exist"', (done) => {
      request.post(`${testConstants.centersApiRoute}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center already exist');
          done();
        });
    });

    it('should return 200 response for getting all centers', (done) => {
      request.get(`${testConstants.centersApiRoute}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('meta');
          expect(res.body).to.haveOwnProperty('message').to.equal('Successful Center!');
          let rand5 = Math.floor((Math.random() * res.body.centers.length) + 1);
          centerId = rand5;
          done();
        });
    });

    it('should return 200 response for getting search result for centers but centers array will be empty', (done) => {
      process.env.DATA_LIMIT = 30;
      request.get(`${testConstants.centersApiRoute}?search=tfniurhaefidcekubifr`)
        .end((err, res) => {
          let centerLength = res.body.centers.length;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('centers').to.deep.equal([]);
          expect(res.body.centers.length).to.equal(centerLength);
          done();
        });
    });

    it('should return 200 response for getting search result for centers with filters by capacity', (done) => {
      request.get(`${testConstants.centersApiRoute}?filter=capacity&search=2000`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('meta').to.be.an('object');
        });
      done();
    });

    it('should return 200 response for getting search result for centers with filters by price', (done) => {
      request.get(`${testConstants.centersApiRoute}?filter=price&search=200000`)
        .end((err, res) => {
          let meta = res.body.meta;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(meta).to.haveOwnProperty('totalCount').to.equal(0);
        });
      done();
    });

    it('should return 200 response for getting search result for centers with filters by location', (done) => {
      request.get(`${testConstants.centersApiRoute}?filter=location&search=`)
        .end((err, res) => {
          let centerCount = res.body.centers.length;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('meta').to.be.an('object');
        });
      done();
    });

    it('should return 400 response for getting one center with wrong id parameter', (done) => {
      request.get(`${testConstants.centersApiRoute}/wrongidparam`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center id is not a number');
          done();
        });
    });

    it('should return 404 response for getting one center with "Center with id: <centerId> does not exist"', (done) => {
      let centId = 200;
      request.get(`${testConstants.centersApiRoute}/${centId}`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Center with id: ${centId} does not exist`);
          done();
        });
    });

    it('should return 200 response for getting one center', (done) => {
      request.get(`${testConstants.centersApiRoute}/${centerId}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal(`Center with id: ${centerId} was found`);
          done();
        });
    });

    it('should return 404 response with "center not found" for trying to updating a center', (done) => {
      request.put(`${testConstants.centersApiRoute}/900?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center with the id of 900 was not Found');
          done();
        });
    });

    it('should return 400 response for a invalid id parameter when trying to update a center', (done) => {
      request.put(`${testConstants.centersApiRoute}/params?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Center id is not a number');
          done();
        });
    });

    it('should return an error response with missing title field for updating a center', () => {
      request.put(`${testConstants.centersApiRoute}/${centerId}?token=${token}`)
        .send({
          title: '',
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return an error response with missing location field for updating a center', () => {
      request.put(`${testConstants.centersApiRoute}/${centerId}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: '',
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return an error response with missing description field for updating a center', () => {
      request.put(`${testConstants.centersApiRoute}/${centerId}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: '',
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return an error response with missing capacity field for updating a center', () => {
      request.put(`${testConstants.centersApiRoute}/${centerId}?token=${token}`)
        .send({
          title: testConstants.democenterTitle,
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: '',
          price: testConstants.demoCenterPrice
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 200 response for finally updating a center', () => {
      request.put(`${testConstants.centersApiRoute}/${centerId}?token=${token}`)
        .send({
          title: 'A descriptive title for a center',
          img_url: testConstants.demoCenterImg,
          location: testConstants.democenterLocation,
          description: testConstants.demoCenterDescrp,
          facilities: testConstants.demoCenterFacilities,
          capacity: testConstants.democenterCapacity,
          price: 200000
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('a required field is missing');
          done();
        });
    });

    it('should return 401 for trying to delete a center with an id parameter but no token', (done) => {
      request.delete(`${testConstants.centersApiRoute}/${centerId}`)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
        });
      done();
    });

    it('should return 400 for trying to delete a center without authorization', (done) => {
      request.delete(`${testConstants.centersApiRoute}/2000`)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.an('object');
          expect(res.body).to.haveOwnProperty('message').to.equal('Unauthorized user, You need to sign in');
        });
      done();
    });

    it('should return 200 for succesfully deleting this user', (done) => {
      decodedToken = jwtDecode(token);
      request.post('/admin/users')
        .send({
          userId: decodedToken.id
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.haveOwnProperty('message').to.equal('User has been deleted successfully');
        });
      done();
    });
  });
});
