webpackHotUpdate(0,{

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(14);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(15);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(0);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(16);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(4);\n\nvar _reactRedux = __webpack_require__(22);\n\nvar _redux = __webpack_require__(23);\n\nvar _shortid = __webpack_require__(37);\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _reactDocumentTitle = __webpack_require__(68);\n\nvar _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);\n\nvar _Dialog = __webpack_require__(82);\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _RaisedButton = __webpack_require__(173);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(85);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _modeEdit = __webpack_require__(280);\n\nvar _modeEdit2 = _interopRequireDefault(_modeEdit);\n\nvar _delete = __webpack_require__(279);\n\nvar _delete2 = _interopRequireDefault(_delete);\n\nvar _loader = __webpack_require__(112);\n\nvar _activeCenterAction = __webpack_require__(1657);\n\nvar _deleteCenterAction = __webpack_require__(1658);\n\nvar _actions = __webpack_require__(28);\n\nvar _currentEventForCenter = __webpack_require__(1659);\n\nvar _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);\n\nvar _RecommCenter = __webpack_require__(1660);\n\nvar _RecommCenter2 = _interopRequireDefault(_RecommCenter);\n\nvar _EventModal = __webpack_require__(1662);\n\nvar _EventModal2 = _interopRequireDefault(_EventModal);\n\nvar _editCenterForm = __webpack_require__(1663);\n\nvar _editCenterForm2 = _interopRequireDefault(_editCenterForm);\n\nvar _fetchCenterRelatedTo = __webpack_require__(1661);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  CenterDetail: {\n    displayName: 'CenterDetail'\n  }\n};\n\nvar _UsersAndeladeveloperDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/andeladeveloper/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/centerDetail.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersAndeladeveloperDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/andeladeveloper/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/centerDetail.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersAndeladeveloperDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersAndeladeveloperDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar CenterDetail = _wrapComponent('CenterDetail')(function (_Component) {\n  _inherits(CenterDetail, _Component);\n\n  function CenterDetail(props) {\n    _classCallCheck(this, CenterDetail);\n\n    var _this = _possibleConstructorReturn(this, (CenterDetail.__proto__ || Object.getPrototypeOf(CenterDetail)).call(this, props));\n\n    _this.state = {\n      isLoading: true,\n      openAlert: false,\n      open: false,\n      openCenterEvents: false,\n      activeCenter: {\n        centr: {\n          title: 'center'\n        }\n      }\n    };\n\n    _this.handleOpen = _this.handleOpen.bind(_this);\n    _this.handleClose = _this.handleClose.bind(_this);\n    _this.handleAlertOpen = _this.handleAlertOpen.bind(_this);\n    _this.handleAlertClose = _this.handleAlertClose.bind(_this);\n    _this.handleEventsOpen = _this.handleEventsOpen.bind(_this);\n    _this.handleEventsClose = _this.handleEventsClose.bind(_this);\n    return _this;\n  }\n\n  _createClass(CenterDetail, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      $('.tooltipped').tooltip({ delay: 50 });\n      var params = this.props.params;\n\n      this.props.fetchCenterAction(params.id);\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(newProps) {\n      if (this.props.params.id !== newProps.params.id) {\n        newProps.fetchCenterAction(newProps.params.id);\n      }\n\n      if (typeof newProps.activeCenterDetail.centr !== 'undefined') {\n        newProps.activeCenterDetail.centr.events = newProps.activeCenterDetail.events;\n        if (newProps.activeCenterDetail.centr.events) {\n          delete newProps.activeCenterDetail.events;\n        }\n        this.setState({ isLoading: false, activeCenter: newProps.activeCenterDetail });\n      }\n    }\n  }, {\n    key: 'editCenter',\n    value: function editCenter() {\n      this.props.editCenterRequestAction();\n    }\n  }, {\n    key: 'handleOpen',\n    value: function handleOpen() {\n      this.props.editCenterRequestAction();\n      this.setState({ open: true });\n    }\n  }, {\n    key: 'handleClose',\n    value: function handleClose() {\n      this.setState({ open: false });\n    }\n  }, {\n    key: 'handleAlertOpen',\n    value: function handleAlertOpen() {\n      this.setState({ openAlert: true });\n    }\n  }, {\n    key: 'handleAlertClose',\n    value: function handleAlertClose() {\n      this.setState({ openAlert: false });\n    }\n  }, {\n    key: 'handleEventsOpen',\n    value: function handleEventsOpen() {\n      this.setState({ openCenterEvents: true });\n    }\n  }, {\n    key: 'handleEventsClose',\n    value: function handleEventsClose() {\n      this.setState({ openCenterEvents: false });\n    }\n  }, {\n    key: 'showEditCenterButton',\n    value: function showEditCenterButton() {\n      var isAdmin = this.props.activeUser.user.role;\n      var actions = [_react3.default.createElement(_FlatButton2.default, {\n        label: 'Cancel',\n        primary: true,\n        onClick: this.handleClose\n      })];\n\n      if (isAdmin) {\n        return _react3.default.createElement(\n          'div',\n          null,\n          _react3.default.createElement(_FlatButton2.default, {\n            label: 'Edit center',\n            icon: _react3.default.createElement(_modeEdit2.default, null),\n            onClick: this.handleOpen,\n            fullWidth: true\n          }),\n          _react3.default.createElement(\n            _Dialog2.default,\n            {\n              title: 'Edit Center',\n              actions: actions,\n              modal: false,\n              open: this.state.open,\n              onRequestClose: this.handleClose,\n              autoScrollBodyContent: true,\n              style: { marginTop: '0px' }\n            },\n            _react3.default.createElement(_editCenterForm2.default, null)\n          )\n        );\n      }\n    }\n  }, {\n    key: 'showCenterEventsButton',\n    value: function showCenterEventsButton(events) {\n      var actions = [_react3.default.createElement(_FlatButton2.default, {\n        label: 'close',\n        primary: true,\n        onClick: this.handleEventsClose\n      })];\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(_RaisedButton2.default, {\n          label: 'view Events',\n          onClick: this.handleEventsOpen,\n          fullWidth: true\n        }),\n        _react3.default.createElement(\n          _Dialog2.default,\n          {\n            title: 'Events Held by this center',\n            actions: actions,\n            modal: false,\n            open: this.state.openCenterEvents,\n            onRequestClose: this.handleEventsClose,\n            autoScrollBodyContent: true,\n            style: { marginTop: '-100px' }\n          },\n          _react3.default.createElement(_currentEventForCenter2.default, { event: events })\n        )\n      );\n    }\n  }, {\n    key: 'showBookCenterButton',\n    value: function showBookCenterButton() {\n      var isSignedIn = this.props.activeUser.isAuthenticated;\n      if (isSignedIn) {\n        return _react3.default.createElement(_EventModal2.default, null);\n      }\n    }\n  }, {\n    key: 'deleteCenter',\n    value: function deleteCenter(id) {\n      var _this2 = this;\n\n      this.props.deleteCenterRequest(id).then(function () {\n        if (typeof _this2.props.activeCenterDetail.centr === 'undefined') {\n          Materialize.toast('Center has been Deleted', 5000);\n          _this2.props.history.push('/centers');\n        }\n      });\n    }\n  }, {\n    key: 'showAlertModal',\n    value: function showAlertModal(id) {\n      var _this3 = this;\n\n      var isAdmin = this.props.activeUser.user.role;\n      var actions = [_react3.default.createElement(_FlatButton2.default, {\n        label: 'Yes',\n        primary: true,\n        onClick: function onClick() {\n          return _this3.deleteCenter(id);\n        }\n      }), _react3.default.createElement(_FlatButton2.default, {\n        label: 'No',\n        primary: true,\n        onClick: function onClick() {\n          return _this3.handleAlertClose();\n        }\n      })];\n\n      if (isAdmin) {\n        return _react3.default.createElement(\n          'div',\n          null,\n          _react3.default.createElement(_FlatButton2.default, {\n            label: 'Delete this center',\n            secondary: true,\n            icon: _react3.default.createElement(_delete2.default, null),\n            onClick: this.handleAlertOpen\n          }),\n          _react3.default.createElement(\n            _Dialog2.default,\n            {\n              actions: actions,\n              modal: false,\n              open: this.state.openAlert,\n              onRequestClose: this.handleAlertClose\n            },\n            'Are you sure you want to delete this event?'\n          )\n        );\n      }\n    }\n  }, {\n    key: 'renderFacilities',\n    value: function renderFacilities(facilities) {\n      return facilities.map(function (facility) {\n        return _react3.default.createElement(\n          'li',\n          { key: _shortid2.default.generate() },\n          facility\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          isLoading = _state.isLoading,\n          activeCenter = _state.activeCenter;\n\n      if (activeCenter.centr) {\n        var _activeCenter$centr = activeCenter.centr,\n            id = _activeCenter$centr.id,\n            title = _activeCenter$centr.title,\n            img_url = _activeCenter$centr.img_url,\n            location = _activeCenter$centr.location,\n            description = _activeCenter$centr.description,\n            facilities = _activeCenter$centr.facilities,\n            capacity = _activeCenter$centr.capacity,\n            price = _activeCenter$centr.price,\n            events = _activeCenter$centr.events;\n\n\n        var relatedCenterBasedOn = {\n          id: id,\n          location: location,\n          facilities: facilities,\n          capacity: capacity,\n          price: price\n        };\n        if (events) {\n          events.map(function (event) {\n            event.center = relatedCenterBasedOn;\n          });\n        }\n        return _react3.default.createElement(\n          _reactDocumentTitle2.default,\n          { title: title + ' | Boots Events Manager' },\n          _react3.default.createElement(\n            'div',\n            { className: 'container' },\n            _react3.default.createElement(\n              'div',\n              { className: 'center__holdr', style: { minHeight: '100vh' } },\n              _react3.default.createElement(\n                'div',\n                { className: 'row' },\n                _react3.default.createElement(\n                  'div',\n                  { className: 'col s12 l12' },\n                  isLoading && _react3.default.createElement(_loader.CircularLoader, null),\n                  !isLoading && _react3.default.createElement(\n                    'div',\n                    { className: 'center__details', 'data-center-id': id },\n                    _react3.default.createElement(\n                      'h5',\n                      { style: { fontWeight: '500' } },\n                      title\n                    ),\n                    _react3.default.createElement(\n                      'div',\n                      { className: 'slider__holdr' },\n                      _react3.default.createElement(\n                        'div',\n                        { className: 'carousel carousel-slider' },\n                        _react3.default.createElement(\n                          'a',\n                          { className: 'carousel-item', href: '#one' },\n                          _react3.default.createElement('img', { src: img_url, alt: title })\n                        )\n                      )\n                    ),\n                    _react3.default.createElement(\n                      'p',\n                      null,\n                      _react3.default.createElement(\n                        'i',\n                        { className: 'material-icons f15' },\n                        'location_on'\n                      ),\n                      ' ',\n                      location\n                    ),\n                    _react3.default.createElement('div', { className: 'divider' }),\n                    _react3.default.createElement(\n                      'section',\n                      null,\n                      _react3.default.createElement(\n                        'h5',\n                        null,\n                        'About this Center'\n                      ),\n                      _react3.default.createElement(\n                        'p',\n                        null,\n                        description\n                      ),\n                      _react3.default.createElement('div', { className: 'divider' }),\n                      _react3.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s4' },\n                          _react3.default.createElement(\n                            'p',\n                            null,\n                            'Capacity'\n                          )\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s8' },\n                          _react3.default.createElement(\n                            'p',\n                            null,\n                            capacity\n                          )\n                        )\n                      ),\n                      _react3.default.createElement('div', { className: 'divider' }),\n                      _react3.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s4' },\n                          _react3.default.createElement(\n                            'p',\n                            null,\n                            'Price'\n                          )\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s8' },\n                          _react3.default.createElement(\n                            'p',\n                            null,\n                            _react3.default.createElement(\n                              'span',\n                              null,\n                              '\\u20A6',\n                              price\n                            ),\n                            ' per event'\n                          )\n                        )\n                      ),\n                      _react3.default.createElement('div', { className: 'divider' }),\n                      _react3.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s4' },\n                          _react3.default.createElement(\n                            'p',\n                            null,\n                            'Facilities'\n                          )\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s8' },\n                          _react3.default.createElement(\n                            'ul',\n                            { className: 'facility__list' },\n                            this.renderFacilities(facilities)\n                          )\n                        )\n                      ),\n                      _react3.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s2' },\n                          this.showEditCenterButton()\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s2' },\n                          this.showAlertModal(id)\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s4' },\n                          this.showBookCenterButton()\n                        ),\n                        _react3.default.createElement(\n                          'div',\n                          { className: 'col s3' },\n                          this.showCenterEventsButton(events)\n                        )\n                      )\n                    )\n                  )\n                )\n              ),\n              _react3.default.createElement(_RecommCenter2.default, { relatedCenterBasedOn: relatedCenterBasedOn, fetchCenterRelatedTo: _fetchCenterRelatedTo.fetchCenterRelatedTo })\n            )\n          )\n        );\n      }\n      return '';\n    }\n  }]);\n\n  return CenterDetail;\n}(_react2.Component));\n\nCenterDetail.propTypes = {\n  params: _propTypes.PropTypes.object.isRequired,\n  history: _propTypes.PropTypes.object.isRequired,\n  fetchCenterRelatedTo: _propTypes.PropTypes.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    activeCenterDetail: state.activeCenter,\n    activeUser: state.authReducer\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    fetchCenterAction: _activeCenterAction.fetchCenterAction,\n    editCenterRequestAction: _activeCenterAction.editCenterRequestAction,\n    deleteCenterRequest: _deleteCenterAction.deleteCenterRequest,\n    fetchCenterRelatedTo: _fetchCenterRelatedTo.fetchCenterRelatedTo\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CenterDetail);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/components/centerComponent/centerDetail/centerDetail.jsx\n// module id = 1656\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/components/centerComponent/centerDetail/centerDetail.jsx?");

/***/ })

})