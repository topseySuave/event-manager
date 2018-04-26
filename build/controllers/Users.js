'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _mailer = require('../middleware/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userModel = _models2.default.User;
var Events = _models2.default.Events;
var Op = _models2.default.sequelize.Op;

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
     * Signup Users record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */
    value: function createUser(req, res) {
      /**
       * Encrypt Password** */
      var salt = _bcryptjs2.default.genSaltSync(Math.floor(Math.random() * 5));

      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          email = _req$body.email,
          password = _req$body.password;

      var role = req.body.role || false;
      var encryptedPassword = _bcryptjs2.default.hashSync(password, salt);

      userModel.findOne({
        where: {
          email: _defineProperty({}, Op.iLike, email)
        }
      }).then(function (foundUser) {
        if (foundUser) {
          return res.status(401).json({
            statusCode: 401,
            message: 'Email has been taken, Please Choose another'
          });
        }
        return userModel.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: encryptedPassword,
          role: role
        }).then(function (user) {
          return res.status(201).send({
            statusCode: 201,
            message: 'Account Created for ' + user.firstName + ' ' + user.lastName
          });
        });
      });
    }

    /**
     * Signin Users record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */

  }, {
    key: 'loginUser',
    value: function loginUser(req, res) {
      var _req$body2 = req.body,
          email = _req$body2.email,
          password = _req$body2.password;

      userModel.findOne({
        where: {
          email: _defineProperty({}, Op.iLike, email)
        }
      }).then(function (foundUser) {
        if (!foundUser) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Users Not Found! Please Sign Up'
          });
        } else if (_bcryptjs2.default.compareSync(password, foundUser.password)) {
          return res.status(200).send({
            statusCode: 200,
            message: 'signin successful',
            token: _jsonwebtoken2.default.sign({
              id: foundUser.id,
              role: foundUser.role
            }, process.env.SECRET_KEY, { expiresIn: '24h' })
          });
        }
        return res.status(401).send({
          statusCode: 401,
          message: 'Wrong password'
        });
      });
    }

    /**
     * GETS Current Users record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */

  }, {
    key: 'currUser',
    value: function currUser(req, res) {
      return res.send({
        id: req.currentUser.id,
        email: req.currentUser.email
      });
    }

    /**
     * Assign a Users as admin
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */

  }, {
    key: 'assignAdmin',
    value: function assignAdmin(req, res) {
      var _req$body3 = req.body,
          email = _req$body3.email,
          password = _req$body3.password;

      userModel.findOne({
        where: {
          email: _defineProperty({}, Op.iLike, email)
        }
      }).then(function (foundUser) {
        if (!foundUser) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Users Not Found! Please Sign Up'
          });
        } else if (_bcryptjs2.default.compareSync(password, foundUser.password)) {
          // update user role to true...
          userModel.update({ role: true }, {
            where: {
              id: foundUser.id
            }
          }).then(function (updatedUser) {
            var subject = 'Boots Events Manager: Administrator Assignment';
            var htmlOutput = '\n                            <h6>Boots Events Manager: Administrator Assignment</h6>\n                            <p>Dear, ' + foundUser.firstName + ' ' + foundUser.lastName + ' you have been Assigned as Administrator</p>\n                            <br />\n                            <ul>\n                                <li>First Name: ' + foundUser.firstName + '</li>\n                                <li>Last Name: ' + foundUser.lastName + '</li>\n                                <li>Email: ' + foundUser.email + '</li>\n                            </ul>\n                            <br />\n                            <h6>Admin Privileges</h6>\n                            <ul>\n                                <li>Centers: creation, updating, deleting</li>\n                            </ul>\n                        ';
            (0, _mailer2.default)(foundUser.email, subject, subject, htmlOutput);
            return res.redirect('/');
          });
        } else {
          return res.status(401).send({
            statusCode: 401,
            message: 'Wrong password'
          });
        }
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    /**
     * GETS all Users record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */

  }, {
    key: 'allUsers',
    value: function allUsers(req, res) {
      userModel.findAll().then(function (users) {
        return res.status(200).send({
          message: 'all users found',
          statusCode: 200,
          users: users
        });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    /**
     * DELETE a Users record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */

  }, {
    key: 'removeUsers',
    value: function removeUsers(req, res) {
      var userId = req.body.userId;

      userModel.findOne({
        where: {
          id: userId
        }
      }).then(function (foundUser) {
        if (foundUser) {
          userModel.destroy({
            where: {
              id: foundUser.id
            }
          }).then(function (deletedUser) {
            if (deletedUser) {
              res.status(200).send({
                message: 'Users has been deleted successfully',
                user: foundUser
              });
            } else {
              res.send({
                message: 'Users was not deleted, please try again'
              });
            }
          }).catch(function (error) {
            return res.status(500).send({
              message: 'Houston we have a problem.!! Error deleting Users',
              errorMessage: error
            });
          });
        } else {
          res.status(404).send({
            message: 'Users was not found'
          });
        }
      });
    }
  }]);

  return Users;
}();

exports.default = Users;
//# sourceMappingURL=Users.js.map