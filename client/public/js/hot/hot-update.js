webpackHotUpdate("main",{

/***/ "./client/src/components/modals/SearchModal.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/modals/SearchModal.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EventCard = __webpack_require__(/*! ../bodyComponents/eventsCard/EventCard */ "./client/src/components/bodyComponents/eventsCard/EventCard.jsx");

var _EventCard2 = _interopRequireDefault(_EventCard);

var _CenterCard = __webpack_require__(/*! ../centerComponent/centerCard/CenterCard */ "./client/src/components/centerComponent/centerCard/CenterCard.jsx");

var _CenterCard2 = _interopRequireDefault(_CenterCard);

var _helpers = __webpack_require__(/*! ../../helpers */ "./client/src/helpers/index.js");

var _helpers2 = _interopRequireDefault(_helpers);

var _searchAction = __webpack_require__(/*! ../../actions/searchAction */ "./client/src/actions/searchAction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SearchModal Class Component
 * */
var SearchModal = exports.SearchModal = function (_Component) {
  _inherits(SearchModal, _Component);

  /**
   * SearchModal Class Constructor
   * @param { object } props
   * */
  function SearchModal(props) {
    _classCallCheck(this, SearchModal);

    var _this = _possibleConstructorReturn(this, (SearchModal.__proto__ || Object.getPrototypeOf(SearchModal)).call(this, props));

    _this.helper = new _helpers2.default();
    _this.state = {
      events: {},
      centers: {}
    };
    _this.handleSearchInput = _this.handleSearchInput.bind(_this);
    return _this;
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */


  _createClass(SearchModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var searchBackBtn = $('.search__back_btn');
      searchBackBtn.on('click', function () {
        $('#search__modal').modal('close');
        $('.modal-overlay').css({ display: 'none' });
      });
    }

    /**
     * componentWillReceiveProps Life cycle Method
     * @param { object } newProps
     * @return { object }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!(0, _isEmpty2.default)(newProps.centerStore)) {
        var centers = newProps.centerStore.centers;

        this.setState({ centers: centers });
      }
      if (!(0, _isEmpty2.default)(newProps.eventStore)) {
        var events = newProps.eventStore.events;

        this.setState({ events: events });
      }
    }

    /**
     * handleSearchInput Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleSearchInput',
    value: function handleSearchInput(e) {
      e.preventDefault();
      var value = e.target.value;

      if (value.length >= 3) {
        var titleString = { search: e.target.value };
        this.props.filterCenterTitle(titleString);
        this.props.filterEventTitle(titleString);
      }
    }

    /**
     * renderEventsCard Method
     * @return { component }
     * */

  }, {
    key: 'renderEventsCard',
    value: function renderEventsCard() {
      var events = this.state.events;

      if (!(0, _isEmpty2.default)(events)) {
        return events.map(function (event, index) {
          return _react2.default.createElement(_EventCard2.default, { key: _shortid2.default.generate(), event: event });
        });
      }
      return _react2.default.createElement(
        'h4',
        null,
        'No Events'
      );
    }

    /**
     * renderCenterCard Method
     * @return { component }
     * */

  }, {
    key: 'renderCenterCard',
    value: function renderCenterCard() {
      var _this2 = this;

      var centers = this.state.centers;

      if (!(0, _isEmpty2.default)(centers)) {
        return centers.map(function (center) {
          var to = '/center/' + center.id + '/' + _this2.helper.sanitizeString(center.title);
          return _react2.default.createElement(_CenterCard2.default, { to: to, center: center, key: _shortid2.default.generate() });
        });
      }
      return _react2.default.createElement(
        'h4',
        null,
        'No centers'
      );
    }

    /**
     * render Method
     * @return { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'search__modal', className: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'search__nav z-depth-0' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col s1' },
                _react2.default.createElement(
                  'a',
                  { className: 'btn btn-flat white waves-effect search__back_btn' },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons search_arrow_back_btn' },
                    'arrow_back'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s11' },
                _react2.default.createElement(
                  'nav',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'nav-wrapper' },
                    _react2.default.createElement(
                      'form',
                      { method: 'post' },
                      _react2.default.createElement(
                        'div',
                        { className: 'input-field no-margin' },
                        _react2.default.createElement('input', {
                          className: 'autocomplete',
                          id: 'autocomplete-input',
                          type: 'search',
                          name: 'searchInput',
                          onChange: this.handleSearchInput,
                          placeholder: 'Search by Name and Location',
                          required: true
                        }),
                        _react2.default.createElement(
                          'label',
                          { className: 'label-icon', htmlFor: 'search' },
                          _react2.default.createElement(
                            'i',
                            { className: 'material-icons search__label' },
                            'search'
                          )
                        ),
                        _react2.default.createElement(
                          'i',
                          { className: 'material-icons white-text' },
                          'close'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search__results' },
          _react2.default.createElement(
            'h5',
            null,
            'Center Results'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row cards-container' },
            this.renderCenterCard()
          ),
          _react2.default.createElement('div', { className: 'divider' }),
          _react2.default.createElement(
            'h5',
            null,
            'Events Results'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row cards-container' },
            this.renderEventsCard()
          )
        )
      );
    }
  }]);

  return SearchModal;
}(_react.Component);

SearchModal.propTypes = {
  filterCenterTitle: _propTypes2.default.func.isRequired,
  filterEventTitle: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    centerStore: state.centerReducer,
    eventStore: state.eventReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ filterCenterTitle: _searchAction.filterCenterTitle, filterEventTitle: _searchAction.filterEventTitle }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchModal);

/***/ }),

/***/ "./client/src/components/modals/index.jsx":
/*!************************************************!*\
  !*** ./client/src/components/modals/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _EditEventModal = __webpack_require__(/*! ./eventModalForm/EditEventModal */ "./client/src/components/modals/eventModalForm/EditEventModal.jsx");

var _EditEventModal2 = _interopRequireDefault(_EditEventModal);

var _CenterModal = __webpack_require__(/*! ./CenterModal */ "./client/src/components/modals/CenterModal.jsx");

var _CenterModal2 = _interopRequireDefault(_CenterModal);

var _SearchModal = __webpack_require__(/*! ./SearchModal */ "./client/src/components/modals/SearchModal.jsx");

var _SearchModal2 = _interopRequireDefault(_SearchModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modals Class Component
 * */
var Modals = function (_Component) {
  _inherits(Modals, _Component);

  function Modals() {
    _classCallCheck(this, Modals);

    return _possibleConstructorReturn(this, (Modals.__proto__ || Object.getPrototypeOf(Modals)).apply(this, arguments));
  }

  _createClass(Modals, [{
    key: 'renderModal',

    /**
     * renderModal Method
     * @return { component }
     * */
    value: function renderModal() {
      return _react2.default.createElement(
        'div',
        { id: 'add_event_modal', className: 'modal modal-fixed-footer' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Edit'
            ),
            ' Event'
          ),
          _react2.default.createElement(_EditEventModal2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'a',
            {
              href: '#_=_',
              className: 'modal-action modal-close waves-effect btn-flat'
            },
            'Cancel'
          )
        )
      );
    }

    /**
     * render Method
     * @return { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderModal(),
        _react2.default.createElement(_CenterModal2.default, null),
        _react2.default.createElement(_SearchModal2.default, null)
      );
    }
  }]);

  return Modals;
}(_react.Component);

exports.default = Modals;

/***/ }),

/***/ "./client/src/components/modals/searchModal.jsx":
false

})
//# sourceMappingURL=hot-update.js.map