webpackHotUpdate(0,{

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jsonwebtoken = __webpack_require__(1692);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _jwtDecode = __webpack_require__(294);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _ = __webpack_require__(207);

var _setAuthenticationToken = __webpack_require__(123);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _authActions = __webpack_require__(62);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * AuthCheck Class
 * */
var AuthCheck = function () {
  function AuthCheck() {
    _classCallCheck(this, AuthCheck);
  }

  _createClass(AuthCheck, [{
    key: 'jwtIsSet',

    /**
     * jwtIsSet Method
     * @return { boolean }
     * */
    value: function jwtIsSet() {
      return !!localStorage.getItem('jwtToken');
    }

    /**
     * isSignedIn Method
     * @return { void }
     * */

  }, {
    key: 'isSignedIn',
    value: function isSignedIn() {
      if (this.jwtIsSet()) {
        _jsonwebtoken2.default.verify(localStorage.getItem('jwtToken'), "iamgabrieltopseysuavemicah", function (err, decoded) {
          if (err) {
            _.store.dispatch((0, _authActions.signOutRequest)());
          } else {
            (0, _setAuthenticationToken2.default)(localStorage.getItem('jwtToken'));
            _.store.dispatch((0, _authActions.setCurrentUser)(localStorage.getItem('jwtToken')));
          }
        });
      }
    }

    /**
     * isAdmin Method
     * @return { boolean }
     * */

  }, {
    key: 'isAdmin',
    value: function isAdmin() {
      if (this.jwtIsSet()) {
        if ((0, _jwtDecode2.default)(localStorage.getItem('jwtToken')).role) return true;
      }
      return false;
    }
  }]);

  return AuthCheck;
}();

exports.default = AuthCheck;

/***/ })

})
//# sourceMappingURL=hot-update.js.map