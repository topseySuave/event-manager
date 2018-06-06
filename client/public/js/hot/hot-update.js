webpackHotUpdate("main",{

/***/ "./client/src/components/authentication/validateInput.js":
/*!***************************************************************!*\
  !*** ./client/src/components/authentication/validateInput.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignUpInput = validateSignUpInput;
exports.validateSignInInput = validateSignInInput;

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isEmail = __webpack_require__(/*! validator/lib/isEmail */ "./node_modules/validator/lib/isEmail.js");

var _isEmail2 = _interopRequireDefault(_isEmail);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// const errors = {};
/* eslint-disable */
var minLength = 2;
var passMinLength = 6;

function validateSignUpInput(stateInput) {
  var errors = stateInput.errors;

  errors = {};
  if ((0, _isEmpty2.default)(stateInput.email)) {
    errors.email = "This field is required";
  }
  if (!(0, _isEmail2.default)(stateInput.email)) {
    errors.email = "Email is Invalid";
  }

  if ((0, _isEmpty2.default)(stateInput.firstName)) {
    errors.firstName = "This field is required";
  } else if (stateInput.firstName.length < 2) {
    errors.firstName = 'First Name is too short, Must be more than 2 characters';
  }

  if ((0, _isEmpty2.default)(stateInput.lastName)) {
    errors.lastName = "This field is required";
  } else if (stateInput.lastName.length < 2) {
    errors.lastName = 'Last Name is too short, Must be more than 2 characters';
  }

  if ((0, _isEmpty2.default)(stateInput.password)) {
    errors.password = "This field is required";
  } else if (stateInput.password.length < passMinLength) {
    errors.password = "Password is too short, Must be more than " + passMinLength + " characters";
  }

  if ((0, _isEmpty2.default)(stateInput.confirmPassword)) {
    errors.confirmPassword = "This field is required";
  }

  if (stateInput.password !== stateInput.confirmPassword) {
    errors.confirmPassword = "Password must match";
  }
  stateInput.errors = errors;

  return {
    state: stateInput,
    isValid: (0, _isEmpty2.default)(stateInput.errors)
  };
}

function validateSignInInput(stateInput) {
  var errors = stateInput.errors;

  errors = {};
  if ((0, _isEmpty2.default)(stateInput.email)) {
    errors.email = "This field is required";
  }

  if (!(0, _isEmail2.default)(stateInput.email)) {
    errors.email = "Email is invalid";
  }

  if ((0, _isEmpty2.default)(stateInput.password)) {
    errors.password = "This field is required";
  } else if (stateInput.password.length < passMinLength) {
    errors.password = "Password is too short, Must be more than " + passMinLength + " characters";
  }
  stateInput.errors = errors;

  return {
    state: stateInput,
    isValid: (0, _isEmpty2.default)(stateInput.errors)
  };
}

/***/ })

})
//# sourceMappingURL=hot-update.js.map