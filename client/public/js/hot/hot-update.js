webpackHotUpdate("main",{

/***/ "./client/src/components/centerComponent/centerDetail/RecommCenter.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/centerComponent/centerDetail/RecommCenter.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _loader = __webpack_require__(/*! ../../loader */ "./client/src/components/loader.jsx");

var _helpers = __webpack_require__(/*! ../../../helpers */ "./client/src/helpers/index.js");

var _helpers2 = _interopRequireDefault(_helpers);

var _centerCard = __webpack_require__(/*! ../centerCard/centerCard */ "./client/src/components/centerComponent/centerCard/centerCard.jsx");

var _centerCard2 = _interopRequireDefault(_centerCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RecommCenter Class Component
 * */
var RecommCenter = function (_Component) {
  _inherits(RecommCenter, _Component);

  /**
   * RecommCenter Class Constructor
   * @param { object } props
   * */
  function RecommCenter(props) {
    _classCallCheck(this, RecommCenter);

    var _this = _possibleConstructorReturn(this, (RecommCenter.__proto__ || Object.getPrototypeOf(RecommCenter)).call(this, props));

    _this.helper = new _helpers2.default();
    _this.state = {
      isLoading: true,
      error: false,
      noCenter: 'There are no related centers',
      errorMessage: '',
      relatedCenters: []
    };
    return _this;
  }

  /**
   * componentWillMount Method
   * @return { void }
   * */


  _createClass(RecommCenter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchCenter(this.props.relatedCenterBasedOn);
    }

    /**
     * componentWillReceiveProps Method
     * @param { object } newProps
     * @return { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.fetchCenter(newProps.relatedCenterBasedOn);
    }

    /**
     * fetchCenter Method
     * @param { object } relatedCenters
     * @return { void }
     * */

  }, {
    key: 'fetchCenter',
    value: function fetchCenter(relatedCenters) {
      var _this2 = this;

      this.props.fetchCenterRelatedTo(relatedCenters).then(function (_ref) {
        var data = _ref.data;

        _this2.setState({ isLoading: false, relatedCenters: data.centers });
      }).catch(function () {
        _this2.setState({
          isLoading: false,
          error: true,
          errorMessage: _this2.state.noCenter
        });
      });
    }

    /**
     * sortAndShowRecommended Method
     * @return { component }
     * */

  }, {
    key: 'sortAndShowRecommended',
    value: function sortAndShowRecommended() {
      var _this3 = this;

      if (!(0, _isEmpty2.default)(this.state.relatedCenters)) {
        return this.state.relatedCenters.map(function (center, index) {
          var to = '/center/' + center.id + '/' + _this3.helper.sanitizeString(center.title);
          return _react2.default.createElement(
            'div',
            { className: 'col s12 l4', key: _shortid2.default.generate() },
            _react2.default.createElement(_centerCard2.default, { to: to, center: center })
          );
        });
      }
      return _react2.default.createElement(
        'p',
        null,
        this.state.noCenter
      );
    }

    /**
     * render Method
     * @return { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          error = _state.error,
          errorMessage = _state.errorMessage;

      var eachCenter = this.sortAndShowRecommended();
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'divider' }),
        _react2.default.createElement(
          'h5',
          { style: { marginLeft: '10px' } },
          'Recommended Center'
        ),
        isLoading ? _react2.default.createElement(_loader.CircularLoader, null) : _react2.default.createElement(
          'div',
          { className: 'row' },
          error ? errorMessage : (0, _isEmpty2.default)(eachCenter) ? this.state.noCenter : eachCenter
        )
      );
    }
  }]);

  return RecommCenter;
}(_react.Component);

RecommCenter.propTypes = {
  relatedCenterBasedOn: _propTypes.PropTypes.object.isRequired,
  fetchCenterRelatedTo: _propTypes.PropTypes.func.isRequired
};

exports.default = RecommCenter;

/***/ })

})
//# sourceMappingURL=hot-update.js.map