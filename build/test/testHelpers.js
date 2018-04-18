'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Assign test helpers Constants
 * @class
 * @memberof testHelper
 */
var testHelper = function () {
  /**
     * Class Constructor
     * @constructor
     * @returns {void} Class instance
     * @memberof testHelper
     */
  function testHelper() {
    _classCallCheck(this, testHelper);

    this.host = '/api/v1';
    this.usersApiRoute = this.host + '/users';
    this.centersApiRoute = this.host + '/centers';

    // Init users constants
    this.demoUserEmail = _faker2.default.internet.email();
    this.demoUserPassword = _faker2.default.internet.password();
    this.adminEmailAddr = 'topse@gmail.com';
    this.constMailAddr = 'gabriel@gmail.com';
    this.constPass = '123456789';

    // Init center constants
    this.democenterTitle = _faker2.default.name.title();
    this.demoCenterImg = _faker2.default.image.imageUrl();
    this.democenterLocation = _faker2.default.address.streetAddress();
    this.demoCenterDescrp = _faker2.default.lorem.paragraph();
    this.demoCenterFacilities = ['swimming pool', 'power', 'chairs', 'parking lot', 'stage'];
    this.democenterCapacity = parseInt(Math.ceil(Math.random() * 5000) + 10, 10); // Return a random number between 10 and 5000 for the capacity of the center
    this.demoCenterPrice = parseInt(Math.ceil(Math.random() * 200000) + 10000, 10); // Return a random number between 10000 and 200000 for the price of the center
    this.setToken = this.setToken.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  /**
     * Sets the token property
     *
     * @param {string} token
     * @returns {string} 'token'
     * @memberof testHelper
     */


  _createClass(testHelper, [{
    key: 'setToken',
    value: function setToken(token) {
      this.token = token;
    }

    /**
       * Gets the token property
       *
       * @returns {string} 'token'
       * @memberof testHelper
       */

  }, {
    key: 'getToken',
    value: function getToken() {
      return this.token;
    }
  }]);

  return testHelper;
}();

exports.default = testHelper;
//# sourceMappingURL=testHelpers.js.map