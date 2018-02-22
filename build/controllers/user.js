'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = _models2.default.User;

_dotenv2.default.config();

/**
 * @export
 * @class Events
 */

var Users = function () {
    function Users() {
        _classCallCheck(this, Users);
    }

    _createClass(Users, [{
        key: 'createUser',


        /**
         * Signup User record
         *
         * @param {object} req - HTTP Request
         * @param {object} res - HTTP Response
         * @returns {object} Class instance
         * @memberof Users
         */
        value: function createUser(req, res) {

            /***Encrypt Password***/
            var salt = _bcryptjs2.default.genSaltSync(Math.floor(Math.random() * 31));

            var _req$body = req.body,
                firstName = _req$body.firstName,
                lastName = _req$body.lastName,
                email = _req$body.email,
                password = _req$body.password;

            var encryptedPassword = _bcryptjs2.default.hashSync(password, salt);

            User.findOne({
                where: {
                    email: {
                        $iLike: email
                    }
                }
            }).then(function (foundUser) {
                if (foundUser) {
                    return res.status(401).json({
                        statusCode: 401,
                        message: 'Email has been taken, Please Choose another',
                        error: true
                    });
                }
                return User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: encryptedPassword
                }).then(function (user) {
                    return res.status(201).send({
                        statusCode: 201,
                        message: 'Account Created for ' + user.firstName + ' ' + user.lastName,
                        error: false
                    });
                }).catch(function (err) {
                    return res.status(500).json(err);
                });
            }).catch(function (error) {
                return res.status(500).json(error);
            });
        }
    }, {
        key: 'loginUser',
        value: function loginUser(req, res) {
            var _req$body2 = req.body,
                email = _req$body2.email,
                password = _req$body2.password;

            User.findOne({
                where: {
                    email: {
                        $iLike: email
                    }
                }
            }).then(function (foundUser) {
                if (!foundUser) {
                    return res.status(404).send({
                        statusCode: 404,
                        message: 'User Not Found! Please Sign Up',
                        error: true
                    });
                } else if (_bcryptjs2.default.compareSync(password, foundUser.password)) {
                    return res.status(200).send({
                        statusCode: 200,
                        message: 'Here`s your Token',
                        token: _jsonwebtoken2.default.sign({
                            id: foundUser.id,
                            firstName: foundUser.firstName,
                            lastName: foundUser.lastName,
                            email: foundUser.email,
                            role: foundUser.role
                        }, process.env.SECRET_KEY, { expiresIn: '24h' }),
                        error: false
                    });
                } else {
                    return res.status(401).send({
                        statusCode: 401,
                        message: 'Wrong password',
                        error: true
                    });
                }
            }).catch(function (error) {
                return res.status(500).send(error);
            });
        }
    }, {
        key: 'currUser',
        value: function currUser(req, res) {
            return res.send({
                currentUser: req.currentUser
            });
        }
    }]);

    return Users;
}();

exports.default = Users;
//# sourceMappingURL=user.js.map