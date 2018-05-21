webpackHotUpdate(0,{

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(15);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(16);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(3);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(22);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(189);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _modeEdit = __webpack_require__(299);

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _delete = __webpack_require__(296);

var _delete2 = _interopRequireDefault(_delete);

var _loader = __webpack_require__(92);

var _activeCenterAction = __webpack_require__(1678);

var _deleteCenterAction = __webpack_require__(1679);

var _currentEventForCenter = __webpack_require__(1680);

var _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);

var _RecommCenter = __webpack_require__(1681);

var _RecommCenter2 = _interopRequireDefault(_RecommCenter);

var _EventModal = __webpack_require__(1682);

var _EventModal2 = _interopRequireDefault(_EventModal);

var _editCenterForm = __webpack_require__(1683);

var _editCenterForm2 = _interopRequireDefault(_editCenterForm);

var _fetchCenterRelatedTo = __webpack_require__(1684);

var _eventsActions = __webpack_require__(52);

var _helpers = __webpack_require__(131);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CenterDetail: {
    displayName: 'CenterDetail'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/centerDetail.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/centerDetail.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var helpers = new _helpers2.default();

/**
 * CenterDetail Class Component
 * */

var CenterDetail = _wrapComponent('CenterDetail')(function (_Component) {
  _inherits(CenterDetail, _Component);

  /**
   * Class constructor
   * @param { object } props
   * */
  function CenterDetail(props) {
    _classCallCheck(this, CenterDetail);

    var _this = _possibleConstructorReturn(this, (CenterDetail.__proto__ || Object.getPrototypeOf(CenterDetail)).call(this, props));

    _this.state = {
      isLoading: true,
      openAlert: false,
      open: false,
      isAdmin: false,
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

  /**
   * componentDidMount Method
   * @returns { void }
   * */


  _createClass(CenterDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.modal').modal('close');
      $('.tooltipped').tooltip({ delay: 50 });
      var params = this.props.params;

      this.props.fetchCenterAction(params.id);
      if (this.props.activeUser.user.role) {
        this.setState({ isAdmin: this.props.activeUser.user.role });
      }
    }

    /**
     * componentWillReceiveProps Method
     * @param { object } newProps
     * @returns { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var centerDetails = newProps.activeCenterDetail;
      if (centerDetails.eventStatusChange) location.reload();

      if (this.props.params.id !== newProps.params.id) {
        newProps.fetchCenterAction(newProps.params.id);
      }

      if (typeof centerDetails.center !== 'undefined') {
        if (centerDetails.events) {
          centerDetails.center.events = centerDetails.events;
          delete centerDetails.events;
        }
        this.setState({
          isLoading: false,
          activeCenter: centerDetails
        });
      }
    }

    /**
     * editCenter Method
     * @returns { void }
     * */

  }, {
    key: 'editCenter',
    value: function editCenter() {
      this.props.editCenterRequestAction();
    }

    /**
     * handleOpen Method
     * @returns { void }
     * */

  }, {
    key: 'handleOpen',
    value: function handleOpen() {
      this.props.editCenterRequestAction();
      this.setState({ open: true });
    }

    /**
     * handleClose Method
     * @returns { void }
     * */

  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }

    /**
     * handleAlertOpen Method
     * @returns { void }
     * */

  }, {
    key: 'handleAlertOpen',
    value: function handleAlertOpen() {
      this.setState({ openAlert: true });
    }

    /**
     * handleAlertClose Method
     * @returns { void }
     * */

  }, {
    key: 'handleAlertClose',
    value: function handleAlertClose() {
      this.setState({ openAlert: false });
    }

    /**
     * showEditCenterButton Method
     * @returns { Component }
     * */

  }, {
    key: 'showEditCenterButton',
    value: function showEditCenterButton() {
      var actions = [_react3.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onClick: this.handleClose })];

      if (this.state.isAdmin) {
        return _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(_FlatButton2.default, {
            label: 'Edit center',
            icon: _react3.default.createElement(_modeEdit2.default, null),
            onClick: this.handleOpen,
            fullWidth: true
          }),
          _react3.default.createElement(
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
            _react3.default.createElement(_editCenterForm2.default, { history: this.props.history })
          )
        );
      }
    }

    /**
     * showBookCenterButton Method
     * @returns { Component }
     * */

  }, {
    key: 'showBookCenterButton',
    value: function showBookCenterButton() {
      var isSignedIn = this.props.activeUser.isAuthenticated;
      if (isSignedIn) {
        return _react3.default.createElement(_EventModal2.default, null);
      }
    }

    /**
     * showRecommendedCenters Method
     * @param { object } relatedCenterBasedOn
     * @returns { Component }
     * */

  }, {
    key: 'showRecommendedCenters',
    value: function showRecommendedCenters(relatedCenterBasedOn) {
      if (!this.state.isAdmin) {
        return _react3.default.createElement(_RecommCenter2.default, {
          relatedCenterBasedOn: relatedCenterBasedOn,
          fetchCenterRelatedTo: _fetchCenterRelatedTo.fetchCenterRelatedTo
        });
      }
    }

    /**
     * deleteCenter Method
     * @param { string } id
     * @returns { void }
     * */

  }, {
    key: 'deleteCenter',
    value: function deleteCenter(id) {
      var _this2 = this;

      this.props.deleteCenterRequest(id).then(function () {
        if (typeof _this2.props.activeCenterDetail.center === 'undefined') {
          Materialize.toast('Center has been Deleted', 5000, 'teal');
          _this2.props.history.push('/centers');
        }
      });
    }

    /**
     * showAlertModal Method
     * @param { string } id
     * @returns { component }
     * */

  }, {
    key: 'showAlertModal',
    value: function showAlertModal(id) {
      var _this3 = this;

      var actions = [_react3.default.createElement(_FlatButton2.default, { label: 'Yes', primary: true, onClick: function onClick() {
          return _this3.deleteCenter(id);
        } }), _react3.default.createElement(_FlatButton2.default, { label: 'No', primary: true, onClick: function onClick() {
          return _this3.handleAlertClose();
        } })];

      if (this.state.isAdmin) {
        return _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(_FlatButton2.default, {
            label: 'Delete this center',
            secondary: true,
            icon: _react3.default.createElement(_delete2.default, null),
            onClick: this.handleAlertOpen
          }),
          _react3.default.createElement(
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

    /**
     * renderFacilities Method
     * @param { array } facilities
     * @returns { component }
     * */

  }, {
    key: 'renderFacilities',
    value: function renderFacilities(facilities) {
      return facilities.map(function (facility) {
        return _react3.default.createElement(
          'li',
          { key: _shortid2.default.generate() },
          facility
        );
      });
    }

    /**
     * render Method
     * @returns { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          activeCenter = _state.activeCenter,
          isAdmin = _state.isAdmin;

      if (activeCenter.center) {
        var _activeCenter$center = activeCenter.center,
            id = _activeCenter$center.id,
            title = _activeCenter$center.title,
            img_url = _activeCenter$center.img_url,
            _location = _activeCenter$center.location,
            description = _activeCenter$center.description,
            facilities = _activeCenter$center.facilities,
            capacity = _activeCenter$center.capacity,
            price = _activeCenter$center.price,
            events = _activeCenter$center.events;


        var relatedCenterBasedOn = {
          id: id,
          location: _location,
          facilities: facilities,
          capacity: capacity,
          price: price
        };

        return _react3.default.createElement(
          _reactDocumentTitle2.default,
          { title: title + ' | Boots Events Manager' },
          _react3.default.createElement(
            'div',
            { className: 'container' },
            _react3.default.createElement(
              'div',
              { className: 'center__holdr', style: { minHeight: '100vh' } },
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                  'div',
                  { className: 'col s12 l12' },
                  isLoading && _react3.default.createElement(_loader.CircularLoader, null),
                  !isLoading && _react3.default.createElement(
                    'div',
                    { className: 'center__details', 'data-center-id': id },
                    _react3.default.createElement(
                      'h5',
                      { style: { fontWeight: '500' } },
                      title
                    ),
                    _react3.default.createElement(
                      'div',
                      { className: 'slider__holdr' },
                      _react3.default.createElement(
                        'div',
                        { className: 'carousel carousel-slider' },
                        _react3.default.createElement(
                          'a',
                          { className: 'carousel-item', href: '#one' },
                          _react3.default.createElement('img', { src: img_url, alt: title })
                        )
                      )
                    ),
                    _react3.default.createElement(
                      'p',
                      null,
                      _react3.default.createElement(
                        'i',
                        { className: 'material-icons f15' },
                        'location_on'
                      ),
                      ' ',
                      _location
                    ),
                    _react3.default.createElement('div', { className: 'divider' }),
                    _react3.default.createElement(
                      'section',
                      null,
                      _react3.default.createElement(
                        'h5',
                        null,
                        'About this Center'
                      ),
                      _react3.default.createElement(
                        'p',
                        null,
                        description
                      ),
                      _react3.default.createElement('div', { className: 'divider' }),
                      _react3.default.createElement(
                        'div',
                        { className: 'row' },
                        _react3.default.createElement(
                          'div',
                          { className: 'col s12 l8' },
                          _react3.default.createElement(
                            'div',
                            { className: 'row' },
                            _react3.default.createElement(
                              'div',
                              { className: 'col s4' },
                              _react3.default.createElement(
                                'p',
                                null,
                                'Capacity'
                              )
                            ),
                            _react3.default.createElement(
                              'div',
                              { className: 'col s8' },
                              _react3.default.createElement(
                                'p',
                                null,
                                capacity,
                                ' Guests'
                              )
                            )
                          ),
                          _react3.default.createElement('div', { className: 'divider' }),
                          _react3.default.createElement(
                            'div',
                            { className: 'row' },
                            _react3.default.createElement(
                              'div',
                              { className: 'col s4' },
                              _react3.default.createElement(
                                'p',
                                null,
                                'Price'
                              )
                            ),
                            _react3.default.createElement(
                              'div',
                              { className: 'col s8' },
                              _react3.default.createElement(
                                'p',
                                null,
                                _react3.default.createElement(
                                  'span',
                                  null,
                                  '\u20A6',
                                  helpers.numberWithCommas(price)
                                ),
                                ' per event'
                              )
                            )
                          ),
                          _react3.default.createElement('div', { className: 'divider' }),
                          _react3.default.createElement(
                            'div',
                            { className: 'row' },
                            _react3.default.createElement(
                              'div',
                              { className: 'col s4' },
                              _react3.default.createElement(
                                'p',
                                null,
                                'Facilities'
                              )
                            ),
                            _react3.default.createElement(
                              'div',
                              { className: 'col s8' },
                              _react3.default.createElement(
                                'ul',
                                { className: 'facility__list' },
                                this.renderFacilities(facilities)
                              )
                            )
                          )
                        ),
                        _react3.default.createElement(
                          'div',
                          { className: 'col s12 l4' },
                          _react3.default.createElement(_currentEventForCenter2.default, {
                            isAdmin: isAdmin,
                            events: events
                          })
                        )
                      ),
                      _react3.default.createElement(
                        'div',
                        { className: 'row' },
                        _react3.default.createElement(
                          'div',
                          { className: 'col s12 l2' },
                          this.showEditCenterButton()
                        ),
                        _react3.default.createElement(
                          'div',
                          { className: 'col s12 l2' },
                          this.showAlertModal(id)
                        ),
                        _react3.default.createElement(
                          'div',
                          { className: 'col s12 l4' },
                          this.showBookCenterButton()
                        )
                      )
                    )
                  )
                )
              ),
              this.showRecommendedCenters(relatedCenterBasedOn)
            )
          )
        );
      }
      return '';
    }
  }]);

  return CenterDetail;
}(_react2.Component));

CenterDetail.propTypes = {
  params: _propTypes.PropTypes.object.isRequired,
  history: _propTypes.PropTypes.object.isRequired,
  fetchCenterRelatedTo: _propTypes.PropTypes.func.isRequired
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
    deleteCenterRequest: _deleteCenterAction.deleteCenterRequest,
    fetchCenterRelatedTo: _fetchCenterRelatedTo.fetchCenterRelatedTo,
    handleStatusEventAction: _eventsActions.handleStatusEventAction
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CenterDetail);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ })

})
//# sourceMappingURL=hot-update.js.map