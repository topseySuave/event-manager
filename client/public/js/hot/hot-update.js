webpackHotUpdate(0,{

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _reactRedux = __webpack_require__(18);

var _redux = __webpack_require__(19);

var _shortid = __webpack_require__(32);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactDocumentTitle = __webpack_require__(60);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Dialog = __webpack_require__(73);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(76);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _modeEdit = __webpack_require__(237);

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _delete = __webpack_require__(236);

var _delete2 = _interopRequireDefault(_delete);

var _loader = __webpack_require__(95);

var _activeCenterAction = __webpack_require__(1532);

var _deleteCenterAction = __webpack_require__(1533);

var _actions = __webpack_require__(24);

var _currentEventForCenter = __webpack_require__(1534);

var _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);

var _RecommCenter = __webpack_require__(1535);

var _RecommCenter2 = _interopRequireDefault(_RecommCenter);

var _EventModal = __webpack_require__(1537);

var _EventModal2 = _interopRequireDefault(_EventModal);

var _editCenterForm = __webpack_require__(1538);

var _editCenterForm2 = _interopRequireDefault(_editCenterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenterDetail = function (_Component) {
  _inherits(CenterDetail, _Component);

  function CenterDetail(props) {
    _classCallCheck(this, CenterDetail);

    var _this = _possibleConstructorReturn(this, (CenterDetail.__proto__ || Object.getPrototypeOf(CenterDetail)).call(this, props));

    _this.state = {
      isLoading: true,
      openAlert: false,
      open: false,
      activeCenter: {
        centr: {
          title: 'center'
        }
      }
    };

    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleAlertOpen = _this.handleAlertOpen.bind(_this);
    _this.handleAlertClose = _this.handleAlertClose.bind(_this);
    return _this;
  }

  _createClass(CenterDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var params = this.props.params;

      this.props.fetchCenterAction(params.id);
    }

    /* *
       * TODO: modify center details component to update and change the redux store in respond to route change
       * * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // const params = this.props.params;
      // this.props.fetchCenterAction(params.id);
      if (newProps.activeCenterDetail) {
        newProps.activeCenterDetail.centr.events = newProps.activeCenterDetail.events;
        if (newProps.activeCenterDetail.centr.events) {
          delete newProps.activeCenterDetail.events;
        }
        this.setState({ isLoading: false, activeCenter: newProps.activeCenterDetail });
      }
    }
  }, {
    key: 'editCenter',
    value: function editCenter() {
      this.props.editCenterRequestAction();
    }
  }, {
    key: 'handleOpen',
    value: function handleOpen() {
      this.props.editCenterRequestAction();
      this.setState({ open: true });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleAlertOpen',
    value: function handleAlertOpen() {
      this.setState({ openAlert: true });
    }
  }, {
    key: 'handleAlertClose',
    value: function handleAlertClose() {
      this.setState({ openAlert: false });
    }
  }, {
    key: 'showEditCenterButton',
    value: function showEditCenterButton() {
      var isAdmin = this.props.activeUser.user.role;
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        primary: true,
        onClick: this.handleClose
      })];

      if (isAdmin) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_FlatButton2.default, {
            label: 'Edit center',
            icon: _react2.default.createElement(_modeEdit2.default, null),
            onClick: this.handleOpen,
            fullWidth: true
          }),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: 'Edit Center',
              actions: actions,
              modal: false,
              open: this.state.open,
              onRequestClose: this.handleClose,
              autoScrollBodyContent: true,
              style: { marginTop: '0px' }
            },
            _react2.default.createElement(_editCenterForm2.default, null)
          )
        );
      }
    }
  }, {
    key: 'showBookCenterButton',
    value: function showBookCenterButton() {
      var isSignedIn = this.props.activeUser.isAuthenticated;
      if (isSignedIn) {
        return _react2.default.createElement(_EventModal2.default, null);
      }
    }
  }, {
    key: 'deleteCenter',
    value: function deleteCenter(id) {
      this.props.deleteCenterRequest(id).then(function (data) {
        if (data.type === _actions.REMOVE_CENTER) {
          window.history.back();
        }
      });
    }
  }, {
    key: 'showAlertModal',
    value: function showAlertModal(id) {
      var _this2 = this;

      var isAdmin = this.props.activeUser.user.role;
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Yes',
        primary: true,
        onClick: function onClick() {
          return _this2.deleteCenter(id);
        }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'No',
        primary: true,
        onClick: function onClick() {
          return _this2.handleAlertClose();
        }
      })];

      if (isAdmin) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_FlatButton2.default, {
            label: 'Delete this center',
            secondary: true,
            icon: _react2.default.createElement(_delete2.default, null),
            onClick: this.handleAlertOpen
          }),
          _react2.default.createElement(
            _Dialog2.default,
            {
              actions: actions,
              modal: false,
              open: this.state.openAlert,
              onRequestClose: this.handleAlertClose
            },
            'Are you sure you want to delete this event?'
          )
        );
      }
    }
  }, {
    key: 'renderFacilities',
    value: function renderFacilities(facilities) {
      return facilities.map(function (facility) {
        return _react2.default.createElement(
          'li',
          { key: _shortid2.default.generate() },
          facility
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          activeCenter = _state.activeCenter;

      if (activeCenter.centr) {
        var _activeCenter$centr = activeCenter.centr,
            id = _activeCenter$centr.id,
            title = _activeCenter$centr.title,
            img_url = _activeCenter$centr.img_url,
            location = _activeCenter$centr.location,
            description = _activeCenter$centr.description,
            facilities = _activeCenter$centr.facilities,
            capacity = _activeCenter$centr.capacity,
            price = _activeCenter$centr.price,
            events = _activeCenter$centr.events;


        var relatedCenterBasedOn = {
          id: id,
          location: location,
          facilities: facilities,
          capacity: capacity,
          price: price
        };
        if (events) {
          events.map(function (event) {
            event.center = relatedCenterBasedOn;
          });
        }
        return _react2.default.createElement(
          _reactDocumentTitle2.default,
          { title: title + ' | Boots Events Manager' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'center__holdr', style: { minHeight: '560px' } },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col s12 l8' },
                  isLoading && _react2.default.createElement(_loader.CircularLoader, null),
                  !isLoading && _react2.default.createElement(
                    'div',
                    { className: 'center__details', 'data-center-id': id },
                    _react2.default.createElement(
                      'h4',
                      null,
                      title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'slider__holdr' },
                      _react2.default.createElement(
                        'div',
                        { className: 'carousel carousel-slider' },
                        _react2.default.createElement(
                          'a',
                          { className: 'carousel-item', href: '#one' },
                          _react2.default.createElement('img', { src: img_url, alt: title })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'i',
                        { className: 'material-icons f15' },
                        'location_on'
                      ),
                      ' ',
                      location
                    ),
                    _react2.default.createElement('div', { className: 'divider' }),
                    _react2.default.createElement(
                      'section',
                      null,
                      _react2.default.createElement(
                        'h5',
                        null,
                        'About this Center'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        description
                      ),
                      _react2.default.createElement('div', { className: 'divider' }),
                      _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                          'div',
                          { className: 'col s4' },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Capacity'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'col s8' },
                          _react2.default.createElement(
                            'p',
                            null,
                            capacity
                          )
                        )
                      ),
                      _react2.default.createElement('div', { className: 'divider' }),
                      _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                          'div',
                          { className: 'col s4' },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Price'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'col s8' },
                          _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                              'span',
                              null,
                              '\u20A6',
                              price
                            ),
                            ' per event'
                          )
                        )
                      ),
                      _react2.default.createElement('div', { className: 'divider' }),
                      _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                          'div',
                          { className: 'col s4' },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Facilities'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'col s8' },
                          _react2.default.createElement(
                            'ul',
                            { className: 'facility__list' },
                            this.renderFacilities(facilities)
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                          'div',
                          { className: 'col s3' },
                          this.showEditCenterButton()
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'col s5' },
                          this.showAlertModal(id)
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'col s4' },
                          this.showBookCenterButton()
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(_currentEventForCenter2.default, { event: events })
              ),
              _react2.default.createElement(_RecommCenter2.default, { relatedCenterBasedOn: relatedCenterBasedOn })
            )
          )
        );
      }
      return '';
    }
  }]);

  return CenterDetail;
}(_react.Component);

CenterDetail.propTypes = {
  params: _propTypes.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeCenterDetail: state.activeCenter,
    activeUser: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchCenterAction: _activeCenterAction.fetchCenterAction,
    editCenterRequestAction: _activeCenterAction.editCenterRequestAction,
    deleteCenterRequest: _deleteCenterAction.deleteCenterRequest
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CenterDetail);

/***/ })

})
//# sourceMappingURL=hot-update.js.map