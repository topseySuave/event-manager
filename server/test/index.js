import http from 'http';
import assert from 'assert';

import '../bin/www';

describe('Example Node Server', () => {
    it('should return 200', done => {
        http.get('http://localhost:8000', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should return object', done => {
        http.get('http://localhost:8000/api/v1/events', res => {
            assert.equal({}, res.statusCode);
            done();
        });
    });
});