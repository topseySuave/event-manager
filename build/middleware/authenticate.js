'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var User = _models2.default.User;

var authenticate = function authenticate(req, res, next) {

    /***
     * Check if token is provided in request body or query param or request Headers
     ***/
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.send({
            success: false,
            message: 'Unauthorized user, You need to sign in.'
        });
    }

    /**
     * verify secret and checks expiry time**/
    return _jsonwebtoken2.default.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.send({
                success: false,
                message: 'Failed to authenticate token'
            });
        }
        User.findById(decoded.id).then(function (user) {
            if (!user) {
                return res.send({
                    error: 'User Not Found..!!!'
                });
            }
            req.currentUser = user;
            next();
        });
    });
};

exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map