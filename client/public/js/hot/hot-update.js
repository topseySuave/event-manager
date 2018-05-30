webpackHotUpdate("main",{

/***/ "./client/src/actions/center-actions/activeCenterAction.js":
/*!*****************************************************************!*\
  !*** ./client/src/actions/center-actions/activeCenterAction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCenterRequestAction = exports.fetchCenterAction = exports.fetchCenterDispatch = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(/*! ../ */ "./client/src/actions/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var api = '/api/v1/centers';

var fetchCenterDispatch = exports.fetchCenterDispatch = function fetchCenterDispatch(data) {
  var actionCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  switch (actionCase) {
    case 'FETCH_CENTER_DETAIL':
      return {
        type: _.FETCH_CENTER_DETAIL,
        center: data
      };

    case 'EDIT_CENTER_REQUEST':
      return {
        type: _.EDIT_CENTER_REQUEST
      };

    default:
      return data;
  }
};

var fetchCenterAction = exports.fetchCenterAction = function fetchCenterAction(id) {
  if (!id) return 'id is required for the request to be successful';
  return function (dispatch) {
    return _axios2.default.get(api + '/' + id).then(function (_ref) {
      var data = _ref.data;

      dispatch(fetchCenterDispatch(data, 'FETCH_CENTER_DETAIL'));
    }).catch(function (err) {
      Materialize.toast('Page Not Found!!!', 5000, 'red lighten-4');
      window.location.href = '/404';
      throw err;
    });
  };
};

var editCenterRequestAction = exports.editCenterRequestAction = function editCenterRequestAction() {
  return function (dispatch) {
    return dispatch(fetchCenterDispatch(null, 'EDIT_CENTER_REQUEST'));
  };
};

/***/ }),

/***/ "./client/src/actions/center-actions/deleteCenterAction.js":
/*!*****************************************************************!*\
  !*** ./client/src/actions/center-actions/deleteCenterAction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCenterRequest = exports.deleteAction = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(/*! ../ */ "./client/src/actions/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var deleteAction = exports.deleteAction = function deleteAction(data) {
  return {
    type: _.REMOVE_CENTER,
    payload: data
  };
};

var deleteCenterRequest = exports.deleteCenterRequest = function deleteCenterRequest(id) {
  var api = '/api/v1/centers/';
  return function (dispatch) {
    return _axios2.default.delete(api + id).then(function (_ref) {
      var data = _ref.data;

      dispatch(deleteAction(data));
    }).catch(function (err) {
      Materialize.toast('Center could not be deleted!!!', 5000);
      console.log(err);
    });
  };
};

/***/ }),

/***/ "./client/src/actions/center-actions/fetchCenterRelatedTo.js":
/*!*******************************************************************!*\
  !*** ./client/src/actions/center-actions/fetchCenterRelatedTo.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCenterRelatedTo = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var fetchCenterRelatedTo = exports.fetchCenterRelatedTo = function fetchCenterRelatedTo(_ref) {
  var id = _ref.id,
      location = _ref.location;
  return _axios2.default.get('/api/v1/centers?searchBy=location&search=\n    ' + location + '&basedOn=' + id + '&limit=3');
};

/***/ }),

/***/ "./client/src/components/centerComponent/centerDetail/RecommCenter.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/centerComponent/centerDetail/RecommCenter.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _components = {
  RecommCenter: {
    displayName: 'RecommCenter'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/RecommCenter.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/RecommCenter.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/**
 * RecommCenter Class Component
 * */
var RecommCenter = _wrapComponent('RecommCenter')(function (_Component) {
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
          return _react3.default.createElement(_centerCard2.default, { to: to, center: center, key: _shortid2.default.generate() });
        });
      }
      return _react3.default.createElement(
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
      return _react3.default.createElement(
        'div',
        { className: 'row' },
        _react3.default.createElement('div', { className: 'divider' }),
        _react3.default.createElement(
          'h5',
          { style: { marginLeft: '10px' } },
          'Recommended Center'
        ),
        isLoading ? _react3.default.createElement(_loader.CircularLoader, null) : _react3.default.createElement(
          'div',
          { className: 'row' },
          error ? errorMessage : (0, _isEmpty2.default)(eachCenter) ? this.state.noCenter : eachCenter
        )
      );
    }
  }]);

  return RecommCenter;
}(_react2.Component));

RecommCenter.propTypes = {
  relatedCenterBasedOn: _propTypes.PropTypes.object.isRequired,
  fetchCenterRelatedTo: _propTypes.PropTypes.func.isRequired
};

exports.default = RecommCenter;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/src/components/centerComponent/centerDetail/centerDetail.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/centerComponent/centerDetail/centerDetail.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterDetail = undefined;

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _reactDocumentTitle = __webpack_require__(/*! react-document-title */ "./node_modules/react-document-title/index.js");

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Dialog = __webpack_require__(/*! material-ui/Dialog */ "./node_modules/material-ui/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ "./node_modules/material-ui/RaisedButton/index.js");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ "./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _modeEdit = __webpack_require__(/*! material-ui/svg-icons/editor/mode-edit */ "./node_modules/material-ui/svg-icons/editor/mode-edit.js");

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _delete = __webpack_require__(/*! material-ui/svg-icons/action/delete */ "./node_modules/material-ui/svg-icons/action/delete.js");

var _delete2 = _interopRequireDefault(_delete);

var _loader = __webpack_require__(/*! ../../loader */ "./client/src/components/loader.jsx");

var _activeCenterAction = __webpack_require__(/*! ../../../actions/center-actions/activeCenterAction */ "./client/src/actions/center-actions/activeCenterAction.js");

var _deleteCenterAction = __webpack_require__(/*! ../../../actions/center-actions/deleteCenterAction */ "./client/src/actions/center-actions/deleteCenterAction.js");

var _currentEventForCenter = __webpack_require__(/*! ./currentEventForCenter */ "./client/src/components/centerComponent/centerDetail/currentEventForCenter.jsx");

var _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);

var _RecommCenter = __webpack_require__(/*! ./RecommCenter */ "./client/src/components/centerComponent/centerDetail/RecommCenter.jsx");

var _RecommCenter2 = _interopRequireDefault(_RecommCenter);

var _EventModal = __webpack_require__(/*! ../../modals/EventModal */ "./client/src/components/modals/EventModal.jsx");

var _EventModal2 = _interopRequireDefault(_EventModal);

var _editCenterForm = __webpack_require__(/*! ../../modals/centerModalForms/editCenterForm */ "./client/src/components/modals/centerModalForms/editCenterForm.jsx");

var _editCenterForm2 = _interopRequireDefault(_editCenterForm);

var _fetchCenterRelatedTo = __webpack_require__(/*! ../../../actions/center-actions/fetchCenterRelatedTo */ "./client/src/actions/center-actions/fetchCenterRelatedTo.js");

var _eventsActions = __webpack_require__(/*! ../../../actions/events-actions */ "./client/src/actions/events-actions/index.js");

var _helpers = __webpack_require__(/*! ../../../helpers/ */ "./client/src/helpers/index.js");

var _helpers2 = _interopRequireDefault(_helpers);

var _facilities = __webpack_require__(/*! ../../../util/facilities */ "./client/src/util/facilities.js");

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

var CenterDetail = exports.CenterDetail = _wrapComponent('CenterDetail')(function (_Component) {
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
                          img_url ? _react3.default.createElement('img', { src: img_url, alt: title }) : _react3.default.createElement('img', {
                            src: _facilities.imageNotAvailable,
                            alt: title
                          })
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
                                ' ',
                                'per event'
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/src/components/centerComponent/centerDetail/currentEventForCenter.jsx":
/*!**************************************************************************************!*\
  !*** ./client/src/components/centerComponent/centerDetail/currentEventForCenter.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _IconButton = __webpack_require__(/*! material-ui/IconButton */ "./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _done = __webpack_require__(/*! material-ui/svg-icons/action/done */ "./node_modules/material-ui/svg-icons/action/done.js");

var _done2 = _interopRequireDefault(_done);

var _clear = __webpack_require__(/*! material-ui/svg-icons/content/clear */ "./node_modules/material-ui/svg-icons/content/clear.js");

var _clear2 = _interopRequireDefault(_clear);

var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ "./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = __webpack_require__(/*! material-ui/Dialog */ "./node_modules/material-ui/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _eventCard = __webpack_require__(/*! ../../bodyComponents/eventsCard/eventCard */ "./client/src/components/bodyComponents/eventsCard/eventCard.jsx");

var _eventCard2 = _interopRequireDefault(_eventCard);

var _eventsActions = __webpack_require__(/*! ../../../actions/events-actions */ "./client/src/actions/events-actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CurrentEventForCenter: {
    displayName: "CurrentEventForCenter"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/currentEventForCenter.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/currentEventForCenter.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
} /* eslint-disable */


var CurrentEventForCenter = _wrapComponent("CurrentEventForCenter")(function (_Component) {
  _inherits(CurrentEventForCenter, _Component);

  function CurrentEventForCenter(props) {
    _classCallCheck(this, CurrentEventForCenter);

    var _this = _possibleConstructorReturn(this, (CurrentEventForCenter.__proto__ || Object.getPrototypeOf(CurrentEventForCenter)).call(this, props));

    _this.state = {
      openAlert: false
    };

    _this.handleAlertOpen = _this.handleAlertOpen.bind(_this);
    _this.handleAlertClose = _this.handleAlertClose.bind(_this);
    return _this;
  }

  _createClass(CurrentEventForCenter, [{
    key: "handleAlertOpen",
    value: function handleAlertOpen() {
      this.setState({ openAlert: true });
    }
  }, {
    key: "handleAlertClose",
    value: function handleAlertClose() {
      this.setState({ openAlert: false });
    }
  }, {
    key: "showAlertModal",
    value: function showAlertModal(eventId) {
      var _this2 = this;

      var actions = [_react3.default.createElement(_FlatButton2.default, {
        label: "Yes",
        primary: true,
        onClick: function onClick() {
          return _this2.props.handleStatusEventAction(eventId, "rejected");
        }
      }), _react3.default.createElement(_FlatButton2.default, { label: "No", primary: true, onClick: this.handleAlertClose })];

      return _react3.default.createElement(
        _Dialog2.default,
        {
          actions: actions,
          modal: false,
          open: this.state.openAlert,
          onRequestClose: this.handleAlertClose
        },
        _react3.default.createElement(
          "h5",
          null,
          "Are you sure you want to reject this event?"
        )
      );
    }
  }, {
    key: "renderStatusButtons",
    value: function renderStatusButtons(eventId, status) {
      var _this3 = this;

      var closeButton = function closeButton() {
        return _react3.default.createElement(
          "a",
          {
            className: "secondary-content red-text",
            onClick: _this3.handleAlertOpen
          },
          _react3.default.createElement(
            _IconButton2.default,
            { tooltip: "Reject Event", tooltipPosition: "top-left" },
            _react3.default.createElement(_clear2.default, { color: "red" })
          )
        );
      };

      if (this.props.isAdmin) {
        return _react3.default.createElement(
          "div",
          { className: "status-btns" },
          status === "pending" ? _react3.default.createElement(
            "span",
            null,
            closeButton(),
            _react3.default.createElement(
              "a",
              {
                className: "secondary-content",
                onClick: function onClick() {
                  return _this3.props.handleStatusEventAction(eventId, "accepted");
                }
              },
              _react3.default.createElement(
                _IconButton2.default,
                { tooltip: "Accept Event", tooltipPosition: "top-center" },
                _react3.default.createElement(_done2.default, { color: "green" })
              )
            )
          ) : status === "rejected" ? "" : _react3.default.createElement(
            "span",
            null,
            closeButton()
          )
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var centerEvents = void 0;
      var events = this.props.events;


      if (events.length > 0) {
        centerEvents = events.map(function (event) {
          return _react3.default.createElement(
            "li",
            {
              className: "collection-item",
              key: _shortid2.default.generate(),
              style: { fontSize: "13px" }
            },
            new Date(event.startDate).toDateString() + " - " + new Date(event.endDate).toDateString(),
            _this4.renderStatusButtons(event.id, event.status),
            _this4.showAlertModal(event.id)
          );
        });
      } else {
        centerEvents = _react3.default.createElement(
          "li",
          { className: "collection-item", style: { fontSize: "13px" } },
          "No event for this center"
        );
      }

      return _react3.default.createElement(
        "ul",
        { className: "collection with-header" },
        _react3.default.createElement(
          "li",
          { className: "collection-header" },
          _react3.default.createElement(
            "h6",
            { style: { fontWeight: "bolder" } },
            "Dates booked for this Center"
          )
        ),
        centerEvents
      );
    }
  }]);

  return CurrentEventForCenter;
}(_react2.Component));

CurrentEventForCenter.propTypes = {
  events: _propTypes.PropTypes.array.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    handleStatusEventAction: _eventsActions.handleStatusEventAction
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CurrentEventForCenter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/src/components/modals/EventModal.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/modals/EventModal.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventModal = undefined;

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _Dialog = __webpack_require__(/*! material-ui/Dialog */ "./node_modules/material-ui/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ "./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ "./node_modules/material-ui/RaisedButton/index.js");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _DatePicker = __webpack_require__(/*! material-ui/DatePicker */ "./node_modules/material-ui/DatePicker/index.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(/*! material-ui/Toggle */ "./node_modules/material-ui/Toggle/index.js");

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(/*! ../../actions/events-actions */ "./client/src/actions/events-actions/index.js");

var _formInput = __webpack_require__(/*! ../../components/form/formInput */ "./client/src/components/form/formInput.jsx");

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(/*! ./validateInput */ "./client/src/components/modals/validateInput.js");

var _actions = __webpack_require__(/*! ../../actions */ "./client/src/actions/index.js");

var _history = __webpack_require__(/*! ../../util/history */ "./client/src/util/history.js");

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EventModal: {
    displayName: "EventModal"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/EventModal.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/EventModal.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
} /* eslint-disable */


var styles = {
  labelStyle: {
    color: "green"
  }
};

var EventModal = exports.EventModal = _wrapComponent("EventModal")(function (_Component) {
  _inherits(EventModal, _Component);

  function EventModal(props) {
    _classCallCheck(this, EventModal);

    var _this = _possibleConstructorReturn(this, (EventModal.__proto__ || Object.getPrototypeOf(EventModal)).call(this, props));

    var startDate = new Date();
    var endDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    endDate.setFullYear(endDate.getFullYear() - 1);

    _this.state = {
      open: false,
      disableYearSelection: false,
      isLoading: false,
      errors: {},
      editEvent: false,
      centerId: 0,
      userId: 0,
      title: "",
      img_url: "",
      startDate: null,
      endDate: null,
      description: "",
      private: false
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleEventSubmit = _this.handleEventSubmit.bind(_this);
    _this.onFileChange = _this.onFileChange.bind(_this);
    _this.handleChangeStartDate = _this.handleChangeStartDate.bind(_this);
    _this.handleChangeEndDate = _this.handleChangeEndDate.bind(_this);
    _this.handleToggleChange = _this.handleToggleChange.bind(_this);
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(EventModal, [{
    key: "updateProps",
    value: function updateProps(newProps) {
      if (newProps.bookedCenter) this.setState({ isLoading: false });
      if (newProps.editEvent) {
        var _newProps$eventToEdit = newProps.eventToEdit,
            title = _newProps$eventToEdit.title,
            img_url = _newProps$eventToEdit.img_url,
            startDate = _newProps$eventToEdit.startDate,
            endDate = _newProps$eventToEdit.endDate,
            description = _newProps$eventToEdit.description;

        this.setState({
          editEvent: true,
          centerId: newProps.activeCenter.center.id,
          userId: newProps.actUser.user.id,
          title: title,
          img_url: img_url,
          startDate: startDate,
          endDate: endDate,
          description: description
        });
      } else {
        this.setState({
          centerId: newProps.activeCenter.center.id,
          userId: newProps.actUser.user.id
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateProps(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.event) this.setState({ isLoading: newProps.event.isLoading });
      if (newProps.centerIsBooked) this.setState({ isLoading: false });
      if (newProps.event.eventCreated) _history2.default.push('/my-events');
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var _validateEventInput = (0, _validateInput.validateEventInput)(this.state),
          errors = _validateEventInput.errors,
          isValid = _validateEventInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }
  }, {
    key: "handleChangeStartDate",
    value: function handleChangeStartDate(e, date) {
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, "red");
        this.setState({
          startDate: {}
        });
      } else {
        this.setState({
          startDate: date.toDateString()
        });
      }
    }
  }, {
    key: "handleChangeEndDate",
    value: function handleChangeEndDate(e, date) {
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, "red");
        this.setState({
          endDate: {}
        });
      } else {
        this.setState({
          endDate: date.toDateString()
        });
      }
    }
  }, {
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({ open: true });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      if (!!this.state.errors[e.target.name]) {
        var _setState;

        var errors = Object.assign({}, !!this.state.errors);
        delete errors[e.target.name];
        this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, "errors", errors), _setState));
      } else {
        this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    }
  }, {
    key: "handleToggleChange",
    value: function handleToggleChange(e) {
      this.setState({ private: !this.state.private });
    }
  }, {
    key: "onFileChange",
    value: function onFileChange(e) {
      var file = e.target.files[0];
      if (file && file.type.indexOf("image/") > -1) {
        // only image file
        if (file.size < 2000000) {
          this.setState({
            img_url: file
          });
        } else {
          Materialize.toast("File too large", 5000, "red");
        }
      } else {
        Materialize.toast("Image files only please", 5000, "red");
      }
    }
  }, {
    key: "handleEventSubmit",
    value: function handleEventSubmit(e) {
      e.preventDefault();
      if (this.isValid()) {
        this.setState({
          isLoading: true
        });
        this.props.createEventRequest(this.state);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          editEvent = _state.editEvent,
          title = _state.title,
          description = _state.description,
          endDate = _state.endDate,
          startDate = _state.startDate,
          errors = _state.errors;

      var actions = [_react3.default.createElement(_FlatButton2.default, { label: "Cancel", primary: true, onClick: this.handleClose }), _react3.default.createElement(_FlatButton2.default, {
        label: isLoading ? _react3.default.createElement("img", {
          style: { marginTop: "10px" },
          src: "/image/loader/loading.gif"
        }) : "Add Event",
        primary: true,
        keyboardFocused: true,
        onClick: this.handleEventSubmit
      })];
      return _react3.default.createElement(
        "div",
        null,
        _react3.default.createElement(_RaisedButton2.default, {
          label: "Book this center",
          primary: true,
          onClick: this.handleOpen
        }),
        _react3.default.createElement(
          _Dialog2.default,
          {
            title: editEvent ? "Edit Event" : "Create Event",
            actions: actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.handleClose,
            autoScrollBodyContent: true,
            style: { marginTop: "0px" }
          },
          _react3.default.createElement(
            "div",
            { className: "row", style: { marginTop: "20px" } },
            _react3.default.createElement(
              "form",
              { className: "col s12", id: "add-event-form" },
              _react3.default.createElement(
                "div",
                { className: "row" },
                _react3.default.createElement(
                  "div",
                  { className: "col s6" },
                  _react3.default.createElement(
                    "div",
                    { className: "file-field input-field" },
                    _react3.default.createElement(
                      "div",
                      { className: "btn" },
                      _react3.default.createElement(
                        "span",
                        null,
                        "Upload"
                      ),
                      _react3.default.createElement("input", {
                        type: "file",
                        name: "img_url",
                        accept: "image/jpeg,jpg,png,gif",
                        onChange: this.onFileChange
                      })
                    ),
                    _react3.default.createElement(
                      "div",
                      { className: "file-path-wrapper" },
                      _react3.default.createElement("input", {
                        className: "file-path validate",
                        type: "text",
                        placeholder: "Upload an image here"
                      })
                    )
                  )
                ),
                _react3.default.createElement(
                  "div",
                  { className: "input-field col s6" },
                  _react3.default.createElement(_formInput2.default, {
                    type: "text",
                    fieldId: "event_title",
                    nameField: "title",
                    label: "Title",
                    value: title,
                    error: errors.title || "",
                    onChange: this.handleInputChange
                  })
                )
              ),
              _react3.default.createElement(
                "div",
                { className: "row" },
                _react3.default.createElement(
                  "div",
                  { className: "input-field col s6" },
                  _react3.default.createElement(_DatePicker2.default, {
                    onChange: this.handleChangeStartDate,
                    autoOk: true,
                    floatingLabelText: "Start Date",
                    disableYearSelection: this.state.disableYearSelection
                  }),
                  errors.startDate && _react3.default.createElement(
                    "span",
                    { className: "red-text accent-1" },
                    errors.startDate
                  )
                ),
                _react3.default.createElement(
                  "div",
                  { className: "input-field col s6" },
                  _react3.default.createElement(_DatePicker2.default, {
                    onChange: this.handleChangeEndDate,
                    autoOk: true,
                    floatingLabelText: "End Date",
                    disableYearSelection: this.state.disableYearSelection
                  }),
                  errors.endDate && _react3.default.createElement(
                    "span",
                    { className: "red-text accent-1" },
                    errors.endDate
                  )
                )
              ),
              _react3.default.createElement(
                "div",
                { className: "row" },
                _react3.default.createElement(
                  "div",
                  { className: "input-field col s12" },
                  _react3.default.createElement(
                    "label",
                    { htmlFor: "description" },
                    "Description"
                  ),
                  _react3.default.createElement("textarea", {
                    id: "description",
                    type: "text",
                    name: "description",
                    className: "materialize-textarea validate",
                    required: true,
                    onChange: this.handleInputChange,
                    value: description
                  }),
                  errors.description && _react3.default.createElement(
                    "span",
                    { className: "red-text accent-1" },
                    errors.description
                  )
                )
              ),
              _react3.default.createElement(
                "div",
                { className: "row" },
                _react3.default.createElement(
                  "div",
                  { className: "input-field col s12" },
                  _react3.default.createElement(_Toggle2.default, {
                    label: "Do you want this event to be private?",
                    name: "private",
                    defaultToggled: this.state.private,
                    onToggle: this.handleToggleChange,
                    labelStyle: styles.labelStyle
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EventModal;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeCenter: state.activeCenter,
    event: state.eventReducer,
    actUser: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ createEventRequest: _eventsActions.createEventRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/src/components/modals/centerModalForms/editCenterForm.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/modals/centerModalForms/editCenterForm.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SelectField = __webpack_require__(/*! material-ui/SelectField */ "./node_modules/material-ui/SelectField/index.js");

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ "./node_modules/material-ui/MenuItem/index.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _TextField = __webpack_require__(/*! material-ui/TextField */ "./node_modules/material-ui/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(/*! material-ui/styles/colors */ "./node_modules/material-ui/styles/colors.js");

var _formInput = __webpack_require__(/*! ../../form/formInput */ "./client/src/components/form/formInput.jsx");

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(/*! ../validateInput */ "./client/src/components/modals/validateInput.js");

var _facilities = __webpack_require__(/*! ../../../util/facilities */ "./client/src/util/facilities.js");

var _facilities2 = _interopRequireDefault(_facilities);

var _modalAction = __webpack_require__(/*! ../../../actions/modalAction */ "./client/src/actions/modalAction.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./client/src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EditCenterForm: {
    displayName: 'EditCenterForm'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/editCenterForm.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/editCenterForm.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var styles = {
  underlineStyle: {
    borderColor: 'transparent'
  }
};

/**
 * EditCenterForm Class Component
 * */

var EditCenterForm = _wrapComponent('EditCenterForm')(function (_Component) {
  _inherits(EditCenterForm, _Component);

  /**
   * EditCenterForm Class Constructor
   * @param { object } props
   * */
  function EditCenterForm(props) {
    _classCallCheck(this, EditCenterForm);

    /**
     * @Initialize the component's state.
     * */
    var _this = _possibleConstructorReturn(this, (EditCenterForm.__proto__ || Object.getPrototypeOf(EditCenterForm)).call(this, props));

    _this.state = {
      errors: {},
      editCenter: false,
      isLoading: false,
      title: '',
      img_url: {},
      facilities: [],
      location: '',
      price: '',
      capacity: '',
      description: ''
    };

    _this.handleCenterChange = _this.handleCenterChange.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleCenterSubmit = _this.handleCenterSubmit.bind(_this);
    _this.onFileChange = _this.onFileChange.bind(_this);
    return _this;
  }

  /**
   * componentDidMount Method
   * @Send activeCenter details to updateState method
   * @return { void }
   * */


  _createClass(EditCenterForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateState(this.props.activeCenter);
    }

    /**
     * @Void: Get the image data and set the img_url in the state
     * to the binary data url.
     * @param { object } e
     * @return { void }
     * * */

  }, {
    key: 'onFileChange',
    value: function onFileChange(e) {
      var _this2 = this;

      var file = e.target.files[0];
      if (file && file.type.indexOf('image/') > -1) {
        // only image file
        if (file.size < 2000000) {
          // Must not be more than 2mb
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(file); // read the local file
          reader.onloadend = function () {
            _this2.setState({
              img_url: file
            });
          };
        } else {
          Materialize.toast('File too large', 5000, 'red');
        }
      } else {
        Materialize.toast('Image files only', 5000, 'red');
      }
    }

    /**
     * @Check if edit center is set to true.
     * and get the keys from center object and populate the state
     * with its appropriate values.
     * updateState Method
     * @param { object } props
     * @return { void }
     * */

  }, {
    key: 'updateState',
    value: function updateState(props) {
      if (props.editCenter) {
        var _props$center = props.center,
            id = _props$center.id,
            title = _props$center.title,
            img_url = _props$center.img_url,
            facilities = _props$center.facilities,
            location = _props$center.location,
            price = _props$center.price,
            capacity = _props$center.capacity,
            description = _props$center.description;

        this.setState({
          editCenter: true,
          id: id,
          title: title,
          img_url: img_url,
          facilities: facilities,
          location: location,
          price: price.toString(),
          capacity: capacity.toString(),
          description: description
        });
      }
    }

    /**
     * handleCenterChange Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleCenterChange',
    value: function handleCenterChange(e) {
      if (this.state.errors[e.target.name]) {
        var _setState;

        var errors = Object.assign({}, !!this.state.errors);
        delete errors[e.target.name];
        this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'errors', errors), _setState));
      } else {
        this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    }

    /**
     * isValid Method
     * @return { void }
     * */

  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateCenterInput = (0, _validateInput.validateCenterInput)(this.state),
          errors = _validateCenterInput.errors,
          isValid = _validateCenterInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * handleSelectChange Method
     * @param { object } event
     * @param { string } index
     * @param { array } facilities
     * @return { void }
     * */

  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event, index, facilities) {
      this.setState({ facilities: facilities });
    }

    /**
     * menuItems Method
     * @param { object } facilityes
     * @return { void }
     * */

  }, {
    key: 'menuItems',
    value: function menuItems(facilityes) {
      return (0, _facilities2.default)().map(function (name) {
        return _react3.default.createElement(_MenuItem2.default, {
          key: _shortid2.default.generate(),
          insetChildren: true,
          checked: facilityes && facilityes.indexOf(name) > -1,
          value: name,
          primaryText: name
        });
      });
    }

    /**
     * handleCenterSubmit Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleCenterSubmit',
    value: function handleCenterSubmit(e) {
      e.preventDefault();

      if (this.isValid()) {
        this.setState({
          isLoading: true
        });

        this.props.updateCenterRequest(this.state);
      }
    }

    /**
     * render Method
     * @return { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          editCenter = _state.editCenter,
          errors = _state.errors,
          isLoading = _state.isLoading,
          title = _state.title,
          location = _state.location,
          facilities = _state.facilities,
          price = _state.price,
          capacity = _state.capacity,
          description = _state.description;


      return _react3.default.createElement(
        'form',
        {
          style: { marginTop: '20px' },
          className: 'col s12',
          id: 'edit-center-form',
          onSubmit: this.handleCenterSubmit
        },
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'col s12 m6' },
            _react3.default.createElement(
              'div',
              { className: 'file-field input-field' },
              _react3.default.createElement(
                'div',
                { className: 'btn' },
                _react3.default.createElement(
                  'span',
                  null,
                  'Upload'
                ),
                _react3.default.createElement('input', {
                  type: 'file',
                  name: 'img_url',
                  onChange: this.onFileChange,
                  accept: 'image/jpeg,jpg,png,gif'
                })
              ),
              _react3.default.createElement(
                'div',
                { className: 'file-path-wrapper' },
                _react3.default.createElement('input', {
                  className: 'file-path validate',
                  type: 'text',
                  placeholder: 'Upload an image here'
                })
              )
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react3.default.createElement(_TextField2.default, {
              id: 'text-field-controlled',
              hintText: 'Title',
              value: title,
              name: 'title',
              errorText: errors.title || '',
              underlineStyle: styles.underlineStyle,
              underlineFocusStyle: styles.underlineStyle,
              onChange: this.handleCenterChange
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react3.default.createElement(
              _SelectField2.default,
              {
                multiple: true,
                hintText: 'Select Facilities',
                value: facilities,
                onChange: this.handleSelectChange
              },
              this.menuItems(facilities)
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react3.default.createElement(_TextField2.default, {
              id: 'text-field-controlled',
              hintText: 'location',
              value: location,
              name: 'location',
              errorText: errors.location || '',
              underlineStyle: styles.underlineStyle,
              underlineFocusStyle: styles.underlineStyle,
              onChange: this.handleCenterChange
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react3.default.createElement(_TextField2.default, {
              id: 'text-field-controlled',
              hintText: 'Price',
              value: price,
              name: 'price',
              type: 'number',
              errorText: errors.price || '',
              underlineStyle: styles.underlineStyle,
              underlineFocusStyle: styles.underlineStyle,
              onChange: this.handleCenterChange
            })
          ),
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react3.default.createElement(_TextField2.default, {
              id: 'text-field-controlled',
              hintText: 'Capacity',
              value: capacity,
              name: 'capacity',
              type: 'number',
              errorText: errors.capacity || '',
              underlineStyle: styles.underlineStyle,
              underlineFocusStyle: styles.underlineStyle,
              onChange: this.handleCenterChange
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react3.default.createElement(_TextField2.default, {
              hintText: 'Description',
              value: description,
              name: 'description',
              errorText: errors.description || '',
              multiLine: true,
              fullWidth: true,
              onChange: this.handleCenterChange,
              underlineStyle: styles.underlineStyle,
              underlineFocusStyle: styles.underlineStyle,
              rows: 2,
              rowsMax: 5
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react3.default.createElement(
              'button',
              {
                type: 'submit',
                id: 'submitCenterForm',
                name: 'action',
                className: 'btn col s12 white-text gradient__bg' + 'btn-register waves-effect waves-light',
                disabled: isLoading ? 'disabled' : ''
              },
              !isLoading ? 'Save Changes' : _react3.default.createElement('img', {
                style: { marginTop: '10px' },
                src: '/image/loader/loading.gif',
                alt: 'save-changes-loader'
              })
            )
          )
        )
      );
    }
  }]);

  return EditCenterForm;
}(_react2.Component));

EditCenterForm.propTypes = {
  history: _propTypes.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeCenter: state.activeCenter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updateCenterRequest: _modalAction.updateCenterRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditCenterForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=hot-update.js.map