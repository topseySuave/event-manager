'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @export
 * @class Validation
 */
var Validation = exports.Validation = function () {
  function Validation() {
    _classCallCheck(this, Validation);
  }

  _createClass(Validation, [{
    key: 'validateCenter',

    /**
       * Validate Center record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @param {function} next
       * @returns {object} Class instance
       * @memberof Validation
       */
    value: function validateCenter(req, res, next) {
      var centerRules = {
        title: 'required|string',
        location: 'required|string',
        description: 'required|string',
        facilities: 'array',
        capacity: 'required|integer',
        price: 'required|integer'
      };

      var validate = new _validatorjs2.default(req.body, centerRules);
      if (validate.passes()) return next();

      var error = {},
          title = validate.errors.first('title'),
          location = validate.errors.first('location'),
          description = validate.errors.first('description'),
          facilities = validate.errors.first('facilities'),
          capacity = validate.errors.first('capacity'),
          price = validate.errors.first('price');

      if (title) {
        error.title = title;
      }
      if (location) {
        error.location = location;
      }
      if (description) {
        error.description = description;
      }
      if (facilities) {
        error.facilities = facilities;
      }
      if (capacity) {
        error.capacity = capacity;
      }
      if (price) {
        error.price = price;
      }

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: error
      });
    }

    /**
       * Validate Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @param {function} next
       * @returns {object} Class instance
       * @memberof Validation
       */

  }, {
    key: 'validateEvent',
    value: function validateEvent(req, res, next) {
      var eventRules = {
        title: 'required|string',
        description: 'required|string',
        startDate: 'required|date',
        endDate: 'required|date',
        centerId: 'required|integer',
        userId: 'required|integer'
      };

      var validate = new _validatorjs2.default(req.body, eventRules);
      if (validate.passes()) return next();

      var error = {},
          title = validate.errors.first('title'),
          description = validate.errors.first('description'),
          startDate = validate.errors.first('startDate'),
          endDate = validate.errors.first('endDate'),
          centerId = validate.errors.first('centerId'),
          userId = validate.errors.first('userId');

      if (title) {
        error.title = title;
      }
      if (description) {
        error.description = description;
      }
      if (startDate) {
        error.startDate = startDate;
      }
      if (endDate) {
        error.password = endDate;
      }
      if (centerId) {
        error.centerId = centerId;
      }
      if (userId) {
        error.userId = userId;
      }

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: error
      });
    }

    /**
       * Validate Login record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @param {function} next
       * @returns {object} Class instance
       * @memberof Validation
       */

  }, {
    key: 'validateLogin',
    value: function validateLogin(req, res, next) {
      var validateLogin = {
        email: 'required|email',
        password: 'required|string'
      };

      var validate = new _validatorjs2.default(req.body, validateLogin);
      if (validate.passes()) return next();

      var error = void 0,
          email = validate.errors.first('email'),
          password = validate.errors.first('password');

      if (email && password) {
        error = 'The email and password fields are required';
      } else if (email) {
        error = email;
      } else {
        error = password;
      }

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: error
      });
    }

    /**
       * Validate Sign up record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @param {function} next
       * @returns {object} Class instance
       * @memberof Validation
       */

  }, {
    key: 'validateSignUp',
    value: function validateSignUp(req, res, next) {
      var validation = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        password: 'required|string'
      };

      var validate = new _validatorjs2.default(req.body, validation);
      if (validate.passes()) return next();

      var error = {},
          firstName = validate.errors.first('firstName'),
          lastName = validate.errors.first('lastName'),
          email = validate.errors.first('email'),
          password = validate.errors.first('password');

      if (firstName) {
        error.firstName = firstName;
      }
      if (lastName) {
        error.lastName = lastName;
      }
      if (email) {
        error.email = email;
      }
      if (password) {
        error.password = password;
      }

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: error
      });
    }
  }]);

  return Validation;
}();

exports.default = Validation;
//# sourceMappingURL=Validation.js.map