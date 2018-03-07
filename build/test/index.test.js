"use strict";

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
var expect = _chai2.default.expect;

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTExOTcxNTkwLCJleHAiOjE1MTIwNTc5OTB9.neAGxOu0SK-9rQuvzmCPY5rx2aNJk7AfKqL52G4ZGJI';

describe('Test API', function () {
    describe('GET /', function () {
        it('Should return 200 for getting all centers', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/centers').end(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            });
        });
        it('Should return 200 for getting individual center', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/centers/1').end(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            });
        });
        it('Should return an object', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/centers').end(function (err, res) {
                expect(res.body).to.have.property('message').to.equal('Successful Centers!');
                done();
            });
        });

        it('Should return 200 for the default route', function (done) {
            _chai2.default.request(_app2.default).get('/').end(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            });
        });

        // Test for undefined routes
        it('Undefined Routes Should Return 404', function (done) {
            _chai2.default.request(_app2.default).post('/another/undefined/route').send({ random: 'random' }).end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
        });
    });
    describe('API to update center', function () {
        it('Should return 200 if successful', function (done) {
            _chai2.default.request(_app2.default).put('/api/v1/centers/1').send({
                title: 'Muson center lagos',
                img_url: 'public/images/uploads/img12.jpg',
                location: '24, oluwantode street Ojo, lagos',
                description: 'A sample description for the sample event',
                facilities: 'Chairs, Power, Swimming pool, Tables, Security',
                capacity: 2000,
                price: 200000
            }).end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message').equal('Center has been created');
                done();
            });
        });
    });
    describe('POST event', function () {
        it('Should return 400 for post without event title', function (done) {
            _chai2.default.request(_app2.default).post('/api/v1/events').send({
                title: 'Muson center lagos',
                img_url: 'public/images/uploads/img12.jpg',
                description: 'A sample description for the sample event',
                location: '24, oluwantode street Ojo, lagos',
                startDate: '10-11-18',
                endDate: '10-11-20',
                centerId: 1,
                userId: 2
            }).end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
        });
    });
});
describe('API to update event', function () {
    it('Should return 200 if successful', function (done) {
        _chai2.default.request(_app2.default).put('/api/v1/events/1').send({
            title: 'Muson center lagos',
            img_url: 'public/images/uploads/img12.jpg',
            description: 'A sample description for the sample event',
            location: '24, oluwantode street Ojo, lagos',
            startDate: '10-11-18',
            endDate: '10-11-20',
            centerId: 1,
            userId: 2
        }).end(function (err, res) {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message').to.equal('Event has been created');
            done();
        });
    });
});

describe('API delete event', function () {
    it('Should return 200 for successful delete request', function (done) {
        _chai2.default.request(_app2.default).delete('/api/v1/events/1').end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
    it('Should return 404 if parameter is not found', function (done) {
        _chai2.default.request(_app2.default).delete('/api/v1/events/').end(function (err, res) {
            expect(res).to.have.status(404);
            done();
        });
    });
});
//# sourceMappingURL=index.test.js.map