webpackHotUpdate(0,{

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(23);

var _shortid = __webpack_require__(32);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(40);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _fetchCenterRelatedTo = __webpack_require__(1536);

var _loader = __webpack_require__(95);

var _helpers = __webpack_require__(150);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecommCenter = function (_Component) {
  _inherits(RecommCenter, _Component);

  function RecommCenter(props) {
    _classCallCheck(this, RecommCenter);

    var _this = _possibleConstructorReturn(this, (RecommCenter.__proto__ || Object.getPrototypeOf(RecommCenter)).call(this, props));

    _this.helper = new _helpers2.default();
    _this.state = {
      isLoading: true,
      error: false,
      noCenter: 'There are no related centers',
      errorMessage: '',
      relatedCenters: [],
      currentCenterId: 0
    };
    return _this;
  }

  _createClass(RecommCenter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      this.setState({ currentCenterId: newProps.relatedCenterBasedOn.id });
      (0, _fetchCenterRelatedTo.fetchCenterRelatedTo)(newProps.relatedCenterBasedOn).then(function (_ref) {
        var data = _ref.data;

        if (data.statusCode === 200) {
          _this2.setState({ isLoading: false, relatedCenters: data.centers });
        } else {
          _this2.setState({ isLoading: false, error: true, errorMessage: _this2.state.noCenter });
        }
      }).catch(function (err) {
        _this2.setState({ isLoading: false, error: true, errorMessage: 'Houston we have a problem!! we are working on it' });
      });
    }
  }, {
    key: 'checkOwnCenter',
    value: function checkOwnCenter(centerId) {
      return centerId !== this.state.currentCenterId;
    }
  }, {
    key: 'sortAndShowRecommended',
    value: function sortAndShowRecommended(relatedCenters) {
      var _this3 = this;

      if (relatedCenters) {
        return relatedCenters.map(function (center) {
          var to = '/center/' + center.id + '/' + _this3.helper.sanitizeString(center.title);
          if (_this3.checkOwnCenter(center.id)) {
            return _react2.default.createElement(
              'div',
              { key: _shortid2.default.generate(), className: 'col s12 l4' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: to, href: to },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-image' },
                    _react2.default.createElement('img', { src: center.img_url, alt: 'center' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-content black-text' },
                    _react2.default.createElement(
                      'p',
                      { className: 'f__size' },
                      center.title
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'i',
                        { className: 'material-icons f15' },
                        'location_on'
                      ),
                      center.location
                    )
                  )
                )
              )
            );
          }
          return _react2.default.createElement(
            'p',
            { key: _shortid2.default.generate() },
            _this3.state.noCenter
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          error = _state.error,
          errorMessage = _state.errorMessage,
          relatedCenters = _state.relatedCenters;

      var eachCenter = this.sortAndShowRecommended(relatedCenters);
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'divider' }),
        _react2.default.createElement(
          'h5',
          null,
          'Recommended Center'
        ),
        isLoading && _react2.default.createElement(_loader.CircularLoader, null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          !isLoading && error ? errorMessage : (0, _isEmpty2.default)(eachCenter) ? this.state.noCenter : eachCenter
        )
      );
    }
  }]);

  return RecommCenter;
}(_react.Component);

RecommCenter.propTypes = {
  relatedCenterBasedOn: _propTypes.PropTypes.object.isRequired
};

exports.default = RecommCenter;

/***/ })

})
//# sourceMappingURL=hot-update.js.map