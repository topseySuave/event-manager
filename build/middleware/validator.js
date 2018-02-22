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

var Validation = exports.Validation = function () {
  function Validation() {
    _classCallCheck(this, Validation);
  }

  _createClass(Validation, [{
    key: 'validateCenter',
    value: function validateCenter(req, res, next) {
      var centerRules = {
        title: 'required|string',
        location: 'required|string',
        description: 'required|string',
        facilities: 'array',
        capacity: 'integer',
        price: 'integer'
      };

      var validate = new _validatorjs2.default(req.body, centerRules);
      if (validate.passes()) {
        next();
      } else {
        return res.status(400).send({
          message: "a required field is missing",
          statusCode: 400,
          error: validate.errors
        });
      }
    }
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
      if (validate.passes()) {
        next();
      } else {
        return res.status(400).send({
          message: "a required field is missing",
          statusCode: 400,
          error: validate.errors
        });
      }
    }
  }, {
    key: 'validateLogin',
    value: function validateLogin(req, res, next) {
      var validateLogin = {
        email: 'required|email',
        password: 'required|string'
      };

      var validate = new _validatorjs2.default(req.body, validateLogin);

      if (validate.passes()) {
        return next();
      }
      return res.status(400).send({
        message: "a required field is missing",
        statusCode: 400,
        error: validate.errors
      });
    }
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

      if (validate.passes()) {
        next();
      } else {
        return res.status(400).send({
          message: "a required field is missing",
          statusCode: 400,
          error: validate.errors
        });
      }
    }
  }]);

  return Validation;
}();

exports.default = Validation;
//# sourceMappingURL=validator.js.map