"use strict";

import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Api Tests', () => {
    describe('Home Route "/"', () => {
        it('succeeds silently!', (done) => { // <= Pass in done callback
            chai.request('http://localhost:8080')
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('Should fail', (done) => { // <= Pass in done callback
            chai.request('http://localhost:8080')
                .get('/api/v1/centers')
                .end((req, res) => {
                    expect(req).to.have.property('id');
                    done();
                });
        });

        it('Should fail', (done) => { // <= Pass in done callback
            chai.request('http://localhost:8080')
                .get('/api/v1/centers')
                .end((req, res) => {
                    expect(req).to.have.json;
                    done();
                });
        });
    });
});

// import http from 'http';
// import assert from 'assert';
//
// import '../bin/www';
//
// describe('Example Node Server', () => {
//     it('should return 200', done => {
//         http.get('http://localhost:8000', res => {
//             assert.equal(200, res.statusCode);
//             done();
//         });
//     });
//
//     it('should return object', done => {
//         http.get('http://localhost:8000/api/v1/events', res => {
//             assert.equal({}, res.statusCode);
//             done();
//         });
//     });
// });