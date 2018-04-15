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

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: validate.errors
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
        userId: 'required|integer'
      };

      var validate = new _validatorjs2.default(req.body, eventRules);
      if (validate.passes()) return next();

      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: validate.errors
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
        error = validate.errors.first('email');
      } else {
        error = validate.errors.first('password');
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

      var error = void 0,
          firstName = validate.errors.first('firstName'),
          lastName = validate.errors.first('lastName'),
          email = validate.errors.first('email'),
          password = validate.errors.first('password');

      error = email && password && firstName && lastName && 'All fields are required';
      error.firstName = firstName && validate.errors.first('firstName');
      error.lastName = lastName && validate.errors.first('lastName');
      error.email = email && validate.errors.first('email');
      error.password = password && validate.errors.first('password');

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
//# sourceMappingURL=validator.js.map