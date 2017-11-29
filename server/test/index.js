"use strict";

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Test API', () => {
    describe('GET /', () => {
    //     it('Should return 200 for getting all centers', (done) => {
    //         chai.request(app)
    //             .get('/api/v1/centers')
    //             .end((err, res) => {
    //                 expect(res.status).to.equal(200);
    //                 done();
    //             });
    //     });
    //     it('Should return 200 for getting individual center', (done) => {
    //         chai.request(app)
    //             .get('/api/v1/centers/1')
    //             .end((err, res) => {
    //                 expect(res.status).to.equal(200);
    //                 done();
    //             });
    //     });
    //     it('Should return an object', (done) => {
    //         chai.request(app)
    //             .get('/api/v1/centers')
    //             .end((err, res) => {
    //                 expect(res.body[0]).to.have.property('id');
    //                 done();
    //             });
    //     });

        it('Should return 200 for the default route', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    done();
                });
        });

        // Test for undefined routes
        it('Undefined Routes Should Return 404', (done) => {
            chai.request(app)
                .post('/another/undefined/route')
                .send({ random: 'random' })
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
    // describe('API to update center', () => {
    //     it('Should return 200 if successful', (done) => {
    //         chai.request(app)
    //             .put('/api/v1/centers/1')
    //             .send({
    //                 id: 1,
    //                 title: "This is Andela",
    //                 capacity: 500,
    //                 location: 'Lagos',
    //                 features: 'some feature',
    //                 description: 'Lorem Ipsum Dolor'
    //             })
    //             .end((err, res) => {
    //                 expect(res.status).to.equal(200);
    //                 expect(res.body).to.have.property('message').equal('Success');
    //                 done();
    //             });
    //     });
    // });
    describe('POST event', () => {
        it('Should return 400 for post without event title', (done) => {
            chai.request(app)
                .post('/api/v1/event')
                .send({
                    id: 6,
                    userId: 12,
                    date: '10/11/18',
                    time: '10:00:am',
                    venue: 'Yaba',
                    details: 'Lorem Ipsum'
                })
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});
describe('API to update event', () => {
    it('Should return 200 if successful', (done) => {
        chai.request(app)
            .put('/api/v1/events/1')
            .send({
                title: 'Some Title',
                date: '10/11/18',
                time: '10:00:am',
                venue: 'Yaba',
                details: 'Lorem Ipsum'
            })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message').equal('Success');
                done();
            });
    });
});


describe('API delete event', () => {
    it('Should return 200 for successful delete request ', (done) => {
        chai.request(app)
            .delete('/api/v1/events/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should return 404 if parameter is not found', (done) => {
        chai.request(app)
            .delete('/api/v1/events/')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});