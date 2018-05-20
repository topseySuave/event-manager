webpackHotUpdate(0,{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Toggle = __webpack_require__(650);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _Toggle2.default;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _propTypes = __webpack_require__(4);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactRedux = __webpack_require__(22);

var _classnames = __webpack_require__(187);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconMenu = __webpack_require__(115);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _svgIcons = __webpack_require__(687);

var _eventsActions = __webpack_require__(52);

var _editEventModal = __webpack_require__(304);

var _editEventModal2 = _interopRequireDefault(_editEventModal);

var _actions = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EventCard: {
    displayName: "EventCard"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/eventsCard/eventCard.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/eventsCard/eventCard.jsx",
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
   * EventCard Class Component
   * */
var EventCard = _wrapComponent("EventCard")(function (_Component) {
  _inherits(EventCard, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function EventCard(props) {
    _classCallCheck(this, EventCard);

    var _this = _possibleConstructorReturn(this, (EventCard.__proto__ || Object.getPrototypeOf(EventCard)).call(this, props));

    _this.handleAlertOpen = function () {
      _this.setState({ openAlert: true });
    };

    _this.handleAlertClose = function () {
      _this.setState({ openAlert: false });
    };

    _this.handleEditOpen = function () {
      _this.props.editEventRequestAction(_this.state.event);
      $("#add_event_modal").modal("open");
    };

    _this.state = {
      openAlert: false,
      event: {},
      location: "",
      userId: ""
    };
    return _this;
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */


  _createClass(EventCard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      $(".modal").modal();
      $(".tooltipped").tooltip();
    }

    /**
     * componentDidMount method
     * @returns { void }
     * */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        event: this.props.event
      });
    }

    /**
     * handleAlertOpen method
     * @returns { void }
     * */


    /**
     * handleAlertClose method
     * @returns { void }
     * */


    /**
     * handleEditOpen method
     * @returns { void }
     * */

  }, {
    key: "handleDelete",


    /**
     * handleDelete method
     * @returns { void }
     * */
    value: function handleDelete(id) {
      var _this2 = this;

      this.props.deleteEventRequest(id).then(function (data) {
        if (data.type === _actions.REMOVE_EVENT) {
          _this2.handleAlertClose();
        }
      });
    }

    /**
     * showMenu method
     * @returns { Component }
     * */

  }, {
    key: "showMenu",
    value: function showMenu() {
      var _this3 = this;

      if (this.props.userState.isAuthenticated) {
        return _react3.default.createElement(
          _IconMenu2.default,
          {
            className: "right-align",
            iconButtonElement: _react3.default.createElement(
              _IconButton2.default,
              null,
              _react3.default.createElement(_moreVert2.default, null)
            ),
            anchorOrigin: { horizontal: "left", vertical: "top" },
            targetOrigin: { horizontal: "left", vertical: "top" }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Edit",
            leftIcon: _react3.default.createElement(_svgIcons.EditorModeEdit, null),
            onClick: function onClick() {
              return _this3.handleEditOpen();
            }
          }),
          _react3.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
              return _this3.handleAlertOpen();
            },
            primaryText: "Delete",
            style: { color: "red" },
            leftIcon: _react3.default.createElement(_svgIcons.ActionDelete, null)
          })
        );
      }
    }

    /**
     * showStatusBars method
     * @returns { Component }
     * */

  }, {
    key: "showStatusBars",
    value: function showStatusBars(status, statusColor) {
      var userState = this.props.userState;
      if (userState.isAuthenticated && userState.user.id === this.state.event.userId || userState.user.role) {
        return _react3.default.createElement(
          "span",
          {
            className: (0, _classnames2.default)("event-status", "darken-3", "white-text", statusColor)
          },
          status
        );
      }
    }

    /**
     * showAlertModal method
     * @returns { Component }
     * */

  }, {
    key: "showAlertModal",
    value: function showAlertModal(id) {
      var _this4 = this;

      var actions = [_react3.default.createElement(_FlatButton2.default, {
        label: "Yes",
        primary: true,
        onClick: function onClick() {
          return _this4.handleDelete(id);
        }
      }), _react3.default.createElement(_FlatButton2.default, {
        label: "No",
        primary: true,
        onClick: function onClick() {
          return _this4.handleAlertClose();
        }
      })];

      return _react3.default.createElement(
        _Dialog2.default,
        {
          actions: actions,
          modal: false,
          open: this.state.openAlert,
          onRequestClose: this.handleAlertClose
        },
        "Are you sure you want to delete this event?"
      );
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: "render",
    value: function render() {
      var shareColor = ["red", "blue", "yellow", "green"],
          floatBtnColor = void 0;
      floatBtnColor = shareColor[Math.floor(Math.random() * shareColor.length)];

      var _state$event = this.state.event,
          id = _state$event.id,
          title = _state$event.title,
          img_url = _state$event.img_url,
          description = _state$event.description,
          startDate = _state$event.startDate,
          endDate = _state$event.endDate,
          userId = _state$event.userId,
          center = _state$event.center,
          status = _state$event.status;


      startDate = new Date(startDate).toDateString();
      endDate = new Date(endDate).toDateString();

      var displayDate = startDate === endDate ? startDate : startDate + " - " + endDate;
      var statusColor = status === "pending" ? shareColor[2] : status === "rejected" ? shareColor[0] : shareColor[3];

      return _react3.default.createElement(
        "div",
        null,
        this.showAlertModal(id),
        _react3.default.createElement(
          "div",
          { className: "card", "data-id": _shortid2.default.generate(id) },
          _react3.default.createElement(
            "div",
            { className: "card-image" },
            this.showStatusBars(status, statusColor),
            img_url ? _react3.default.createElement("img", { src: img_url, alt: title }) : _react3.default.createElement("img", {
              src: "http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png",
              alt: title
            }),
            _react3.default.createElement(
              "span",
              {
                className: "card-title bold",
                style: {
                  right: "0",
                  backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))"
                }
              },
              title
            ),
            _react3.default.createElement(
              "a",
              {
                className: (0, _classnames2.default)("btn-floating", "activator", "halfway-fab", "waves-effect", "waves-light", "tooltipped", floatBtnColor),
                "data-position": "bottom",
                "data-tooltip": "share"
              },
              _react3.default.createElement(
                "i",
                { className: "material-icons" },
                "dehaze"
              )
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "card-content" },
            _react3.default.createElement(
              "p",
              { className: "small__duration" },
              _react3.default.createElement(
                "i",
                { className: "material-icons f15" },
                "schedule"
              ),
              displayDate
            ),
            _react3.default.createElement(
              "div",
              null,
              _react3.default.createElement(
                "i",
                { className: "material-icons f15" },
                "location_on "
              ),
              " ",
              center ? center.location : "sorry can't get location at this time",
              (this.props.userState.user.id === userId || this.props.userState.user.role) && this.showMenu(id)
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "card-reveal" },
            _react3.default.createElement(
              "span",
              { className: "card-title grey-text text-darken-4" },
              _react3.default.createElement(
                "a",
                { className: "bold" },
                title
              ),
              _react3.default.createElement(
                "i",
                { className: "material-icons right" },
                "close"
              )
            ),
            _react3.default.createElement(
              "p",
              null,
              description
            ),
            _react3.default.createElement(
              "small",
              null,
              _react3.default.createElement(
                "i",
                { className: "material-icons f15" },
                "location_on"
              ),
              " ",
              center ? center.location : ""
            )
          )
        )
      );
    }
  }]);

  return EventCard;
}(_react2.Component));

EventCard.propTypes = {
  event: _propTypes.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userState: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    deleteEventRequest: _eventsActions.deleteEventRequest,
    editEventRequestAction: _eventsActions.editEventRequestAction
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventCard);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEventInput = validateEventInput;
exports.validateCenterInput = validateCenterInput;

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function validateEventInput(data) {
  var errors = {};

  if ((0, _isEmpty2.default)(data.title)) {
    errors.title = "This field is required";
  }

  if (new Date(data.endDate) < new Date(data.startDate)) {
    errors.endDate = "End Date should be after Start Date";
  }
  if ((0, _isEmpty2.default)(data.description)) {
    errors.description = "This field is required";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
} /* eslint-disable */
function validateCenterInput(data) {
  var errors = {};

  if ((0, _isEmpty2.default)(data.title)) {
    errors.title = "Title field is required";
  }

  if ((0, _isEmpty2.default)(data.location)) {
    errors.location = "Location field is required";
  }

  if ((0, _isEmpty2.default)(data.description)) {
    errors.description = "Description field is required";
  }

  if (data.price < 100) {
    errors.price = "Price should be more than 100";
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FloatingActionButton: {
    displayName: 'FloatingActionButton'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/floatingActionButton/FloatingActionButton.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/floatingActionButton/FloatingActionButton.jsx',
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
   * FloatingActionButton Class Component
   * */
var FloatingActionButton = _wrapComponent('FloatingActionButton')(function (_Component) {
  _inherits(FloatingActionButton, _Component);

  function FloatingActionButton() {
    _classCallCheck(this, FloatingActionButton);

    return _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).apply(this, arguments));
  }

  _createClass(FloatingActionButton, [{
    key: 'componentWillMount',

    /**
     * componentWillMount method
     * @returns { void }
     * */
    value: function componentWillMount() {
      $('.modal').modal();
    }

    /**
     * addCenterButton method
     * @returns { void }
     * */

  }, {
    key: 'addCenterButton',
    value: function addCenterButton() {
      return _react3.default.createElement(
        'a',
        {
          href: '#edit_center_modal',
          className: 'tooltipped modal-trigger btn-large btn-floating pulse green lighten-1',
          'data-position': 'top',
          'data-tooltip': 'Add Center'
        },
        _react3.default.createElement(
          'i',
          { className: 'material-icons' },
          'add'
        )
      );
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      if (this.props.activeState.isAuthenticated) {
        var userObj = this.props.activeState.user;
        var addCenterButton = userObj.role ? this.addCenterButton() : '';

        return _react3.default.createElement(
          'div',
          { className: 'fixed-action-btn wow zoomIn' },
          addCenterButton
        );
      }
      return '';
    }
  }]);

  return FloatingActionButton;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FloatingActionButton);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Footer: {
    displayName: 'Footer'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/footer/footer.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/footer/footer.jsx',
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
 * CallToAction Class Component
 * */
var Footer = _wrapComponent('Footer')(function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',

    /**
     * render Method
     * @returns { Component }
     * */
    value: function render() {
      var year = new Date();
      return _react3.default.createElement(
        'div',
        { className: 'footer' },
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: 'center-align' },
            _react3.default.createElement(
              'p',
              null,
              '\xA9 ',
              year.getFullYear(),
              ', All rights reserved.',
              _react3.default.createElement(
                _reactRouterDom.Link,
                { to: '/', href: '/' },
                ' ',
                'Boots Events Manager'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.Component));

exports.default = Footer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editEventModal = __webpack_require__(304);

var _editEventModal2 = _interopRequireDefault(_editEventModal);

var _CenterModal = __webpack_require__(1651);

var _CenterModal2 = _interopRequireDefault(_CenterModal);

var _searchModal = __webpack_require__(1658);

var _searchModal2 = _interopRequireDefault(_searchModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Modals: {
    displayName: 'Modals'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/index.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/index.jsx',
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
 * Modals Class Component
 * */
var Modals = _wrapComponent('Modals')(function (_Component) {
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
      return _react3.default.createElement(
        'div',
        { id: 'add_event_modal', className: 'modal modal-fixed-footer' },
        _react3.default.createElement(
          'div',
          { className: 'modal-content' },
          _react3.default.createElement(
            'h4',
            null,
            _react3.default.createElement(
              'span',
              null,
              'Edit'
            ),
            ' Event'
          ),
          _react3.default.createElement(_editEventModal2.default, null)
        ),
        _react3.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react3.default.createElement(
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
      return _react3.default.createElement(
        'div',
        null,
        this.renderModal(),
        _react3.default.createElement(_CenterModal2.default, null),
        _react3.default.createElement(_searchModal2.default, null)
      );
    }
  }]);

  return Modals;
}(_react2.Component));

exports.default = Modals;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 130:
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Helpers Class
 * */
var Helpers = function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: 'equals',

    /**
     * equals Method
     * @param { string } val1
     * @param { string } val2
     * @returns { boolean }
     * */
    value: function equals(val1, val2) {
      return val1 === val2;
    }

    /**
     * sanitizeString Method
     * To replace spaces with "-" to enable URL friendly string
     * @param { string } str
     * @returns { string }
     * */

  }, {
    key: 'sanitizeString',
    value: function sanitizeString(str) {
      return str.toLowerCase().replace(/[\. ,:-]+/g, '-');
    }

    /**
     * countDayDifference method
     * To count days from start Date and end Date
     * @param { string } startDate
     * @param { string } endDate
     * @return { string }
     * */

  }, {
    key: 'countDayDifference',
    value: function countDayDifference(startDate, endDate) {
      var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
      var firstDate = new Date(startDate);
      var secondDate = new Date(endDate);

      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
      return diffDays;
    }
  }]);

  return Helpers;
}();

exports.default = Helpers;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(26);

var _IconMenu = __webpack_require__(115);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menu = __webpack_require__(91);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(119);

var _search2 = _interopRequireDefault(_search);

var _group = __webpack_require__(303);

var _group2 = _interopRequireDefault(_group);

var _close = __webpack_require__(185);

var _close2 = _interopRequireDefault(_close);

var _accountCircle = __webpack_require__(121);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(183);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(184);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _AppBar = __webpack_require__(287);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toggle = __webpack_require__(120);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _colors = __webpack_require__(46);

var _List = __webpack_require__(288);

var _List2 = _interopRequireDefault(_List);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FixedNav: {
    displayName: "FixedNav"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/fixedNav.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/fixedNav.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var appBarStyle = {
  position: "fixed",
  backgroundImage: "linear-gradient(to left, #4884b3, #90ec92)"
};
var flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0
};

/**
 * FixedNav Class Component
 * */

var FixedNav = _wrapComponent("FixedNav")(function (_Component) {
  _inherits(FixedNav, _Component);

  /**
   * Class Constructor Method
   * @param { object } props
   * @returns { void }
   * */
  function FixedNav(props) {
    _classCallCheck(this, FixedNav);

    var _this = _possibleConstructorReturn(this, (FixedNav.__proto__ || Object.getPrototypeOf(FixedNav)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = { open: false };
    return _this;
  }

  /**
   * handleToggle Method
   * @returns { void }
   * */


  /**
   * handleClose Method
   * @returns { void }
   * */


  _createClass(FixedNav, [{
    key: "componentDidMount",


    /**
     * componentDidMount Method
     * @returns { void }
     * */
    value: function componentDidMount() {
      $(".modal").modal();
    }

    /**
     * showModal Method
     * @returns { void }
     * */

  }, {
    key: "showModal",
    value: function showModal() {
      $("#search__modal").modal("open");
    }

    /**
     * renderSidenav Method
     * @returns { component }
     * */

  }, {
    key: "renderSidenav",
    value: function renderSidenav() {
      var _this2 = this;

      return _react3.default.createElement(
        _react2.Fragment,
        null,
        _react3.default.createElement(
          _Drawer2.default,
          {
            docked: false,
            width: 200,
            open: this.state.open,
            onRequestChange: function onRequestChange(open) {
              return _this2.setState({ open: open });
            }
          },
          _react3.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
              return _this2.showModal();
            },
            leftIcon: _react3.default.createElement(_search2.default, null),
            primaryText: "Search"
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + (this.props.activeState.user.lastName || "Guest")
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          !this.props.activeState.isAuthenticated ? this.showAuthenticationLinks() : _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        ),
        _react3.default.createElement(_FlatButton2.default, {
          className: "right hide-on-med-and-up",
          style: { margin: "10px", color: "#FFFFFF" },
          onClick: this.handleToggle,
          icon: _react3.default.createElement(_menu2.default, null)
        })
      );
    }

    /**
     * showAuthenticationLinks Method
     * @returns { component }
     * */

  }, {
    key: "showAuthenticationLinks",
    value: function showAuthenticationLinks() {
      //  Show Sign-in and Sign-up
      //  links only if user isn't signed in
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          _react2.Fragment,
          null,
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign in",
            style: { color: '#FFFFFF' },
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signin" })
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign up",
            style: { color: '#FFFFFF' },
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signup" })
          })
        );
      }

      return _react3.default.createElement(
        _react2.Fragment,
        null,
        _react3.default.createElement(
          _IconMenu2.default,
          {
            iconButtonElement: _react3.default.createElement(
              _IconButton2.default,
              null,
              _react3.default.createElement(_accountCircle2.default, { color: "white" })
            ),
            anchorOrigin: { horizontal: "left", vertical: "top" },
            targetOrigin: { horizontal: "left", vertical: "top" }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + this.props.activeState.user.lastName
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        )
      );
    }

    /**
     * showMenuItems Method
     * @returns { component }
     * */

  }, {
    key: "showMenuItems",
    value: function showMenuItems() {
      var _this3 = this;

      return _react3.default.createElement(
        _react2.Fragment,
        null,
        _react3.default.createElement(
          _List2.default,
          { style: flexContainer },
          _react3.default.createElement(
            _IconButton2.default,
            {
              onClick: function onClick() {
                return _this3.showModal();
              },
              id: "search__view",
              tooltip: "search"
            },
            _react3.default.createElement(_search2.default, { color: "#FFFFFF" })
          ),
          _react3.default.createElement(_List.ListItem, {
            style: { color: "#FFFFFF" },
            primaryText: "list of centers",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/centers" })
          }),
          this.showAuthenticationLinks()
        )
      );
    }

    /**
     * render Method
     * @returns { component }
     * */

  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(_AppBar2.default, {
        style: appBarStyle,
        title: _react3.default.createElement(
          _reactRouterDom.Link,
          {
            className: "brand-logo",
            style: { color: "#FFFFFF" },
            to: "/",
            href: "/"
          },
          _react3.default.createElement("img", {
            style: {
              width: "250px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "60%"
            },
            src: "/image/logo2.png",
            alt: "brand-logo"
          })
        ),
        iconElementRight: this.showMenuItems(),
        showMenuIconButton: false
      });
    }
  }]);

  return FixedNav;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutRequest: _authActions.signOutRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { matchDispatchToProps: matchDispatchToProps })(FixedNav);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CallToAction: {
    displayName: 'CallToAction'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/footer/callToAction.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/footer/callToAction.jsx',
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
 * CallToAction Class Component
 * */
var CallToAction = _wrapComponent('CallToAction')(function (_Component) {
  _inherits(CallToAction, _Component);

  function CallToAction() {
    _classCallCheck(this, CallToAction);

    return _possibleConstructorReturn(this, (CallToAction.__proto__ || Object.getPrototypeOf(CallToAction)).apply(this, arguments));
  }

  _createClass(CallToAction, [{
    key: 'componentDidMount',

    /**
     * componentDidMount Method
     * @returns { void }
     * */
    value: function componentDidMount() {
      $('.parallax').parallax();
    }

    /**
     * render Method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'parallax-container' },
        _react3.default.createElement(
          'div',
          { className: 'parallax' },
          _react3.default.createElement('img', { src: 'image/5.jpg', alt: 'parallax-img' })
        ),
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: 'center-align' },
            _react3.default.createElement(
              'div',
              { className: 'row' },
              _react3.default.createElement(
                'div',
                { className: 'col s12' },
                _react3.default.createElement(
                  'h4',
                  null,
                  'Do you want to Manage your Own Event?'
                ),
                _react3.default.createElement(
                  'h5',
                  null,
                  'View All Centers'
                ),
                _react3.default.createElement('br', null),
                _react3.default.createElement(
                  _reactRouterDom.Link,
                  {
                    to: 'centers',
                    className: 'btn waves-effect red darken-1',
                    href: 'centers'
                  },
                  'Centers'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CallToAction;
}(_react2.Component));

exports.default = CallToAction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addCenterForm = __webpack_require__(1652);

var _addCenterForm2 = _interopRequireDefault(_addCenterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CenterModal: {
    displayName: 'CenterModal'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/CenterModal.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/CenterModal.jsx',
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
 * CenterModal Class Component
 * */
var CenterModal = _wrapComponent('CenterModal')(function (_Component) {
  _inherits(CenterModal, _Component);

  function CenterModal() {
    _classCallCheck(this, CenterModal);

    return _possibleConstructorReturn(this, (CenterModal.__proto__ || Object.getPrototypeOf(CenterModal)).apply(this, arguments));
  }

  _createClass(CenterModal, [{
    key: 'render',

    /**
     * render Method Component
     * @return { component }
     * */
    value: function render() {
      return _react3.default.createElement(
        'div',
        { id: 'edit_center_modal', className: 'modal modal-fixed-footer' },
        _react3.default.createElement(
          'div',
          { className: 'modal-content' },
          _react3.default.createElement(
            'h4',
            null,
            _react3.default.createElement(
              'span',
              null,
              'Create'
            ),
            ' Center'
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(_addCenterForm2.default, null)
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react3.default.createElement(
            'a',
            { className: 'modal-action modal-close waves-effect btn-flat' },
            'Cancel'
          )
        )
      );
    }
  }]);

  return CenterModal;
}(_react2.Component));

exports.default = CenterModal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _eventCard = __webpack_require__(124);

var _eventCard2 = _interopRequireDefault(_eventCard);

var _helpers = __webpack_require__(130);

var _helpers2 = _interopRequireDefault(_helpers);

var _searchAction = __webpack_require__(309);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SearchModal: {
    displayName: 'SearchModal'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/searchModal.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/searchModal.jsx',
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
 * SearchModal Class Component
 * */
var SearchModal = _wrapComponent('SearchModal')(function (_Component) {
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
   * componentWillReceiveProps Life cycle Method
   * @param { object } newProps
   * @return { object }
   * */


  _createClass(SearchModal, [{
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
      var titleString = { search: e.target.value };
      this.props.filterCenterTitle(titleString);
      this.props.filterEventTitle(titleString);
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
          return _react3.default.createElement(_eventCard2.default, { key: _shortid2.default.generate(), event: event });
        });
      }
      return _react3.default.createElement(
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
          return _react3.default.createElement(
            _reactRouterDom.Link,
            { key: _shortid2.default.generate(), to: to, href: to },
            _react3.default.createElement(
              'div',
              { className: 'card' },
              !!center.img_url && _react3.default.createElement(
                'div',
                { className: 'card-image' },
                _react3.default.createElement('img', { src: center.img_url, alt: center.title })
              ),
              _react3.default.createElement(
                'div',
                { className: 'card-content black-text' },
                _react3.default.createElement(
                  'p',
                  { className: 'f__size' },
                  center.title
                ),
                _react3.default.createElement(
                  'p',
                  null,
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons f15' },
                    'location_on'
                  ),
                  center.location
                )
              )
            )
          );
        });
      }
      return _react3.default.createElement(
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
      return _react3.default.createElement(
        'div',
        { id: 'search__modal', className: 'modal' },
        _react3.default.createElement(
          'div',
          { className: 'search__nav z-depth-0' },
          _react3.default.createElement(
            'div',
            { className: 'container' },
            _react3.default.createElement(
              'div',
              { className: 'row' },
              _react3.default.createElement(
                'div',
                { className: 'col s1' },
                _react3.default.createElement(
                  'a',
                  { className: 'btn btn-flat white waves-effect search__back_btn' },
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons search_arrow_back_btn' },
                    'arrow_back'
                  )
                )
              ),
              _react3.default.createElement(
                'div',
                { className: 'col s11' },
                _react3.default.createElement(
                  'nav',
                  null,
                  _react3.default.createElement(
                    'div',
                    { className: 'nav-wrapper' },
                    _react3.default.createElement(
                      'form',
                      { method: 'post' },
                      _react3.default.createElement(
                        'div',
                        { className: 'input-field no-margin' },
                        _react3.default.createElement('input', {
                          className: 'autocomplete',
                          id: 'autocomplete-input',
                          type: 'search',
                          name: 'searchInput',
                          onChange: this.handleSearchInput,
                          placeholder: 'Search by Name and Location',
                          required: true
                        }),
                        _react3.default.createElement(
                          'label',
                          { className: 'label-icon', htmlFor: 'search' },
                          _react3.default.createElement(
                            'i',
                            { className: 'material-icons search__label' },
                            'search'
                          )
                        ),
                        _react3.default.createElement(
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
        _react3.default.createElement(
          'div',
          { className: 'search__results' },
          _react3.default.createElement(
            'h5',
            null,
            'Center Results'
          ),
          _react3.default.createElement(
            'div',
            { className: 'row cards-container' },
            this.renderCenterCard()
          ),
          _react3.default.createElement('div', { className: 'divider' }),
          _react3.default.createElement(
            'h5',
            null,
            'Events Results'
          ),
          _react3.default.createElement(
            'div',
            { className: 'row cards-container' },
            this.renderEventsCard()
          )
        )
      );
    }
  }]);

  return SearchModal;
}(_react2.Component));

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _AuthHeader = __webpack_require__(313);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _authFooter = __webpack_require__(314);

var _authFooter2 = _interopRequireDefault(_authFooter);

var _signUpForm = __webpack_require__(1666);

var _signUpForm2 = _interopRequireDefault(_signUpForm);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SignUp: {
    displayName: 'SignUp'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signup/signup.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signup/signup.jsx',
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
   * SignUp Class Component
   * */
var SignUp = _wrapComponent('SignUp')(function (_Component) {
  _inherits(SignUp, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.state = {
      isAuthenticated: false
    };
    return _this;
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */


  _createClass(SignUp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.activeState.isAuthenticated) {
        this.setState({ isAuthenticated: true });
      }
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      if (this.state.isAuthenticated) {
        return _react3.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      return _react3.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Sign up | Boots Events Manager' },
        _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(_AuthHeader2.default, null),
          _react3.default.createElement(
            'div',
            { className: 'signin__card_holdr wow fadeInUp' },
            _react3.default.createElement(
              'div',
              { className: 'container' },
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(_signUpForm2.default, { userSignupRequest: _authActions.userSignupRequest })
              )
            )
          ),
          _react3.default.createElement('div', { className: 'empty' }),
          _react3.default.createElement(_authFooter2.default, null)
        )
      );
    }
  }]);

  return SignUp;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    userSignupRequest: _authActions.userSignupRequest
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignUp);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _propTypes = __webpack_require__(4);

var _classnames = __webpack_require__(187);

var _classnames2 = _interopRequireDefault(_classnames);

var _validateInput = __webpack_require__(315);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SignUpForm: {
    displayName: 'SignUpForm'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signup/signUpForm.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signup/signUpForm.jsx',
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
 * SignUpForm Class Component
 * */
var SignUpForm = _wrapComponent('SignUpForm')(function (_Component) {
  _inherits(SignUpForm, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function SignUpForm(props) {
    _classCallCheck(this, SignUpForm);

    var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      resMessage: '',
      isLoading: false,
      redirect: false,
      exists: false,
      signedUp: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  /**
   * handleChange method
   * @param { object } e
   * @returns { void }
   * */


  _createClass(SignUpForm, [{
    key: 'handleChange',
    value: function handleChange(e) {
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
     * isValid method
     * @returns { object }
     * */

  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateSignUpInput = (0, _validateInput.validateSignUpInput)(this.state),
          errors = _validateSignUpInput.errors,
          isValid = _validateSignUpInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * handleSubmit method
     * @param { object } e
     * @returns { void }
     * */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.isValid()) {
        this.setState({
          errors: {},
          isLoading: true
        });

        this.props.userSignupRequest(this.state).then(function (_ref) {
          var data = _ref.data;

          _this2.setState({
            resMessage: data.message,
            interval: 5,
            isLoading: false,
            signedUp: true
          });
          setInterval(function () {
            _this2.setState({ interval: _this2.state.interval - 1 });
            if (_this2.state.interval === 0) {
              _this2.setState({ redirect: true });
            }
          }, 1000);
        }).catch(function (_ref2) {
          var response = _ref2.response;

          _this2.setState({
            serverRes: response.data,
            error: response.data.message,
            isLoading: false,
            exists: true,
            signedUp: false
          });
          Materialize.toast(_this2.state.error, 5000, 'red');
        });
      }
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          errors = _state.errors,
          redirect = _state.redirect,
          exists = _state.exists,
          interval = _state.interval;

      var to = '/signin';
      if (redirect) {
        return _react3.default.createElement(_reactRouterDom.Redirect, { to: to });
      }

      var loading = (0, _classnames2.default)('row', { isLoading: isLoading });
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          { className: (0, _classnames2.default)('col', 's12', { hidden: !this.state.signedUp }) },
          _react3.default.createElement(
            'div',
            { className: 'card-panel teal lighten-3' },
            _react3.default.createElement(
              'h3',
              { className: 'white-text', style: { marginTop: '0px' } },
              'You\'re Welcome!!!'
            ),
            _react3.default.createElement(
              'span',
              { className: 'white-text' },
              this.state.resMessage
            ),
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              'span',
              { className: 'white-text' },
              'Redirecting to signin in ',
              interval,
              ' seconds'
            )
          )
        ),
        _react3.default.createElement(
          'form',
          {
            className: (0, _classnames2.default)('col s12', { hidden: this.state.signedUp }),
            id: 'reg-form',
            onSubmit: this.handleSubmit
          },
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'first_name',
              nameField: 'firstName',
              value: this.state.firstName,
              error: errors.firstName || '',
              type: 'text',
              onChange: this.handleChange,
              label: 'First Name'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'last_name',
              nameField: 'lastName',
              value: this.state.lastName,
              error: errors.lastName || '',
              type: 'text',
              onChange: this.handleChange,
              label: 'Last Name'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'email',
              nameField: 'email',
              value: this.state.email,
              error: exists ? errors.message : errors.email || '',
              type: 'email',
              onChange: this.handleChange,
              label: 'Email'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'password',
              nameField: 'password',
              value: this.state.password,
              error: errors.password || '',
              type: 'password',
              onChange: this.handleChange,
              label: 'Password'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'confirm_password',
              nameField: 'confirmPassword',
              value: this.state.confirmPassword,
              error: errors.confirmPassword || '',
              type: 'password',
              onChange: this.handleChange,
              label: 'Confirm Password'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12 center-align' },
              _react3.default.createElement(
                'button',
                {
                  className: 'col s12 white-text btn waves-effect gradient__bg waves-light',
                  type: 'submit',
                  name: 'action',
                  disabled: isLoading ? 'disabled' : ''
                },
                !isLoading ? 'Register' : _react3.default.createElement('img', { src: '/image/loader/loading.gif', alt: 'submin-loader' })
              )
            ),
            _react3.default.createElement(
              'p',
              { className: 'center-align' },
              _react3.default.createElement(
                'span',
                null,
                'Already signed Up? Login ',
                _react3.default.createElement(
                  _reactRouterDom.Link,
                  { to: 'signin', href: 'signin' },
                  'here'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SignUpForm;
}(_react2.Component));

SignUpForm.propTypes = {
  userSignupRequest: _propTypes.PropTypes.func.isRequired
};

exports.default = SignUpForm;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _AuthHeader = __webpack_require__(313);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _authFooter = __webpack_require__(314);

var _authFooter2 = _interopRequireDefault(_authFooter);

var _signInForm = __webpack_require__(1671);

var _signInForm2 = _interopRequireDefault(_signInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SignIn: {
    displayName: 'SignIn'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signin/signin.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signin/signin.jsx',
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
   * SignIn Class Component
   * */
var SignIn = _wrapComponent('SignIn')(function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    _classCallCheck(this, SignIn);

    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).apply(this, arguments));
  }

  _createClass(SignIn, [{
    key: 'render',

    /**
     * render method
     * @returns { Component }
     * @memberof SignIn
     * */
    value: function render() {
      return _react3.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Sign In | Boots Events Manager' },
        _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(_AuthHeader2.default, null),
          _react3.default.createElement(
            'div',
            { className: 'signin__card_holdr wow fadeInUp' },
            _react3.default.createElement(
              'div',
              { className: 'container' },
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(_signInForm2.default, null)
              )
            )
          ),
          _react3.default.createElement('div', { className: 'empty' }),
          _react3.default.createElement(_authFooter2.default, null)
        )
      );
    }
  }]);

  return SignIn;
}(_react2.Component));

exports.default = SignIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _propTypes = __webpack_require__(4);

var _classnames = __webpack_require__(187);

var _classnames2 = _interopRequireDefault(_classnames);

var _validateInput = __webpack_require__(315);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SignInForm: {
    displayName: 'SignInForm'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signin/signInForm.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signin/signInForm.jsx',
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
   * SignIn Class Component
   * */
var SignInForm = _wrapComponent('SignInForm')(function (_React$Component) {
  _inherits(SignInForm, _React$Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function SignInForm(props) {
    _classCallCheck(this, SignInForm);

    var _this = _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      errors: {},
      errored: false,
      isLoading: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  /**
   * handleChange method
   * @param { object } e
   * @returns { void }
   * */


  _createClass(SignInForm, [{
    key: 'handleChange',
    value: function handleChange(e) {
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
     * isValid method
     * @returns { object }
     * */

  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateSignInInput = (0, _validateInput.validateSignInInput)(this.state),
          errors = _validateSignInInput.errors,
          isValid = _validateSignInInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * handleSubmit method
     * @returns { object }
     * @param { object } e
     * */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignInRequest(this.state).then(function (res) {
          if (res) {
            _this2.setState({
              isLoading: false
            });
          } else {
            // set error message to message from server
            _this2.setState({
              isLoading: false,
              errored: true,
              resMessage: 'Wrong email or password'
            });
          }
        }).catch(function () {
          // set error message to message from server
          _this2.setState({
            isLoading: false,
            errored: true,
            resMessage: 'Wrong email or password'
          });
        });
      }
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          errors = _state.errors;

      var loading = (0, _classnames2.default)('row', { isLoading: isLoading });

      if (this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(_reactRouterDom.Redirect, { to: '/my-events' });
      }

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          { style: { marginBottom: '20px' }, className: (0, _classnames2.default)('col', 's12', { hidden: !this.state.errored }) },
          _react3.default.createElement(
            'div',
            { className: 'card-panel red lighten-3' },
            _react3.default.createElement(
              'span',
              { className: 'white-text' },
              this.state.resMessage
            )
          )
        ),
        _react3.default.createElement(
          'form',
          { className: 'col s12', id: 'signin-form', onSubmit: this.handleSubmit },
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12' },
              _react3.default.createElement(_formInput2.default, {
                fieldId: 'email',
                nameField: 'email',
                value: this.state.email,
                error: errors.email || '',
                type: 'email',
                onChange: this.handleChange,
                label: 'Email'
              })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: loading },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12' },
              _react3.default.createElement(_formInput2.default, {
                fieldId: 'password',
                nameField: 'password',
                value: this.state.password,
                error: errors.password || '',
                type: 'password',
                onChange: this.handleChange,
                label: 'Password'
              })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12 center-align' },
              _react3.default.createElement(
                'button',
                {
                  className: 'btn col s12 white-text gradient__bg btn-register waves-effect waves-light',
                  type: 'submit',
                  name: 'action',
                  disabled: isLoading ? 'disabled' : ''
                },
                !isLoading ? 'Sign In' : _react3.default.createElement('img', { style: { marginTop: '10px' }, src: '/image/loader/loading.gif', alt: 'submit-loader' })
              )
            ),
            _react3.default.createElement(
              'p',
              { className: 'center-align' },
              _react3.default.createElement(
                'span',
                null,
                'Don\'t Have an Account? Sign Up ',
                _react3.default.createElement(
                  _reactRouterDom.Link,
                  { to: 'signup', href: 'signup' },
                  'here'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SignInForm;
}(_react3.default.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ userSignInRequest: _authActions.userSignInRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(SignInForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SignOut: {
    displayName: 'SignOut'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signout/signOut.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/signout/signOut.jsx',
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
   * SignOut Class Component
   * */
var SignOut = _wrapComponent('SignOut')(function (_Component) {
  _inherits(SignOut, _Component);

  function SignOut() {
    _classCallCheck(this, SignOut);

    return _possibleConstructorReturn(this, (SignOut.__proto__ || Object.getPrototypeOf(SignOut)).apply(this, arguments));
  }

  _createClass(SignOut, [{
    key: 'componentWillMount',

    /**
     * componentWillMount method
     * @returns { void }
     * */
    value: function componentWillMount() {
      this.props.signOutRequest();
    }

    /**
     * render method
     * @returns { Component }
     * @memberOf SignOut
     * */

  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'signed out'
      );
    }
  }]);

  return SignOut;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutRequest: _authActions.signOutRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignOut);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _fixedNav = __webpack_require__(132);

var _fixedNav2 = _interopRequireDefault(_fixedNav);

var _centerDetail = __webpack_require__(1674);

var _centerDetail2 = _interopRequireDefault(_centerDetail);

var _FloatingActionButton = __webpack_require__(127);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _footer = __webpack_require__(128);

var _footer2 = _interopRequireDefault(_footer);

var _modals = __webpack_require__(129);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CenterDetailIndex: {
    displayName: 'CenterDetailIndex'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/index.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerDetail/index.jsx',
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
 * CenterDetailIndex Class Component
 * */
var CenterDetailIndex = _wrapComponent('CenterDetailIndex')(function (_Component) {
  _inherits(CenterDetailIndex, _Component);

  function CenterDetailIndex() {
    _classCallCheck(this, CenterDetailIndex);

    return _possibleConstructorReturn(this, (CenterDetailIndex.__proto__ || Object.getPrototypeOf(CenterDetailIndex)).apply(this, arguments));
  }

  _createClass(CenterDetailIndex, [{
    key: 'showSandWichNavBar',

    /**
     * showSandWichNavBar Method
     * @returns { component }
     * */
    value: function showSandWichNavBar() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'ul',
          { id: 'slide-out', className: 'sidenav' },
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              'div',
              { className: 'user-view' },
              _react3.default.createElement(
                'div',
                { className: 'background' },
                _react3.default.createElement('img', { src: 'images/office.jpg', alt: '' })
              ),
              _react3.default.createElement(
                'a',
                { href: '#user' },
                _react3.default.createElement('img', { className: 'circle', src: 'images/yuna.jpg', alt: '' })
              ),
              _react3.default.createElement(
                'a',
                { href: '#name' },
                _react3.default.createElement(
                  'span',
                  { className: 'white-text name' },
                  'John Doe'
                )
              ),
              _react3.default.createElement(
                'a',
                { href: '#email' },
                _react3.default.createElement(
                  'span',
                  { className: 'white-text email' },
                  'jdandturk@gmail.com'
                )
              )
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              'a',
              { href: '#!' },
              _react3.default.createElement(
                'i',
                { className: 'material-icons' },
                'cloud'
              ),
              'First Link With Icon'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              'a',
              { href: '#!' },
              'Second Link'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement('div', { className: 'divider' })
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              'a',
              { className: 'subheader' },
              'Subheader'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              'a',
              { className: 'waves-effect', href: '#!' },
              'Third Link With Waves'
            )
          )
        )
      );
    }
    /**
     * render Method
     * @returns { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Center Details | Boots Events Manager' },
        _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(
            'div',
            { className: 'body__holdr' },
            this.showSandWichNavBar(),
            _react3.default.createElement(_fixedNav2.default, null),
            _react3.default.createElement(_centerDetail2.default, {
              params: this.props.match.params,
              history: this.props.history
            }),
            _react3.default.createElement(_FloatingActionButton2.default, null),
            _react3.default.createElement(_footer2.default, null)
          ),
          _react3.default.createElement(_modals2.default, null)
        )
      );
    }
  }]);

  return CenterDetailIndex;
}(_react2.Component));

exports.default = CenterDetailIndex;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(188);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _modeEdit = __webpack_require__(299);

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _delete = __webpack_require__(296);

var _delete2 = _interopRequireDefault(_delete);

var _loader = __webpack_require__(92);

var _activeCenterAction = __webpack_require__(1675);

var _deleteCenterAction = __webpack_require__(1676);

var _currentEventForCenter = __webpack_require__(1677);

var _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);

var _RecommCenter = __webpack_require__(1678);

var _RecommCenter2 = _interopRequireDefault(_RecommCenter);

var _EventModal = __webpack_require__(1679);

var _EventModal2 = _interopRequireDefault(_EventModal);

var _editCenterForm = __webpack_require__(1680);

var _editCenterForm2 = _interopRequireDefault(_editCenterForm);

var _fetchCenterRelatedTo = __webpack_require__(1681);

var _eventsActions = __webpack_require__(52);

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
      if (centerDetails.eventStatusChange) {
        location.reload();
      }

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
                                  price
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCenterRequestAction = exports.fetchCenterAction = undefined;

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(28);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var api = '/api/v1/centers';

var fetchCenterDispatch = function fetchCenterDispatch(data) {
  return {
    type: _.FETCH_CENTER_DETAIL,
    center: data
  };
};

var fetchCenterAction = exports.fetchCenterAction = function fetchCenterAction(id) {
  if (!id) return 'id is required for the request to be successful';
  return function (dispatch) {
    return _axios2.default.get(api + '/' + id).then(function (_ref) {
      var data = _ref.data;

      dispatch(fetchCenterDispatch(data));
    }).catch(function (err) {
      Materialize.toast('Page Not Found!!!', 5000, 'red lighten-4');
      window.location.href = '/404';
      throw err;
    });
  };
};

var editCenterRequestAction = exports.editCenterRequestAction = function editCenterRequestAction() {
  return function (dispatch) {
    return dispatch({
      type: _.EDIT_CENTER_REQUEST
    });
  };
};

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _reactRedux = __webpack_require__(22);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(23);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _done = __webpack_require__(297);

var _done2 = _interopRequireDefault(_done);

var _clear = __webpack_require__(298);

var _clear2 = _interopRequireDefault(_clear);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _eventCard = __webpack_require__(124);

var _eventCard2 = _interopRequireDefault(_eventCard);

var _eventsActions = __webpack_require__(52);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(26);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _loader = __webpack_require__(92);

var _helpers = __webpack_require__(130);

var _helpers2 = _interopRequireDefault(_helpers);

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
      relatedCenters: [],
      currentCenterId: _this.props.relatedCenterBasedOn.id
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
        _this2.setState({ isLoading: false, error: true, errorMessage: _this2.state.noCenter });
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
          return _react3.default.createElement(
            'div',
            { key: _shortid2.default.generate(), className: 'col s12 m6 l4' },
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: to, href: to },
              _react3.default.createElement(
                'div',
                { className: 'card' },
                !!center.img_url && _react3.default.createElement(
                  'div',
                  { className: 'card-image center__image' },
                  _react3.default.createElement('img', { src: center.img_url, alt: center.title })
                ),
                _react3.default.createElement(
                  'div',
                  { className: 'card-content black-text' },
                  _react3.default.createElement(
                    'p',
                    { className: 'bold' },
                    center.title
                  ),
                  _react3.default.createElement(
                    'p',
                    { className: 'light__font' },
                    _react3.default.createElement(
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(188);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _DatePicker = __webpack_require__(305);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(120);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(52);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(126);

var _actions = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EventModal: {
    displayName: 'EventModal'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/EventModal.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/EventModal.jsx',
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
    color: 'green'
  }
};

var EventModal = _wrapComponent('EventModal')(function (_Component) {
  _inherits(EventModal, _Component);

  function EventModal(props) {
    _classCallCheck(this, EventModal);

    var _this = _possibleConstructorReturn(this, (EventModal.__proto__ || Object.getPrototypeOf(EventModal)).call(this, props));

    _this.handleChangeStartDate = function (e, date) {
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, "red");
        _this.setState({
          startDate: {}
        });
      } else {
        _this.setState({
          startDate: date.toDateString()
        });
      }
    };

    _this.handleChangeEndDate = function (e, date) {
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, "red");
        _this.setState({
          endDate: {}
        });
      } else {
        _this.setState({
          endDate: date.toDateString()
        });
      }
    };

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

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
    return _this;
  }

  _createClass(EventModal, [{
    key: 'updateProps',
    value: function updateProps(newProps) {
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateProps(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.event) this.setState({ isLoading: newProps.event.isLoading });
    }
  }, {
    key: 'isValid',
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
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      if (!!this.state.errors[e.target.name]) {
        var _setState;

        var errors = Object.assign({}, !!this.state.errors);
        delete errors[e.target.name];
        this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'errors', errors), _setState));
      } else {
        this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    }
  }, {
    key: 'handleToggleChange',
    value: function handleToggleChange(e) {
      this.setState({ private: !this.state.private });
    }
  }, {
    key: 'onFileChange',
    value: function onFileChange(e) {
      var file = e.target.files[0];
      if (file.type.indexOf("image/") > -1) {
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
    key: 'handleEventSubmit',
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
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          editEvent = _state.editEvent,
          title = _state.title,
          description = _state.description,
          endDate = _state.endDate,
          startDate = _state.startDate,
          errors = _state.errors;

      var actions = [_react3.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onClick: this.handleClose }), _react3.default.createElement(_FlatButton2.default, {
        label: isLoading ? _react3.default.createElement('img', {
          style: { marginTop: "10px" },
          src: '/image/loader/loading.gif'
        }) : "Add Event",
        primary: true,
        keyboardFocused: true,
        onClick: this.handleEventSubmit
      })];
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_RaisedButton2.default, {
          label: 'Book this center',
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
            'div',
            { className: 'row', style: { marginTop: "20px" } },
            _react3.default.createElement(
              'form',
              { className: 'col s12', id: 'add-event-form' },
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                  'div',
                  { className: 'col s6' },
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
                        accept: 'image/jpeg,jpg,png,gif',
                        onChange: this.onFileChange
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
                  { className: 'input-field col s6' },
                  _react3.default.createElement(_formInput2.default, {
                    type: 'text',
                    fieldId: 'event_title',
                    nameField: 'title',
                    label: 'Title',
                    value: title,
                    error: errors.title || "",
                    onChange: this.handleInputChange
                  })
                )
              ),
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react3.default.createElement(_DatePicker2.default, {
                    onChange: this.handleChangeStartDate,
                    autoOk: true,
                    floatingLabelText: 'Start Date',
                    disableYearSelection: this.state.disableYearSelection
                  }),
                  errors.startDate && _react3.default.createElement(
                    'span',
                    { className: 'red-text accent-1' },
                    errors.startDate
                  )
                ),
                _react3.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react3.default.createElement(_DatePicker2.default, {
                    onChange: this.handleChangeEndDate,
                    autoOk: true,
                    floatingLabelText: 'End Date',
                    disableYearSelection: this.state.disableYearSelection
                  }),
                  errors.endDate && _react3.default.createElement(
                    'span',
                    { className: 'red-text accent-1' },
                    errors.endDate
                  )
                )
              ),
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react3.default.createElement(
                    'label',
                    { htmlFor: 'description' },
                    'Description'
                  ),
                  _react3.default.createElement('textarea', {
                    id: 'description',
                    type: 'text',
                    name: 'description',
                    className: 'materialize-textarea validate',
                    required: true,
                    onChange: this.handleInputChange,
                    value: description
                  }),
                  errors.description && _react3.default.createElement(
                    'span',
                    { className: 'red-text accent-1' },
                    errors.description
                  )
                )
              ),
              _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react3.default.createElement(_Toggle2.default, {
                    label: 'Do you want this event to be private?',
                    name: 'private',
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SelectField = __webpack_require__(190);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _propTypes = __webpack_require__(4);

var _TextField = __webpack_require__(125);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(46);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(126);

var _facilities = __webpack_require__(307);

var _facilities2 = _interopRequireDefault(_facilities);

var _modalAction = __webpack_require__(308);

var _actions = __webpack_require__(28);

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
      if (file.type.indexOf('image/') > -1) {
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
        // .then((res) => {
        //   console.log(res);
        //   this.setState({ isLoading: false });
        //   if (res.type === EDIT_CENTER) {
        //     Materialize.toast('Center has been updated successfully!!', 5000, 'teal');
        //     location.reload();
        //   } else {
        //     Materialize.toast('Houston, we have a problem! We are working on it', 5000, 'red');
        //   }
        // })
        // .catch(() => {
        //   this.setState({ isLoading: false });
        //   Materialize.toast('Error creating center..!!', 5000, 'red');
        // });
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
        { style: { marginTop: '20px' }, className: 'col s12', id: 'edit-center-form', onSubmit: this.handleCenterSubmit },
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
                _react3.default.createElement('input', { className: 'file-path validate', type: 'text', placeholder: 'Upload an image here' })
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
                className: 'btn col s12 white-text gradient__bg btn-register waves-effect waves-light',
                disabled: isLoading ? 'disabled' : ''
              },
              !isLoading ? 'Save Changes' : _react3.default.createElement('img', { style: { marginTop: '10px' }, src: '/image/loader/loading.gif', alt: 'save-changes-loader' })
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _fixedNav = __webpack_require__(132);

var _fixedNav2 = _interopRequireDefault(_fixedNav);

var _footer = __webpack_require__(128);

var _footer2 = _interopRequireDefault(_footer);

var _allCenters = __webpack_require__(1683);

var _allCenters2 = _interopRequireDefault(_allCenters);

var _FloatingActionButton = __webpack_require__(127);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _modals = __webpack_require__(129);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AllCentersIndex: {
    displayName: 'AllCentersIndex'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/index.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/index.jsx',
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
 * AllCentersIndex Class Component
 * */
var AllCentersIndex = _wrapComponent('AllCentersIndex')(function (_Component) {
  _inherits(AllCentersIndex, _Component);

  function AllCentersIndex() {
    _classCallCheck(this, AllCentersIndex);

    return _possibleConstructorReturn(this, (AllCentersIndex.__proto__ || Object.getPrototypeOf(AllCentersIndex)).apply(this, arguments));
  }

  _createClass(AllCentersIndex, [{
    key: 'render',

    /**
     * render Method
     * @returns { Component }
     * */
    value: function render() {
      return _react3.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Centers | Boots Events Manager' },
        _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(
            'div',
            { className: 'body__holdr' },
            _react3.default.createElement(_fixedNav2.default, null),
            _react3.default.createElement(_allCenters2.default, this.props),
            _react3.default.createElement(_FloatingActionButton2.default, null),
            _react3.default.createElement(_footer2.default, null)
          ),
          _react3.default.createElement(_modals2.default, null)
        )
      );
    }
  }]);

  return AllCentersIndex;
}(_react2.Component));

exports.default = AllCentersIndex;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(26);

var _redux = __webpack_require__(23);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _propTypes = __webpack_require__(4);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _queryString = __webpack_require__(1806);

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(312);

var _searchAction = __webpack_require__(309);

var _loader = __webpack_require__(92);

var _helpers = __webpack_require__(130);

var _helpers2 = _interopRequireDefault(_helpers);

var _history = __webpack_require__(191);

var _history2 = _interopRequireDefault(_history);

var _searchFasterForm = __webpack_require__(1684);

var _searchFasterForm2 = _interopRequireDefault(_searchFasterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AllCenters: {
    displayName: 'AllCenters'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/allCenters.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/allCenters.jsx',
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
   * AllCenters Class Component
   * */
var AllCenters = _wrapComponent('AllCenters')(function (_Component) {
  _inherits(AllCenters, _Component);

  /**
   * Class Constructor
   * @param { object } props
   * @returns { void }
   * */
  function AllCenters(props) {
    _classCallCheck(this, AllCenters);

    var _this = _possibleConstructorReturn(this, (AllCenters.__proto__ || Object.getPrototypeOf(AllCenters)).call(this, props));

    _this.helper = new _helpers2.default();
    _this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null
    };
    _this.onSearch = _this.onSearch.bind(_this);
    return _this;
  }

  /**
   * componentDidMount Method
   * @returns { void }
   * */


  _createClass(AllCenters, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.modal').modal();
      return this.props.fetchCentersAction();
    }

    /**
     * componentWillReceiveProps Method
     * @param { object } newProps
     * @returns { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      var _newProps$centerStore = newProps.centerStore.meta,
          page = _newProps$centerStore.page,
          pageCount = _newProps$centerStore.pageCount,
          pageSize = _newProps$centerStore.pageSize,
          totalCount = _newProps$centerStore.totalCount,
          _newProps$centerStore2 = newProps.centerStore,
          loadingmore = _newProps$centerStore2.loadingmore,
          loadmore = _newProps$centerStore2.loadmore,
          searchQueries = void 0;

      // Run search if URL changes

      if (newProps.location.search !== this.props.location.search) {
        searchQueries = _queryString2.default.parse(newProps.location.search);
        this.setState({ isLoading: true });
        this.props.searchAction(searchQueries).then(function (res) {
          if (res) _this2.setState({ isLoading: false });
        });
      }

      if (newProps) {
        this.setState({
          isLoading: false,
          page: page,
          pageSize: pageSize,
          totalCount: totalCount,
          loadmore: loadmore,
          loadingmore: loadingmore,
          pageCount: pageCount
        });
      }
    }

    /**
     * onSearch Method
     * @param { object } query
     * @returns { void }
     * */

  }, {
    key: 'onSearch',
    value: function onSearch(query) {
      var qString = _queryString2.default.stringify(query, { arrayFormat: 'bracket' });
      _history2.default.push('/centers?' + qString);
    }

    /**
     * showCentersCard Method
     * @returns { Component }
     * */

  }, {
    key: 'showCentersCard',
    value: function showCentersCard() {
      var _this3 = this;

      var centers = this.props.centerStore.centers;

      return centers.sort(function (firstObj, secObj) {
        return secObj.id - firstObj.id;
      }).map(function (center) {
        var to = 'center/' + center.id + '/' + _this3.helper.sanitizeString(center.title);
        return _react3.default.createElement(
          _reactRouterDom.Link,
          { key: _shortid2.default.generate(), to: to, href: to },
          _react3.default.createElement(
            'div',
            { className: 'card' },
            !!center.img_url && _react3.default.createElement(
              'div',
              { className: 'card-image' },
              _react3.default.createElement('img', { src: center.img_url, alt: center.title })
            ),
            _react3.default.createElement(
              'div',
              { className: 'card-content black-text' },
              _react3.default.createElement(
                'div',
                { className: 'row', style: { marginBottom: '0' } },
                _react3.default.createElement(
                  'div',
                  { className: 'col s12' },
                  _react3.default.createElement(
                    'p',
                    { className: 'bold' },
                    center.title
                  ),
                  _react3.default.createElement(
                    'p',
                    { className: 'light__font' },
                    _react3.default.createElement(
                      'i',
                      { className: 'material-icons f15' },
                      'location_on'
                    ),
                    center.location
                  )
                )
              )
            ),
            _react3.default.createElement(
              'div',
              { className: 'card-action' },
              _react3.default.createElement(
                'span',
                { className: 'black-text right-align' },
                'capacity of ',
                center.capacity,
                ' Guests'
              )
            )
          )
        );
      });
    }

    /**
     * initInfiniteScroll Method
     * @returns { void }
     * */

  }, {
    key: 'initInfiniteScroll',
    value: function initInfiniteScroll() {
      var _this4 = this;

      var winHeight = void 0,
          winScrollTop = void 0,
          docHeight = void 0,
          offset = void 0;
      $(window).scroll(function () {
        winHeight = $(window).height();
        winScrollTop = $(window).scrollTop();
        docHeight = $(document).height();

        if (docHeight - winHeight === winScrollTop) {
          /**
           * make loadmore request
           * * */
          offset = _this4.state.page + 1;
          if (_this4.state.loadmore) {
            _this4.props.loadMoreCenters(offset);
          }
        }
      });
    }

    /**
     * autoLoadMore Method
     * @returns { void }
     * */

  }, {
    key: 'autoLoadMore',
    value: function autoLoadMore() {
      if (this.state.loadmore) {
        this.initInfiniteScroll();
      }
    }

    /**
     * loadMore Method
     * @returns { void }
     * */

  }, {
    key: 'loadMore',
    value: function loadMore() {
      /**
       * make loadmore request
       * * */
      var offset = this.state.page + 1;
      this.props.loadMoreCenters(offset);
    }

    /**
     * showLoadMoreButton Method
     * @returns { Component }
     * */

  }, {
    key: 'showLoadMoreButton',
    value: function showLoadMoreButton() {
      var _this5 = this;

      var _state = this.state,
          isLoading = _state.isLoading,
          loadingmore = _state.loadingmore,
          pageCount = _state.pageCount,
          pageSize = _state.pageSize,
          totalCount = _state.totalCount;


      if (!isLoading && pageCount >= 1) {
        if (loadingmore) {
          return _react3.default.createElement(_loader.CircularLoader, null);
        }
        if (pageSize !== totalCount) {
          return _react3.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this5.loadMore();
              },
              className: 'col offset-s3 s6 btn waves-effect gradient__bg'
            },
            'load more'
          );
        }
      }
    }

    /**
     * renderNoCenter Method
     * @returns { Component }
     * */

  }, {
    key: 'renderNoCenter',
    value: function renderNoCenter() {
      var centers = this.props.centerStore.centers;

      if ((0, _isEmpty2.default)(centers)) {
        return _react3.default.createElement(
          'h4',
          { className: 'bold grey-text lighten-2 center-align' },
          _react3.default.createElement(
            'p',
            null,
            'No centers Available....'
          )
        );
      }
    }

    /**
     * render Method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      this.autoLoadMore();
      var isLoading = this.state.isLoading;

      return _react3.default.createElement(
        'div',
        { className: 'container' },
        _react3.default.createElement(
          'div',
          { className: 'center__holdr' },
          _react3.default.createElement(
            'div',
            { className: 'row relative' },
            _react3.default.createElement(
              'div',
              { className: 'col s12 l12', style: { marginBottom: 60 + 'px' } },
              _react3.default.createElement(
                'h4',
                { className: 'center-align' },
                'Boots Centers'
              ),
              _react3.default.createElement(
                'div',
                { className: 'center-align search-faster-form full-width' },
                _react3.default.createElement(_searchFasterForm2.default, { onSearch: this.onSearch })
              ),
              _react3.default.createElement(
                'div',
                { className: 'row' },
                isLoading ? _react3.default.createElement(_loader.CircularLoader, null) : _react3.default.createElement(
                  'div',
                  { className: 'col s12 cards-container' },
                  this.showCentersCard()
                ),
                isLoading ? '' : this.renderNoCenter(),
                this.showLoadMoreButton()
              )
            )
          )
        )
      );
    }
  }]);

  return AllCenters;
}(_react2.Component));

AllCenters.propTypes = {
  fetchCentersAction: _propTypes.PropTypes.func.isRequired,
  centerStore: _propTypes.PropTypes.object.isRequired,
  loadMoreCenters: _propTypes.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    centerStore: state.centerReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchCentersAction: _fetchCenterAction.fetchCentersAction, loadMoreCenters: _fetchCenterAction.loadMoreCenters, searchAction: _searchAction.searchAction }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AllCenters);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _propTypes = __webpack_require__(4);

var _SelectField = __webpack_require__(190);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SearchFasterForm: {
    displayName: 'SearchFasterForm'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/searchFasterForm.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/allCenters/searchFasterForm.jsx',
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
 * SearchFasterForm Class Component
 * */
var SearchFasterForm = _wrapComponent('SearchFasterForm')(function (_Component) {
  _inherits(SearchFasterForm, _Component);

  /**
   * SearchFasterForm Class Coonstructor
   * @param { object } props
   * */
  function SearchFasterForm(props) {
    _classCallCheck(this, SearchFasterForm);

    var _this = _possibleConstructorReturn(this, (SearchFasterForm.__proto__ || Object.getPrototypeOf(SearchFasterForm)).call(this, props));

    _this.state = {
      location: '',
      price: '',
      capacity: ''
    };
    _this.handleSearchChange = _this.handleSearchChange.bind(_this);
    _this.handleSearchStart = _this.handleSearchStart.bind(_this);
    return _this;
  }

  /**
   * handleSearchChange Method
   * @param { object } e
   * @returns { void }
   * */


  _createClass(SearchFasterForm, [{
    key: 'handleSearchChange',
    value: function handleSearchChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }

    /**
     * handleSearchStart Method
     * @param { object } e
     * @returns { void }
     * */

  }, {
    key: 'handleSearchStart',
    value: function handleSearchStart(e) {
      e.preventDefault();
      var _state = this.state,
          location = _state.location,
          price = _state.price,
          capacity = _state.capacity;

      // if any of the search queries are provided
      // then run the search function

      if (location || price || capacity) {
        this.props.onSearch(this.state);
      }
    }

    /**
     * render Life cycle Method
     * @returns { component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          location = _state2.location,
          price = _state2.price,
          capacity = _state2.capacity;


      return _react3.default.createElement(
        'form',
        { className: 'full-width' },
        _react3.default.createElement(
          'div',
          { className: 'input-field col s12 l2' },
          _react3.default.createElement(
            'label',
            { htmlFor: 'fast_price' },
            'Price'
          ),
          _react3.default.createElement('input', {
            id: 'fast_price',
            type: 'number',
            min: '100',
            onChange: this.handleSearchChange,
            name: 'price',
            value: price || '',
            className: 'validate'
          })
        ),
        _react3.default.createElement(
          'div',
          { className: 'input-field col s12 l4' },
          _react3.default.createElement(
            'label',
            { htmlFor: 'fast_capacity' },
            'Capacity'
          ),
          _react3.default.createElement('input', {
            id: 'fast_capacity',
            type: 'number',
            name: 'capacity',
            onChange: this.handleSearchChange,
            min: '0',
            value: capacity || '',
            className: 'validate'
          })
        ),
        _react3.default.createElement(
          'div',
          { className: 'input-field col s12 l4' },
          _react3.default.createElement(
            'label',
            { htmlFor: 'fast_capacity' },
            'Location'
          ),
          _react3.default.createElement('input', {
            id: 'fast_location',
            type: 'text',
            name: 'location',
            onChange: this.handleSearchChange,
            value: location || '',
            className: 'validate'
          })
        ),
        _react3.default.createElement(
          'div',
          { className: 'input-field col s12 l2' },
          _react3.default.createElement(
            'button',
            { onClick: this.handleSearchStart, className: 'btn gradient__bg', type: 'submit' },
            'search'
          )
        )
      );
    }
  }]);

  return SearchFasterForm;
}(_react2.Component));

SearchFasterForm.propTypes = {
  onSearch: _propTypes.PropTypes.func.isRequired
};

exports.default = SearchFasterForm;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1685:
false,

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _reactRedux = __webpack_require__(22);

var _fixedNav = __webpack_require__(132);

var _fixedNav2 = _interopRequireDefault(_fixedNav);

var _myEventsComponent = __webpack_require__(1687);

var _myEventsComponent2 = _interopRequireDefault(_myEventsComponent);

var _FloatingActionButton = __webpack_require__(127);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _footer = __webpack_require__(128);

var _footer2 = _interopRequireDefault(_footer);

var _modals = __webpack_require__(129);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MyEvents: {
    displayName: 'MyEvents'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/myEvents.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/myEvents.jsx',
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
   * MyEvents Class Component
   * */
var MyEvents = _wrapComponent('MyEvents')(function (_Component) {
  _inherits(MyEvents, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function MyEvents(props) {
    _classCallCheck(this, MyEvents);

    var _this = _possibleConstructorReturn(this, (MyEvents.__proto__ || Object.getPrototypeOf(MyEvents)).call(this, props));

    _this.state = {
      isAuthenticated: false
    };
    return _this;
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */


  _createClass(MyEvents, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.activeState.isAuthenticated) {
        this.setState({ isAuthenticated: true });
      }
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      if (!this.state.isAuthenticated) {
        return _react3.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          'div',
          { className: 'body__holdr' },
          _react3.default.createElement(_fixedNav2.default, null),
          _react3.default.createElement(_myEventsComponent2.default, null),
          _react3.default.createElement(_FloatingActionButton2.default, null),
          _react3.default.createElement(_footer2.default, null)
        ),
        _react3.default.createElement(_modals2.default, null)
      );
    }
  }]);

  return MyEvents;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyEvents);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _propTypes = __webpack_require__(4);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _loader = __webpack_require__(92);

var _eventCard = __webpack_require__(124);

var _eventCard2 = _interopRequireDefault(_eventCard);

var _eventsActions = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MyEventCardHolder: {
    displayName: 'MyEventCardHolder'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/myEventsComponent.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/myEventsComponent.jsx',
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
 * MyEventCardHolder Class Component
 * */
var MyEventCardHolder = _wrapComponent('MyEventCardHolder')(function (_Component) {
  _inherits(MyEventCardHolder, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function MyEventCardHolder(props) {
    _classCallCheck(this, MyEventCardHolder);

    var _this = _possibleConstructorReturn(this, (MyEventCardHolder.__proto__ || Object.getPrototypeOf(MyEventCardHolder)).call(this, props));

    _this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null,
      events: []
    };
    return _this;
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */


  _createClass(MyEventCardHolder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.modal').modal();
      this.props.fetchSessionEventRequest(this.props.activeUser.user.id);
    }

    /**
     * componentWillReceiveProps method
     * @param { object } newProps
     * @returns { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.allEvents.sessEvents.events.length > 0) {
        var _newProps$allEvents$s = newProps.allEvents.sessEvents.meta,
            page = _newProps$allEvents$s.page,
            pageCount = _newProps$allEvents$s.pageCount,
            pageSize = _newProps$allEvents$s.pageSize,
            totalCount = _newProps$allEvents$s.totalCount,
            loadingmore = _newProps$allEvents$s.loadingmore,
            loadmore = _newProps$allEvents$s.loadmore;
        var events = newProps.allEvents.sessEvents.events;


        this.setState({
          isLoading: false,
          events: events,
          page: page,
          pageSize: pageSize,
          totalCount: totalCount,
          loadmore: loadmore,
          loadingmore: loadingmore,
          pageCount: pageCount
        });
      } else {
        this.setState({ isLoading: false });
      }
    }

    /**
     * initInfiniteScroll method
     * @returns { void }
     * */

  }, {
    key: 'initInfiniteScroll',
    value: function initInfiniteScroll() {
      var _this2 = this;

      var winHeight = void 0,
          winScrollTop = void 0,
          docHeight = void 0,
          offset = void 0;
      $(window).scroll(function () {
        winHeight = $(window).height();
        winScrollTop = $(window).scrollTop();
        docHeight = $(document).height();

        if (docHeight - winHeight === winScrollTop) {
          /**
           * make loadmore request
           * */
          offset = _this2.state.page + 1;
          if (_this2.state.loadmore) {
            _this2.props.loadMoreEvents(offset);
          }
        }
      });
    }

    /**
     * autoLoadMore method
     * @returns { void }
     * */

  }, {
    key: 'autoLoadMore',
    value: function autoLoadMore() {
      if (this.state.loadmore) {
        this.initInfiniteScroll();
      }
    }

    /**
     * loadMore method
     * @returns { void }
     * */

  }, {
    key: 'loadMore',
    value: function loadMore() {
      /**
       * make loadmore request
       * */
      var offset = this.state.page + 1;
      this.props.loadMoreEvents(offset);
    }

    /**
     * renderNoEvents method
     * @returns { component }
     * */

  }, {
    key: 'renderNoEvents',
    value: function renderNoEvents() {
      var events = this.state.events;

      if ((0, _isEmpty2.default)(events)) {
        return _react3.default.createElement(
          'h4',
          { className: 'bold grey-text lighten-2 center-align' },
          _react3.default.createElement(
            'p',
            null,
            'No Event Available..'
          )
        );
      }
    }

    /**
     * renderEventsCard method
     * @returns { component }
     * */

  }, {
    key: 'renderEventsCard',
    value: function renderEventsCard() {
      var events = this.state.events;

      if (!(0, _isEmpty2.default)(events)) {
        return events.map(function (event) {
          return _react3.default.createElement(_eventCard2.default, { key: _shortid2.default.generate(), event: event });
        });
      }
    }

    /**
     * render method
     * @returns { component }
     * @memberOf MyEventCardHolder
     * */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.autoLoadMore();
      var _state = this.state,
          isLoading = _state.isLoading,
          loadingmore = _state.loadingmore,
          pageCount = _state.pageCount,
          pageSize = _state.pageSize,
          totalCount = _state.totalCount;

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          'div',
          { style: { minHeight: '90vh', paddingTop: '64px' }, className: 'container popular__events' },
          _react3.default.createElement(
            'h4',
            { className: 'center-align' },
            'My Events'
          ),
          isLoading ? _react3.default.createElement(
            'div',
            { style: { height: '500px', marginTop: '100px' } },
            _react3.default.createElement(_loader.CircularLoader, null)
          ) : _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'col s12 cards-container' },
              this.renderEventsCard()
            ),
            this.renderNoEvents(),
            pageCount > 1 ? loadingmore ? _react3.default.createElement(_loader.CircularLoader, null) : pageSize !== totalCount ? _react3.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.loadMore();
                }, className: 'col offset-s3 s6 btn waves-effect gradient__bg' },
              'load more'
            ) : '' : ''
          )
        )
      );
    }
  }]);

  return MyEventCardHolder;
}(_react2.Component));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchEventRequest: _eventsActions.fetchEventRequest,
    loadMoreEvents: _eventsActions.loadMoreEvents,
    fetchSessionEventRequest: _eventsActions.fetchSessionEventRequest
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    allEvents: state.eventReducer,
    activeUser: state.authReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyEventCardHolder);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _reactDocumentTitle = __webpack_require__(76);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _footer = __webpack_require__(128);

var _footer2 = _interopRequireDefault(_footer);

var _fixedNav = __webpack_require__(132);

var _fixedNav2 = _interopRequireDefault(_fixedNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NoMatch: {
    displayName: 'NoMatch'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/noMatch.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/noMatch.jsx',
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
 * NoMatch Class Component
 * If there are no route match this component is called
 * */
var NoMatch = _wrapComponent('NoMatch')(function (_Component) {
  _inherits(NoMatch, _Component);

  function NoMatch() {
    _classCallCheck(this, NoMatch);

    return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
  }

  _createClass(NoMatch, [{
    key: 'render',

    /**
     * Render Method
     * @returns { component }
     * * */
    value: function render() {
      return _react3.default.createElement(
        _reactDocumentTitle2.default,
        { title: 'Page not Found | Boots Events Manager' },
        _react3.default.createElement(
          'div',
          { className: 'body__holdr' },
          _react3.default.createElement(_fixedNav2.default, null),
          _react3.default.createElement(
            'div',
            {
              className: 'container',
              style: { paddingTop: '64px', height: '92vh' }
            },
            _react3.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '50px' } },
              _react3.default.createElement(
                'div',
                { className: 'col s12' },
                _react3.default.createElement(
                  'div',
                  { className: 'row' },
                  _react3.default.createElement(
                    'div',
                    { className: 'col s12 m6 l6' },
                    _react3.default.createElement(
                      'div',
                      { className: 'center-align' },
                      _react3.default.createElement(
                        'h1',
                        {
                          className: 'gradient_text',
                          style: { fontSize: '10em', fontWeight: 'lighter' }
                        },
                        '404'
                      ),
                      _react3.default.createElement(
                        'h5',
                        null,
                        'Error page'
                      )
                    )
                  ),
                  _react3.default.createElement(
                    'div',
                    { className: 'col s12 m6 l6' },
                    _react3.default.createElement(
                      'div',
                      { className: 'center-align' },
                      _react3.default.createElement('img', {
                        width: '100%',
                        src: 'https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif',
                        alt: '404 not found'
                      }),
                      _react3.default.createElement(
                        'h5',
                        { className: 'gradient_text' },
                        _react3.default.createElement(
                          'b',
                          null,
                          'Houston we have a problem!!!'
                        )
                      ),
                      _react3.default.createElement(
                        'h6',
                        null,
                        'we were unable to find the page you are looking for...'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react3.default.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return NoMatch;
}(_react2.Component));

exports.default = NoMatch;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 1689:
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

var _jsonwebtoken = __webpack_require__(1690);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _jwtDecode = __webpack_require__(294);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _ = __webpack_require__(207);

var _setAuthenticationToken = __webpack_require__(122);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _authActions = __webpack_require__(61);

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
        _jsonwebtoken2.default.verify(localStorage.getItem('jwtToken'), undefined, function (err, decoded) {
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

/***/ }),

/***/ 1800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(23);

var _authReducer = __webpack_require__(1801);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _centerReducer = __webpack_require__(1802);

var _centerReducer2 = _interopRequireDefault(_centerReducer);

var _activeCenterReducer = __webpack_require__(1803);

var _activeCenterReducer2 = _interopRequireDefault(_activeCenterReducer);

var _eventReducer = __webpack_require__(1804);

var _eventReducer2 = _interopRequireDefault(_eventReducer);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _redux.combineReducers)({
   /**
      * @Authentication reducer for user validation
      * * */
   authReducer: _authReducer2.default,

   /**
      * @center reducer for center storage to store
      * * */
   centerReducer: _centerReducer2.default,

   /**
      * @active center reducer to display center details from store
      * * */
   activeCenter: _activeCenterReducer2.default,

   /**
      * @event reducer for event storage to store
      * * */
   eventReducer: _eventReducer2.default
});

/***/ }),

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _actions = __webpack_require__(28);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var newState = void 0;
  switch (action.type) {
    case _actions.FETCH_CENTER_DETAIL:
      return action.center;

    case _actions.EDIT_CENTER_REQUEST:
      return _extends({}, state, {
        editCenter: true
      });

    case _actions.EDIT_CENTER:
      newState = Object.assign({}, state);
      newState.editCenter = false;
      newState.centr = action.payload;
      return newState;

    case _actions.REMOVE_CENTER:
      newState = Object.assign({}, state);
      delete _extends({}, newState);
      return {};

    case _actions.EVENT_STATUS_CHANGE:
      newState = Object.assign({}, state);
      newState.eventStatusChange = true;
      return newState;

    default:
      return state;
  }
};

/***/ }),

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(28);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var pageLimit = process.env.DATA_LIMIT;
var newState = void 0;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actions.FETCH_EVENTS:
      return action.payload;

    case _actions.ADD_EVENT:
      if (state.events) {
        state.events.unshift(action.payload);
        state.totalCount = state.events.length;
        state.pageCount = Math.ceil(state.totalCount / pageLimit);
        return state;
      }
      state.events = [];
      state.events.unshift(action.payload);
      state.totalCount = state.events.length;
      state.pageCount = Math.ceil(state.totalCount / pageLimit);
      return state;

    case _actions.EDIT_EVENT_REQUEST:
      return _extends({}, state, {
        eventToEdit: action.payload,
        editEvent: true
      });

    case _actions.EDIT_EVENT:
      newState = Object.assign({}, state);
      newState.events.map(function (event, index) {
        if (event.id === action.payload.id) {
          newState.events[index] = action.payload;
        }
      });
      newState.isLoading = false;
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case _actions.EDIT_EVENT_FAILURE:
      newState = Object.assign({}, state);
      newState.isLoading = false;
      return newState;

    case _actions.REMOVE_EVENT:
      newState = Object.assign({}, state);
      newState.events.map(function (event, index) {
        if (event.id === action.payload.id) {
          delete newState.events[index];
        }
      });
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case _actions.SESSION_EVENTS:
      newState = Object.assign({}, state);
      newState.sessEvents = action.payload;
      return newState;

    case _actions.SESSION_EVENTS_FAILURE:
      newState = Object.assign({}, state);
      newState.sessEvents = [];
      return newState;

    case _actions.LOADMORE_EVENT_FAILURE:
      return _extends({}, state, {
        loadingmore: false
      });

    case _actions.LOADMORE_EVENT_REQUEST:
      return _extends({}, state, {
        loadmore: true,
        loadingmore: true
      });

    case _actions.LOADMORE_EVENT_SUCCESS:
      newState = Object.assign({}, state);
      newState.events = newState.events.concat(action.payload);
      newState.loadingmore = false;
      newState.page = parseInt(newState.page + 1, 10);
      newState.pageSize = parseInt(newState.pageSize + action.payload.length, 10);
      if (newState.pageSize === newState.totalCount) {
        newState.loadmore = false;
      }
      return newState;

    case _actions.SEARCH_EVENT_TITLE:
      newState = Object.assign({}, state);
      if (!(0, _isEmpty2.default)(action.events)) {
        newState.events = action.events;
      } else {
        newState.events = state.events;
      }
      return newState;

    case _actions.SEARCH_EVENT_TITLE_FAILED:
      newState = Object.assign({}, state);
      newState.searchFailure = true;
      return newState;

    default:
      return state;
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var strictUriEncode = __webpack_require__(1807);
var objectAssign = __webpack_require__(64);
var decodeComponent = __webpack_require__(1808);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
};

exports.parse = function (str, opts) {
	opts = objectAssign({ arrayFormat: 'none' }, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: this.parse(this.extract(str), opts)
	};
};

/***/ }),

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/***/ }),

/***/ 1808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + (typeof encodedURI === 'undefined' ? 'undefined' : _typeof(encodedURI)) + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(143);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var history = void 0;
exports.default = history = (0, _createBrowserHistory2.default)();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _reactRedux = __webpack_require__(22);

var _reduxThunk = __webpack_require__(426);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(23);

var _darkBaseTheme = __webpack_require__(427);

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _MuiThemeProvider = __webpack_require__(428);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(243);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(46);

var _App = __webpack_require__(504);

var _App2 = _interopRequireDefault(_App);

var _authCheck = __webpack_require__(1689);

var _authCheck2 = _interopRequireDefault(_authCheck);

var _rootReducer = __webpack_require__(1800);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _history = __webpack_require__(191);

var _history2 = _interopRequireDefault(_history);

var _registerServiceWorker = __webpack_require__(1805);

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
})(_redux.createStore)(_rootReducer2.default);

new _authCheck2.default().isSignedIn();

_history2.default.listen(function (location) {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(function () {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, check fragment/scroll to top
    var hash = window.location.hash;

    if (hash) {
      var element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  });
});

var muiTheme = (0, _getMuiTheme2.default)({
  palette: {
    textColor: _colors.black
  },
  appBar: {
    height: 64
  }
});

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.Router,
    { history: _history2.default },
    _react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: muiTheme },
      _react2.default.createElement(_App2.default, null)
    )
  )
), document.getElementById('root'));

(0, _registerServiceWorker2.default)();

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLOUDINARY_URL = exports.CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcbqn1c10/upload';

var CLOUDINARY_UPLOAD_PRESET = exports.CLOUDINARY_UPLOAD_PRESET = 'z3nqw1ue';

/**
* ADD_USER action Constant, To add a new user to the store
* */
var ADD_USER = exports.ADD_USER = 'ADD_USER';

/**
 * SET_USER action Constant,
 * To set the current signed in user details and authentication.
 * * */
var SET_USER = exports.SET_USER = 'SET_USER';

/**
 * REMOVE_USER action Constant,
 * To remove a user from the database then from the store .
 * * */
var REMOVE_USER = exports.REMOVE_USER = 'REMOVE_USER';

/**
 * ADD_CENTER_SUCCESS action Constant,
 * To add a success request action when a new center is being added to the database
 * * */
var ADD_CENTER_SUCCESS = exports.ADD_CENTER_SUCCESS = 'ADD_CENTER_SUCCESS';

/**
 * ADD_CENTER_FAlLURE action Constant,
 * To add a failure request action when a new center is being added to the database
 * * */
var ADD_CENTER_FAlLURE = exports.ADD_CENTER_FAlLURE = 'ADD_CENTER_FAlLURE';

/**
 * ADD_CENTER_REQUEST action Constant,
 * To add a request action when a new center is being sent to the database
 * * */
var ADD_CENTER_REQUEST = exports.ADD_CENTER_REQUEST = 'ADD_CENTER_REQUEST';

/**
 * FETCH_CENTERS action Constant,
 * To fetch centers from the database.
 * * */
var FETCH_CENTERS = exports.FETCH_CENTERS = 'FETCH_CENTERS';

/**
 * FETCH_CENTER_DETAIL action Constant,
 * To fetch a center details from the database.
 * * */
var FETCH_CENTER_DETAIL = exports.FETCH_CENTER_DETAIL = 'FETCH_CENTER_DETAIL';

/**
 * REMOVE_CENTER action Constant,
 * To remove a center from the database then the store.
 * * */
var REMOVE_CENTER = exports.REMOVE_CENTER = 'REMOVE_CENTER';

/**
 * FETCH_RELATED_CENTERS action Constant,
 * To fetch a centers related centers from the database then add to the store.
 * * */
var FETCH_RELATED_CENTERS = exports.FETCH_RELATED_CENTERS = 'FETCH_RELATED_CENTERS';

/**
 * EDIT_CENTER_REQUEST action Constant,
 * To add the center details to the store so
 * the details can be gotten and appended to the nodal form.
 * * */
var EDIT_CENTER_REQUEST = exports.EDIT_CENTER_REQUEST = 'EDIT_CENTER_REQUEST';

/**
 * EDIT_CENTER action Constant,
 * TO edit and change the center details.
 * * */
var EDIT_CENTER = exports.EDIT_CENTER = 'EDIT_CENTER';

/**
 * EDIT_CENTER_FAILURE action Constant,
 * action when edit center request failed.
 * * */
var EDIT_CENTER_FAILURE = exports.EDIT_CENTER_FAILURE = 'EDIT_CENTER_FAILURE';

/**
 * FETCH_EVENTS action constants.
 * TO fetch all centers from the database and add to the store.
 * * */
var FETCH_EVENTS = exports.FETCH_EVENTS = 'FETCH_EVENTS';

/**
 * ADD_EVENT action constants.
 * To add a new event to the database and to the store.
 * * */
var ADD_EVENT = exports.ADD_EVENT = 'ADD_EVENT';

/**
 * EDIT_EVENT_REQUEST action constants.
 * To add a edit request before editing an existing event in the database and the store.
 * * */
var EDIT_EVENT_REQUEST = exports.EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST';

/**
 * EDIT_EVENT action constants.
 * To edit an existing event in the database and the store.
 * * */
var EDIT_EVENT = exports.EDIT_EVENT = 'EDIT_EVENT';

/**
 * EDIT_EVENT_FAILURE action constants.
 * To throw error when edit request could not be made.
 * * */
var EDIT_EVENT_FAILURE = exports.EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';

/**
 * REMOVE_EVENT action constants.
 * To remove an existing event in the database and the store.
 * * */
var REMOVE_EVENT = exports.REMOVE_EVENT = 'REMOVE_EVENT';

var LOADMORE_EVENT_REQUEST = exports.LOADMORE_EVENT_REQUEST = 'LOADMORE_EVENT_REQUEST';
var LOADMORE_EVENT_SUCCESS = exports.LOADMORE_EVENT_SUCCESS = 'LOADMORE_EVENT_SUCCESS';
var LOADMORE_EVENT_FAILURE = exports.LOADMORE_EVENT_FAILURE = 'LOADMORE_EVENT_FAILURE';

var LOADMORE_CENTER_REQUEST = exports.LOADMORE_CENTER_REQUEST = 'LOADMORE_CENTER_REQUEST';
var LOADMORE_CENTER_SUCCESS = exports.LOADMORE_CENTER_SUCCESS = 'LOADMORE_CENTER_SUCCESS';
var LOADMORE_CENTER_FAILURE = exports.LOADMORE_CENTER_FAILURE = 'LOADMORE_CENTER_FAILURE';

var SEARCH_CENTER_TITLE = exports.SEARCH_CENTER_TITLE = 'SEARCH_CENTER_TITLE';
var SEARCH_CENTER_TITLE_FAILED = exports.SEARCH_CENTER_TITLE_FAILED = 'SEARCH_CENTER_TITLE_FAILED';

var SEARCH_EVENT_TITLE = exports.SEARCH_EVENT_TITLE = 'SEARCH_EVENT_TITLE';
var SEARCH_EVENT_TITLE_FAILED = exports.SEARCH_EVENT_TITLE_FAILED = 'SEARCH_EVENT_TITLE_FAILED';
var SESSION_EVENTS = exports.SESSION_EVENTS = 'SESSION_EVENTS';
var SESSION_EVENTS_FAILURE = exports.SESSION_EVENTS_FAILURE = 'SESSION_EVENTS_FAILURE';
var EVENT_STATUS_CHANGE = exports.EVENT_STATUS_CHANGE = 'EVENT_STATUS_CHANGE';

var IMAGE_PLACEHOLDER = exports.IMAGE_PLACEHOLDER = 'http://placehold.it/600/92c952';

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AppBar = __webpack_require__(649);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _AppBar2.default;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(181);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(281);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(652);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _propTypes = __webpack_require__(4);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(188);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(125);

var _TextField2 = _interopRequireDefault(_TextField);

var _DatePicker = __webpack_require__(305);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(120);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(52);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(126);

var _actions = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EditEventModal: {
    displayName: 'EditEventModal'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/eventModalForm/editEventModal.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/eventModalForm/editEventModal.jsx',
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
  labelStyle: {
    color: 'green'
  }
};

/**
   * EditEventModal Class Component
   * */

var EditEventModal = _wrapComponent('EditEventModal')(function (_Component) {
  _inherits(EditEventModal, _Component);

  /**
   * EditEventModal Class Constructor
   * @param { object } props
   * */
  function EditEventModal(props) {
    _classCallCheck(this, EditEventModal);

    var _this = _possibleConstructorReturn(this, (EditEventModal.__proto__ || Object.getPrototypeOf(EditEventModal)).call(this, props));

    _this.state = {
      open: false,
      disableYearSelection: false,
      isLoading: false,
      errors: {},
      eventId: 0,
      centerId: 0,
      userId: 0,
      title: '',
      img_url: '',
      startDate: null,
      endDate: null,
      description: '',
      private: false
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleEventSubmit = _this.handleEventSubmit.bind(_this);
    _this.handleChangeStartDate = _this.handleChangeStartDate.bind(_this);
    _this.handleChangeEndDate = _this.handleChangeEndDate.bind(_this);
    _this.onFileChange = _this.onFileChange.bind(_this);
    _this.handleToggleChange = _this.handleToggleChange.bind(_this);
    return _this;
  }

  /**
   * componentDidMount life cycle Method
   * @return { void }
   * */


  _createClass(EditEventModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateState(this.props);
    }

    /**
     * componentWillReceiveProps life cycle Method
     * @param { object } newProps
     * @return { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateState(newProps);
    }

    /**
     * onFileChange Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'onFileChange',
    value: function onFileChange(e) {
      var _this2 = this;

      var file = e.target.files[0];
      if (file.type.indexOf('image/') > -1) {
        // only image file
        if (file.size < 2000000) {
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(file); // read the local file
          reader.onloadend = function () {
            _this2.setState({
              // img_url: reader.result // store image as binary data string
              img_url: file
            });
          };
        } else {
          Materialize.toast('File too large', 5000, 'red');
        }
      } else {
        Materialize.toast('Please select only images', 5000, 'red');
      }
    }

    /**
     * isValid Method
     * @return { void }
     * */

  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateEventInput = (0, _validateInput.validateEventInput)(this.state),
          errors = _validateEventInput.errors,
          isValid = _validateEventInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * removeError Method
     * @param { string } date
     * @param { string } dateField
     * @return { void }
     * */

  }, {
    key: 'removeError',
    value: function removeError(date, dateField) {
      var errors = Object.assign({}, !!this.state.errors);
      if (dateField === 'startDate') {
        delete errors.startDate;
        this.setState({
          startDate: new Date(date),
          errors: errors
        });
      } else {
        delete errors.endDate;
        this.setState({
          endDate: new Date(date),
          errors: errors
        });
      }
    }

    /**
     * handleChangeStartDate Method
     * @param { object } e
     * @param { string } date
     * @return { void }
     * */

  }, {
    key: 'handleChangeStartDate',
    value: function handleChangeStartDate(e, date) {
      if (this.state.errors.startDate) {
        this.removeError(date, 'startDate');
      }
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, 'red');
        this.setState({
          startDate: {},
          errors: {
            startDate: 'This field is required'
          }
        });
      } else {
        this.setState({
          startDate: new Date(date)
        });
      }
    }

    /**
     * handleChangeEndDate Method
     * @param { object } e
     * @param { string } date
     * @return { void }
     * */

  }, {
    key: 'handleChangeEndDate',
    value: function handleChangeEndDate(e, date) {
      if (this.state.errors.endDate) {
        this.removeError(date, 'endDate');
      }
      if (new Date(date) < new Date()) {
        Materialize.toast("Date isn't correct. Should be a day after today not before", 5000, 'red');
        this.setState({
          endDate: {},
          errors: {
            endDate: 'This field is required'
          }
        });
      } else if (date < this.state.startDate) {
        Materialize.toast('End Date should be after Start Date', 5000, 'red');
        this.setState({
          endDate: {},
          errors: {
            endDate: 'This field is required'
          }
        });
      } else {
        this.setState({
          endDate: new Date(date)
        });
      }
    }

    /**
     * handleInputChange Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
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
     * handleToggleChange Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleToggleChange',
    value: function handleToggleChange(e) {
      this.setState({ private: !this.state.private });
    }

    /**
     * updateState Method
     * @param { object } newProps
     * @return { void }
     * */

  }, {
    key: 'updateState',
    value: function updateState(newProps) {
      if (newProps.event.editEvent) {
        var _newProps$event$event = newProps.event.eventToEdit,
            title = _newProps$event$event.title,
            img_url = _newProps$event$event.img_url,
            startDate = _newProps$event$event.startDate,
            endDate = _newProps$event$event.endDate,
            description = _newProps$event$event.description,
            centerId = _newProps$event$event.centerId,
            userId = _newProps$event$event.userId,
            id = _newProps$event$event.id;

        var privateEvent = newProps.event.eventToEdit.private;
        this.setState({
          eventId: id,
          centerId: centerId,
          userId: userId,
          title: title,
          img_url: img_url,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          description: description,
          private: privateEvent
        });
        if (!newProps.event.isLoading) {
          this.setState({ isLoading: newProps.event.isLoading });
        }
      } else if (newProps.activeCenter.center) {
        this.setState({
          centerId: newProps.activeCenter.center.id,
          userId: newProps.actUser.user.id
        });
      }
    }

    /**
     * handleEventSubmit Method
     * @param { object } e
     * @return { void }
     * */

  }, {
    key: 'handleEventSubmit',
    value: function handleEventSubmit(e) {
      e.preventDefault();
      if (this.isValid()) {
        this.setState({
          isLoading: true
        });

        this.props.editEventAction(this.state);
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
          isLoading = _state.isLoading,
          title = _state.title,
          description = _state.description,
          endDate = _state.endDate,
          startDate = _state.startDate,
          errors = _state.errors;

      return _react3.default.createElement(
        'div',
        { className: 'row', style: { marginTop: '20px' } },
        _react3.default.createElement(
          'form',
          {
            className: 'col s12',
            id: 'add-event-form',
            onSubmit: this.handleEventSubmit
          },
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'col s6' },
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
                    accept: 'image/jpeg,jpg,png,gif',
                    onChange: this.onFileChange
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
              { className: 'input-field col s6' },
              _react3.default.createElement(_TextField2.default, {
                id: 'event_field',
                hintText: 'Title',
                name: 'title',
                value: title,
                errorText: errors.title || '',
                multiLine: false,
                onChange: this.handleInputChange
              })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s6' },
              _react3.default.createElement(_DatePicker2.default, {
                onChange: this.handleChangeStartDate,
                autoOk: true,
                floatingLabelText: 'Start Date',
                value: startDate,
                disableYearSelection: this.state.disableYearSelection
              }),
              errors.startDate && _react3.default.createElement(
                'span',
                { className: 'red-text accent-1' },
                errors.startDate
              )
            ),
            _react3.default.createElement(
              'div',
              { className: 'input-field col s6' },
              _react3.default.createElement(_DatePicker2.default, {
                onChange: this.handleChangeEndDate,
                autoOk: true,
                floatingLabelText: 'End Date',
                value: endDate,
                disableYearSelection: this.state.disableYearSelection
              }),
              errors.endDate && _react3.default.createElement(
                'span',
                { className: 'red-text accent-1' },
                errors.endDate
              )
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12' },
              _react3.default.createElement(
                'label',
                { htmlFor: 'description' },
                'Description'
              ),
              _react3.default.createElement('textarea', {
                id: 'description',
                name: 'description',
                className: 'materialize-textarea validate',
                required: true,
                onChange: this.handleInputChange,
                value: description
              })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'input-field col s12' },
              _react3.default.createElement(_Toggle2.default, {
                label: 'Do you want this event to be private?',
                name: 'private',
                defaultToggled: this.state.private,
                onToggle: this.handleToggleChange,
                labelStyle: styles.labelStyle
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
                  id: 'editEventForm',
                  name: 'action',
                  className: 'btn col s12 white-text gradient__bg btn-register waves-effect waves-light',
                  disabled: isLoading ? 'disabled' : ''
                },
                !isLoading ? 'update event' : _react3.default.createElement('img', {
                  style: { marginTop: '10px' },
                  src: '/image/loader/loading.gif',
                  alt: 'loading gif'
                })
              )
            )
          )
        )
      );
    }
  }]);

  return EditEventModal;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeCenter: state.activeCenter,
    event: state.eventReducer,
    actUser: state.authReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ editEventAction: _eventsActions.editEventAction }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditEventModal);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCenterRequest = exports.createCenterRequest = undefined;

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthenticationToken = __webpack_require__(122);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _ = __webpack_require__(28);

var _history = __webpack_require__(191);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var centerApi = '/api/v1/centers';

var addCenterPayload = function addCenterPayload(payload) {
  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (response === 'success') {
    return {
      type: _.ADD_CENTER_SUCCESS,
      center: payload
    };
  } else if (response === 'request') {
    return {
      type: _.ADD_CENTER_REQUEST,
      center: payload
    };
  } else if (response === 'failure') {
    return {
      type: _.ADD_CENTER_FAlLURE,
      center: payload
    };
  }
};

var createCenter = function createCenter(centerApi, centerData, imgUrl) {
  return function (dispatch) {
    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
    (0, _setAuthenticationToken2.default)(token);
    centerData.img_url = imgUrl;
    dispatch(addCenterPayload(centerData, 'request'));
    return _axios2.default.post(centerApi, centerData).then(function (_ref) {
      var data = _ref.data;

      console.log('response from server =====> ', data);
      if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red');
        return dispatch(addCenterPayload(data, 'failure'));
      }
      Materialize.toast(data.message, 5000, 'teal');
      document.getElementById('edit-center-form').reset();
      $('.modal').modal('close');
      return dispatch(addCenterPayload(data.center, 'success'));
    });
  };
};

var createCenterRequest = exports.createCenterRequest = function createCenterRequest(centerData) {
  return function (dispatch) {
    if (centerData.img_url.name) {
      var formData = new FormData();
      formData.append('file', centerData.img_url);
      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref2) {
        var data = _ref2.data;

        console.log('response from cloud =====> ', data);
        dispatch(createCenter(centerApi, centerData, data.url));
      }).catch(function (err) {
        console.log(err);
      });
    }
    return dispatch(createCenter(centerApi, centerData, ''));
  };
};

/* *
 * update center payload sorter
 * ** */
var updateCenterPayload = function updateCenterPayload(data, res) {
  if (res === 'success') {
    return {
      type: _.EDIT_CENTER,
      payload: data
    };
  } else if (res === 'failure') {
    return {
      type: _.EDIT_CENTER_FAILURE,
      payload: data
    };
  }
};

/* *
 * update center method
 * requester to local server
 * ** */
var editCenter = function editCenter(centerApi, centerData, imgUrl) {
  return function (dispatch) {
    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
    (0, _setAuthenticationToken2.default)(token);
    centerData.img_url = imgUrl;
    return _axios2.default.put(centerApi, centerData).then(function (_ref3) {
      var data = _ref3.data;

      dispatch(updateCenterPayload(data.centr, 'success'));
      window.location.reload();
    });
  };
};

/* *
 * Initial landing method for edit center request
 * ** */
var updateCenterRequest = exports.updateCenterRequest = function updateCenterRequest(centerData) {
  return function (dispatch) {
    if (centerData.img_url.name) {
      var formData = new FormData();
      formData.append('file', centerData.img_url);
      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref4) {
        var data = _ref4.data;

        dispatch(editCenter(centerApi + '/' + centerData.id, centerData, data.url));
      }).catch(function (err) {
        console.log(err);
      });
    }
    return dispatch(editCenter(centerApi + '/' + centerData.id, centerData, centerData.img_url));
  };
};

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterEventTitle = exports.filterCenterTitle = exports.searchAction = undefined;

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(1659);

var _queryString = __webpack_require__(1806);

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(312);

var _index = __webpack_require__(52);

var _ = __webpack_require__(28);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prepareCenterSearchQuery = function prepareCenterSearchQuery(searchObject) {
  var searchObjectString = _queryString2.default.stringify(searchObject, {
    arrayFormat: 'bracket'
  });
  searchApi = '/api/v1/centers?' + searchObjectString;
  return searchApi;
};

var validateEventSearchQuery = function validateEventSearchQuery(_ref) {
  var searchBy = _ref.searchBy,
      search = _ref.search;

  var searchApi = void 0,
      api = void 0;

  if (searchBy) {
    api = '/api/v1/events?searchBy=' + searchBy + '&search=';
  } else {
    api = '/api/v1/events?search=';
  }

  if (!(0, _lodash.isEmpty)(search) && search !== 'undefined') {
    searchApi = '' + (api + search);
  }

  return searchApi;
};

var searchAction = exports.searchAction = function searchAction(data) {
  var searchApi = prepareCenterSearchQuery(data);
  return function (dispatch) {
    return _axios2.default.get(searchApi).then(function (_ref2) {
      var data = _ref2.data;

      if (data.statusCode === 200) {
        dispatch((0, _fetchCenterAction.fetchCentersDispatch)(data));
      } else if (data.statusCode === 404) {
        if (err) {
          Materialize.toast('search result do not match center(s)', 5000, 'red');
        }
      }
    }).catch(function (err) {
      if (err) {
        Materialize.toast('search result do not match center(s)', 5000, 'red');
      }
    });
  };
};

var filterCenterTitle = exports.filterCenterTitle = function filterCenterTitle(value) {
  return function (dispatch) {
    var searchApi = validateCenterSearchQuery(value);
    return _axios2.default.get(searchApi).then(function (_ref3) {
      var data = _ref3.data;

      if (data.statusCode === 200) {
        dispatch((0, _fetchCenterAction.searchCenterDispatch)(data));
      } else if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red');
        dispatch({
          type: _.SEARCH_CENTER_TITLE_FAILED
        });
      }
    });
  };
};

var filterEventTitle = exports.filterEventTitle = function filterEventTitle(value) {
  return function (dispatch) {
    var searchApi = validateEventSearchQuery(value);
    return _axios2.default.get(searchApi).then(function (_ref4) {
      var data = _ref4.data;

      if (data.statusCode === 200) {
        dispatch((0, _index.searchEventsDispatch)(data.events));
      } else if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red');
        dispatch({
          type: _.SEARCH_EVENT_TITLE_FAILED
        });
      }
    });
  };
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AuthHeader: {
    displayName: 'AuthHeader'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/AuthHeader.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/AuthHeader.jsx',
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
 * AuthHeader Class Component
 * */
var AuthHeader = _wrapComponent('AuthHeader')(function (_Component) {
  _inherits(AuthHeader, _Component);

  function AuthHeader() {
    _classCallCheck(this, AuthHeader);

    return _possibleConstructorReturn(this, (AuthHeader.__proto__ || Object.getPrototypeOf(AuthHeader)).apply(this, arguments));
  }

  _createClass(AuthHeader, [{
    key: 'render',

    /**
     * @return { component }
     * */
    value: function render() {
      return _react3.default.createElement(
        'nav',
        { className: 'wow fadeInDown black-text gradient__bg' },
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'brand-logo center logo', href: '/' },
              _react3.default.createElement(
                'p',
                null,
                'Boots EM'
              )
            )
          )
        )
      );
    }
  }]);

  return AuthHeader;
}(_react2.Component));

exports.default = AuthHeader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AuthFooter: {
    displayName: 'AuthFooter'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/authFooter.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/authentication/authFooter.jsx',
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
 * AuthFooter Class Component
 * */
var AuthFooter = _wrapComponent('AuthFooter')(function (_Component) {
  _inherits(AuthFooter, _Component);

  function AuthFooter() {
    _classCallCheck(this, AuthFooter);

    return _possibleConstructorReturn(this, (AuthFooter.__proto__ || Object.getPrototypeOf(AuthFooter)).apply(this, arguments));
  }

  _createClass(AuthFooter, [{
    key: 'render',

    /**
     * @returns { component }
     * */
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'auth__footer footer' },
        _react3.default.createElement(
          'div',
          { className: 'container' },
          _react3.default.createElement(
            'div',
            { className: 'center-align' },
            _react3.default.createElement(
              'span',
              null,
              ' ',
              '\xA9 2017, All rights reserved.',
              ' ',
              _react3.default.createElement(
                _reactRouterDom.Link,
                { to: '/', href: '/' },
                'Boots Events Manager'
              )
            )
          )
        )
      );
    }
  }]);

  return AuthFooter;
}(_react2.Component));

exports.default = AuthFooter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(46);

var _colorManipulator = __webpack_require__(54);

var _spacing = __webpack_require__(229);

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: _colors.cyan700,
    primary2Color: _colors.cyan700,
    primary3Color: _colors.grey600,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.pinkA400,
    accent3Color: _colors.pinkA100,
    textColor: _colors.fullWhite,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  }
};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Main = __webpack_require__(613);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/App.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/App.jsx',
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
 * App Class Component
 * */
var App = _wrapComponent('App')(function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',

    /**
     * @returns { component}
     * */
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_Main2.default, null)
      );
    }
  }]);

  return App;
}(_react2.Component));

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStatusEventAction = exports.loadMoreEvents = exports.deleteEventRequest = exports.editEventAction = exports.editEventRequestAction = exports.fetchSessionEventRequest = exports.fetchEventRequest = exports.createEventRequest = exports.searchEventsDispatch = undefined;

var _redux = __webpack_require__(23);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(28);

var _setAuthenticationToken = __webpack_require__(122);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 *  @API Route String
 * * */
var api = '/api/v1/events';

/* *
 *  @Event Dispatch Method
 *  @Returns Object
 * * */
var eventsDispatchAction = function eventsDispatchAction(type) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (type) {
    case 'edit':
      return {
        type: _.EDIT_EVENT,
        payload: data
      };

    case 'edit_request':
      return {
        type: _.EDIT_EVENT_REQUEST,
        payload: data
      };

    case 'add':
      return {
        type: _.ADD_EVENT,
        payload: data
      };

    case 'fetch':
      return {
        type: _.FETCH_EVENTS,
        payload: data
      };

    case 'delete':
      return {
        type: _.REMOVE_EVENT,
        payload: data
      };

    default:
      return data;
  }
};

var searchEventsDispatch = exports.searchEventsDispatch = function searchEventsDispatch(data) {
  return {
    type: _.SEARCH_EVENT_TITLE,
    events: data
  };
};

var createEvent = function createEvent(eventData, imgUrl) {
  return function (dispatch) {
    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
    (0, _setAuthenticationToken2.default)(token);
    eventData.img_url = imgUrl;
    return _axios2.default.post(api, eventData).then(function (_ref) {
      var data = _ref.data;

      dispatch(eventsDispatchAction('add', data.event));
      Materialize.toast(data.message, 5000, 'teal');
      location.reload();
    }).catch(function (err) {
      console.log(err);
      dispatch({
        type: _.EDIT_EVENT_FAILURE
      });
      Materialize.toast('An Error Occurred..!!!', 5000, 'red');
    });
  };
};

/* *
 *  Initial Create Event Request Action
 *  @Returns Promise
 * * */
var createEventRequest = exports.createEventRequest = function createEventRequest(eventData) {
  return function (dispatch) {
    if (eventData.img_url.name) {
      var formData = new FormData();
      formData.append('file', eventData.img_url);
      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref2) {
        var data = _ref2.data;

        dispatch(createEvent(eventData, data.url));
      }).catch(function (err) {
        Materialize.toast('Error in connection', 5000, 'red');
        console.log(err);
      });
    }

    return dispatch(createEvent(eventData, ''));
  };
};

/**
 *  @Fetch Event Action
 *  @Returns Object
 * * */
var fetchEventRequest = exports.fetchEventRequest = function fetchEventRequest() {
  return function (dispatch) {
    return _axios2.default.get(api).then(function (_ref3) {
      var data = _ref3.data;

      data.loadingmore = false;
      data.loadmore = false;
      data.isLoading = false;
      dispatch(eventsDispatchAction('fetch', data));
    });
  };
};

var fetchSessionEventRequest = exports.fetchSessionEventRequest = function fetchSessionEventRequest(userId) {
  return function (dispatch) {
    return _axios2.default.get(api + '?sessionEvents=' + userId).then(function (_ref4) {
      var data = _ref4.data;

      data.isLoading = false;
      if (data) {
        return dispatch({
          type: _.SESSION_EVENTS,
          payload: data
        });
      }

      return dispatch({
        type: _.SESSION_EVENTS_FAILURE
      });
    });
  };
};

/* *
 *  @Edit Event Request Action
 *  @Returns Object
 * * */
var editEventRequestAction = exports.editEventRequestAction = function editEventRequestAction(data) {
  return function (dispatch) {
    return dispatch(eventsDispatchAction('edit_request', data));
  };
};

var editEvent = function editEvent(eventData, imgUrl) {
  return function (dispatch) {
    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
    (0, _setAuthenticationToken2.default)(token);
    eventData.img_url = imgUrl;
    return _axios2.default.put(api + '/' + eventData.eventId, eventData).then(function (_ref5) {
      var data = _ref5.data;

      if (data.statusCode === 201) {
        Materialize.toast(data.message, 5000, 'teal');
        $('#add_event_modal').modal('close');
        $('.body__holdr').removeClass('blur__fits');
        return dispatch(eventsDispatchAction('edit', data.event));
      }
      return data;
    });
  };
};

/* *
 *  @Edit Event Action
 *  @Returns Object
 * * */
var editEventAction = exports.editEventAction = function editEventAction(eventData) {
  return function (dispatch) {
    if (eventData.img_url.name) {
      var formData = new FormData();
      formData.append('file', eventData.img_url);
      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref6) {
        var data = _ref6.data;

        dispatch(editEvent(eventData, data.url));
      }).catch(function () {
        Materialize.toast('Error in connection', 5000, 'red');
      });
    }
    return dispatch(editEvent(eventData, eventData.img_url));
  };
};

/* *
 *  @Delete Event Action
 *  @Returns Object
 * * */
var deleteEventRequest = exports.deleteEventRequest = function deleteEventRequest(id) {
  id = parseInt(id, 10);
  return function (dispatch) {
    return _axios2.default.delete(api + '/' + id).then(function (_ref7) {
      var data = _ref7.data;

      if (data.statusCode === 200) {
        Materialize.toast(data.message, 5000);
        return dispatch(eventsDispatchAction('delete', data.event));
      }
      Materialize.toast(data.message, 5000, 'red');
      return data;
    }).catch(function (err) {
      Materialize.toast(err.message, 5000, 'red');
    });
  };
};

/* *
 *  @Load more Event Request Action
 *  @Returns Object
 * * */
var loadMoreEvents = exports.loadMoreEvents = function loadMoreEvents(offset) {
  return function (dispatch) {
    dispatch({
      type: _.LOADMORE_EVENT_REQUEST
    });
    return _axios2.default.get(api + '?next=' + offset).then(function (_ref8) {
      var data = _ref8.data;

      if (data.statusCode === 200) {
        return dispatch({
          type: _.LOADMORE_EVENT_SUCCESS,
          payload: data.events
        });
      }
      return dispatch({
        type: _.LOADMORE_EVENT_FAILURE
      });
    });
  };
};

/* *
 * Accept a pending event
 * */
var handleStatusEventAction = exports.handleStatusEventAction = function handleStatusEventAction(eventId, status) {
  return function (dispatch) {
    return (
      // send status request for event
      _axios2.default.post(api + '/' + eventId + '?status=' + status).then(function (_ref9) {
        var data = _ref9.data;

        if (data.statusCode === 200) {
          Materialize.toast(data.message, 5000, 'teal');
          return dispatch({
            type: _.EVENT_STATUS_CHANGE
          });
        }
        Materialize.toast(data.message, 5000, 'red');
      })
    );
  };
};

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(26);

var _createBrowserHistory = __webpack_require__(143);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _homepage = __webpack_require__(614);

var _homepage2 = _interopRequireDefault(_homepage);

var _signup = __webpack_require__(1662);

var _signup2 = _interopRequireDefault(_signup);

var _signin = __webpack_require__(1670);

var _signin2 = _interopRequireDefault(_signin);

var _signOut = __webpack_require__(1672);

var _signOut2 = _interopRequireDefault(_signOut);

var _centerDetail = __webpack_require__(1673);

var _centerDetail2 = _interopRequireDefault(_centerDetail);

var _index7 = __webpack_require__(1682);

var _index8 = _interopRequireDefault(_index7);

var _myEvents = __webpack_require__(1686);

var _myEvents2 = _interopRequireDefault(_myEvents);

var _noMatch = __webpack_require__(1688);

var _noMatch2 = _interopRequireDefault(_noMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Main: {
    displayName: 'Main'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/Main.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/Main.jsx',
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
 * Main Class Component
 * */
var Main = _wrapComponent('Main')(function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',

    /**
     * @returns { component }
     * */
    value: function render() {
      return _react3.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react3.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _homepage2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _signup2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _signin2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/signout', component: _signOut2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/center/:id/:title', component: _centerDetail2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/centers', component: _index8.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '/my-events', component: _myEvents2.default }),
        _react3.default.createElement(_reactRouterDom.Route, { path: '*', component: _noMatch2.default })
      );
    }
  }]);

  return Main;
}(_react2.Component));

exports.default = Main;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nav = __webpack_require__(615);

var _nav2 = _interopRequireDefault(_nav);

var _headbanner = __webpack_require__(678);

var _headbanner2 = _interopRequireDefault(_headbanner);

var _indexEventsCard = __webpack_require__(679);

var _indexEventsCard2 = _interopRequireDefault(_indexEventsCard);

var _callToAction = __webpack_require__(1650);

var _callToAction2 = _interopRequireDefault(_callToAction);

var _FloatingActionButton = __webpack_require__(127);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _footer = __webpack_require__(128);

var _footer2 = _interopRequireDefault(_footer);

var _modals = __webpack_require__(129);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HomePage: {
    displayName: 'HomePage'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/homepage.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/homepage.jsx',
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
 * HomePage Class Component
 * */
var HomePage = _wrapComponent('HomePage')(function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',

    /**
     * @returns { component }
     * */
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          { className: 'body__holdr' },
          _react3.default.createElement(_nav2.default, null),
          _react3.default.createElement(_headbanner2.default, null),
          _react3.default.createElement(_indexEventsCard2.default, null),
          _react3.default.createElement(_callToAction2.default, null),
          _react3.default.createElement(_FloatingActionButton2.default, null),
          _react3.default.createElement(_footer2.default, null)
        ),
        _react3.default.createElement(_modals2.default, null)
      );
    }
  }]);

  return HomePage;
}(_react2.Component));

exports.default = HomePage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(26);

var _IconMenu = __webpack_require__(115);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menu = __webpack_require__(91);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(119);

var _search2 = _interopRequireDefault(_search);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(183);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(184);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _AppBar = __webpack_require__(287);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toggle = __webpack_require__(120);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _colors = __webpack_require__(46);

var _close = __webpack_require__(185);

var _close2 = _interopRequireDefault(_close);

var _accountCircle = __webpack_require__(121);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _List = __webpack_require__(288);

var _List2 = _interopRequireDefault(_List);

var _Toolbar = __webpack_require__(653);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _typography = __webpack_require__(249);

var _typography2 = _interopRequireDefault(_typography);

var _transitions = __webpack_require__(20);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Nav: {
    displayName: "Nav"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/nav.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/nav.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Nav = _wrapComponent("Nav")(function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(Nav, [{
    key: "renderSidenav",
    value: function renderSidenav() {
      var _this2 = this;

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          _Drawer2.default,
          {
            docked: false,
            width: 200,
            open: this.state.open,
            onRequestChange: function onRequestChange(open) {
              return _this2.setState({ open: open });
            }
          },
          _react3.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
              return _this2.showModal();
            },
            leftIcon: _react3.default.createElement(_search2.default, null),
            primaryText: "Search"
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + (this.props.activeState.user.lastName || "Guest")
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          !this.props.activeState.isAuthenticated ? this.showAuthenticationLinks() : _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        ),
        _react3.default.createElement(_FlatButton2.default, {
          className: "right hide-on-med-and-up",
          style: { margin: "10px", color: "#FFFFFF" },
          onClick: this.handleToggle,
          icon: _react3.default.createElement(_menu2.default, null)
        })
      );
    }
  }, {
    key: "showAuthenticationLinks",
    value: function showAuthenticationLinks() {
      // Show Sign-in and Sign-up
      // links only if user isn't signed in
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          "span",
          null,
          _react3.default.createElement(
            "li",
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: "/signin" },
              "Sign In"
            )
          ),
          _react3.default.createElement(
            "li",
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: "/signup" },
              "Sign Up"
            )
          )
        );
      }

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          _IconMenu2.default,
          {
            iconButtonElement: _react3.default.createElement(
              _IconButton2.default,
              null,
              _react3.default.createElement(_accountCircle2.default, { color: "white" })
            ),
            anchorOrigin: { horizontal: "left", vertical: "top" },
            targetOrigin: { horizontal: "left", vertical: "top" }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + this.props.activeState.user.lastName
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        )
      );
    }
  }, {
    key: "showModal",
    value: function showModal() {
      $("#search__modal").modal("open");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react3.default.createElement(
        "div",
        { className: "navbar-fixed home__nav" },
        _react3.default.createElement(
          "nav",
          { className: "gradient__bg" },
          _react3.default.createElement(
            "div",
            { className: "container" },
            _react3.default.createElement(
              "div",
              { className: "nav-wrapper" },
              _react3.default.createElement(
                _reactRouterDom.Link,
                { to: "/", className: "brand-logo logo" },
                _react3.default.createElement(
                  "p",
                  null,
                  "Boots EM"
                )
              ),
              this.renderSidenav(),
              _react3.default.createElement(
                "ul",
                { id: "nav-mobile", className: "right hide-on-med-and-down" },
                _react3.default.createElement(
                  "li",
                  null,
                  _react3.default.createElement(
                    "a",
                    {
                      onClick: function onClick() {
                        return _this3.showModal();
                      },
                      className: "modal-trigger",
                      id: "search__view"
                    },
                    _react3.default.createElement(
                      "i",
                      { className: "material-icons" },
                      "search"
                    )
                  )
                ),
                _react3.default.createElement(
                  "li",
                  null,
                  _react3.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/centers" },
                    "List of centers"
                  )
                ),
                this.showAuthenticationLinks()
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutRequest: _authActions.signOutRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { matchDispatchToProps: matchDispatchToProps })(Nav);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(170);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getStyles = getStyles;

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _menu = __webpack_require__(91);

var _menu2 = _interopRequireDefault(_menu);

var _Paper = __webpack_require__(40);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = __webpack_require__(34);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _warning = __webpack_require__(21);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      appBar = _context$muiTheme.appBar,
      iconButtonSize = _context$muiTheme.button.iconButtonSize,
      zIndex = _context$muiTheme.zIndex;

  var flatButtonSize = 36;

  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px'
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };

  return styles;
}

var AppBar = function (_Component) {
  (0, _inherits3.default)(AppBar, _Component);

  function AppBar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickLeftIconButton = function (event) {
      if (_this.props.onLeftIconButtonClick) {
        _this.props.onLeftIconButtonClick(event);
      }
    }, _this.handleClickRightIconButton = function (event) {
      if (_this.props.onRightIconButtonClick) {
        _this.props.onRightIconButtonClick(event);
      }
    }, _this.handleTitleClick = function (event) {
      if (_this.props.onTitleClick) {
        _this.props.onTitleClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AppBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Material-UI: Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : void 0;

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Material-UI: Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : void 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          titleStyle = _props.titleStyle,
          iconStyleLeft = _props.iconStyleLeft,
          iconStyleRight = _props.iconStyleRight,
          onTitleClick = _props.onTitleClick,
          showMenuIconButton = _props.showMenuIconButton,
          iconElementLeft = _props.iconElementLeft,
          iconElementRight = _props.iconElementRight,
          iconClassNameLeft = _props.iconClassNameLeft,
          iconClassNameRight = _props.iconClassNameRight,
          onLeftIconButtonClick = _props.onLeftIconButtonClick,
          onRightIconButtonClick = _props.onRightIconButtonClick,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleClick', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonClick', 'onRightIconButtonClick', 'className', 'style', 'zDepth', 'children']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var menuElementLeft = void 0;
      var menuElementRight = void 0;

      // If the title is a string, wrap in an h1 tag.
      // If not, wrap in a div tag.
      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

      var titleElement = _react2.default.createElement(titleComponent, {
        onClick: this.handleTitleClick,
        style: prepareStyles((0, _simpleAssign2.default)(styles.title, styles.mainElement, titleStyle))
      }, title);

      var iconLeftStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, iconStyleLeft);

      if (showMenuIconButton) {
        if (iconElementLeft) {
          var iconElementLeftProps = {};

          if (iconElementLeft.type.muiName === 'IconButton') {
            var iconElemLeftChildren = iconElementLeft.props.children;
            var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementLeftProps.iconStyle = (0, _simpleAssign2.default)({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
          }

          if (!iconElementLeft.props.onClick && this.props.onLeftIconButtonClick) {
            iconElementLeftProps.onClick = this.handleClickLeftIconButton;
          }

          menuElementLeft = _react2.default.createElement('div', { style: prepareStyles(iconLeftStyle) }, (0, _keys2.default)(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft);
        } else {
          menuElementLeft = _react2.default.createElement(_IconButton2.default, {
            style: iconLeftStyle,
            iconStyle: styles.iconButtonIconStyle,
            iconClassName: iconClassNameLeft,
            onClick: this.handleClickLeftIconButton
          }, iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) }));
        }
      }

      var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
        marginRight: -16,
        marginLeft: 'auto'
      }, iconStyleRight);

      if (iconElementRight) {
        var iconElementRightProps = {};

        switch (iconElementRight.type.muiName) {
          case 'IconMenu':
          case 'IconButton':
            var iconElemRightChildren = iconElementRight.props.children;
            var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementRightProps.iconStyle = (0, _simpleAssign2.default)({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
            break;

          case 'FlatButton':
            iconElementRightProps.style = (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style);
            break;

          default:
        }

        if (!iconElementRight.props.onClick && this.props.onRightIconButtonClick) {
          iconElementRightProps.onClick = this.handleClickRightIconButton;
        }

        menuElementRight = _react2.default.createElement('div', { style: prepareStyles(iconRightStyle) }, (0, _keys2.default)(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight);
      } else if (iconClassNameRight) {
        menuElementRight = _react2.default.createElement(_IconButton2.default, {
          style: iconRightStyle,
          iconStyle: styles.iconButtonIconStyle,
          iconClassName: iconClassNameRight,
          onClick: this.handleClickRightIconButton
        });
      }

      return _react2.default.createElement(_Paper2.default, (0, _extends3.default)({}, other, {
        rounded: false,
        className: className,
        style: (0, _simpleAssign2.default)({}, styles.root, style),
        zDepth: zDepth
      }), menuElementLeft, titleElement, menuElementRight, children);
    }
  }]);
  return AppBar;
}(_react.Component);

AppBar.muiName = 'AppBar';
AppBar.defaultProps = {
  showMenuIconButton: true,
  title: '',
  zDepth: 1
};
AppBar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
AppBar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Can be used to render a tab inside an app bar for instance.
   */
  children: _propTypes2.default.node,
  /**
   * Applied to the app bar's root element.
   */
  className: _propTypes2.default.string,
  /**
   * The classname of the icon on the left of the app bar.
   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
   */
  iconClassNameLeft: _propTypes2.default.string,
  /**
   * Similiar to the iconClassNameLeft prop except that
   * it applies to the icon displayed on the right of the app bar.
   */
  iconClassNameRight: _propTypes2.default.string,
  /**
   * The custom element to be displayed on the left side of the
   * app bar such as an SvgIcon.
   */
  iconElementLeft: _propTypes2.default.element,
  /**
   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
   */
  iconElementRight: _propTypes2.default.element,
  /**
   * Override the inline-styles of the element displayed on the left side of the app bar.
   */
  iconStyleLeft: _propTypes2.default.object,
  /**
   * Override the inline-styles of the element displayed on the right side of the app bar.
   */
  iconStyleRight: _propTypes2.default.object,
  /**
   * Callback function for when the left icon is selected via a click.
   *
   * @param {object} event Click event targeting the left `IconButton`.
   */
  onLeftIconButtonClick: _propTypes2.default.func,
  /**
   * Callback function for when the right icon is selected via a click.
   *
   * @param {object} event Click event targeting the right `IconButton`.
   */
  onRightIconButtonClick: _propTypes2.default.func,
  /**
   * Callback function for when the title text is selected via a click.
   *
   * @param {object} event Click event targeting the `title` node.
   */
  onTitleClick: _propTypes2.default.func,
  /**
   * Determines whether or not to display the Menu icon next to the title.
   * Setting this prop to false will hide the icon.
   */
  showMenuIconButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the app bar.
   */
  title: _propTypes2.default.node,
  /**
   * Override the inline-styles of the app bar's title element.
   */
  titleStyle: _propTypes2.default.object,
  /**
   * The zDepth of the component.
   * The shadow of the app bar is also dependent on this property.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = AppBar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(20);

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__(40);

var _Paper2 = _interopRequireDefault(_Paper);

var _EnhancedSwitch = __webpack_require__(651);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context, state) {
  var disabled = props.disabled,
      elementStyle = props.elementStyle,
      trackSwitchedStyle = props.trackSwitchedStyle,
      thumbSwitchedStyle = props.thumbSwitchedStyle,
      trackStyle = props.trackStyle,
      thumbStyle = props.thumbStyle,
      iconStyle = props.iconStyle,
      rippleStyle = props.rippleStyle,
      labelStyle = props.labelStyle;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toggle = _context$muiTheme.toggle;

  var toggleSize = 20;
  var toggleTrackWidth = 36;
  var styles = {
    icon: {
      width: 36,
      padding: '4px 0px 6px 2px'
    },
    ripple: {
      top: -10,
      left: -10,
      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
    },
    toggleElement: {
      width: toggleTrackWidth
    },
    track: {
      transition: _transitions2.default.easeOut(),
      width: '100%',
      height: 14,
      borderRadius: 30,
      backgroundColor: toggle.trackOffColor
    },
    thumb: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      top: 1,
      left: 0,
      width: toggleSize,
      height: toggleSize,
      lineHeight: '24px',
      borderRadius: '50%',
      backgroundColor: toggle.thumbOffColor
    },
    trackWhenSwitched: {
      backgroundColor: toggle.trackOnColor
    },
    thumbWhenSwitched: {
      backgroundColor: toggle.thumbOnColor,
      left: '100%'
    },
    trackWhenDisabled: {
      backgroundColor: toggle.trackDisabledColor
    },
    thumbWhenDisabled: {
      backgroundColor: toggle.thumbDisabledColor
    },
    label: {
      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
    }
  };

  (0, _simpleAssign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

  (0, _simpleAssign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

  if (state.switched) {
    styles.thumb.marginLeft = 0 - styles.thumb.width;
  }

  (0, _simpleAssign2.default)(styles.icon, iconStyle);

  (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

  (0, _simpleAssign2.default)(styles.label, labelStyle);

  (0, _simpleAssign2.default)(styles.toggleElement, elementStyle);

  return styles;
}

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleToggle = function (event, isInputChecked) {
      if (_this.props.onToggle) {
        _this.props.onToggle(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          toggled = _props.toggled,
          defaultToggled = _props.defaultToggled,
          valueLink = _props.valueLink;

      if (toggled || defaultToggled || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'isToggled',
    value: function isToggled() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setToggled',
    value: function setToggled(newToggledValue) {
      this.refs.enhancedSwitch.setSwitched(newToggledValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultToggled = _props2.defaultToggled,
          elementStyle = _props2.elementStyle,
          onToggle = _props2.onToggle,
          trackSwitchedStyle = _props2.trackSwitchedStyle,
          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
          toggled = _props2.toggled,
          other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var toggleElement = _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.toggleElement)) }, _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.track)) }), _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 }));

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switchElement: toggleElement,
        rippleStyle: styles.ripple,
        rippleColor: styles.ripple.color,
        iconStyle: styles.icon,
        trackStyle: styles.track,
        thumbStyle: styles.thumb,
        labelStyle: styles.label,
        switched: this.state.switched,
        onSwitch: this.handleToggle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      if (this.props.hasOwnProperty('toggled')) {
        enhancedSwitchProps.checked = toggled;
      } else if (this.props.hasOwnProperty('defaultToggled')) {
        enhancedSwitchProps.defaultChecked = defaultToggled;
      }

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  defaultToggled: false,
  disabled: false,
  labelPosition: 'left'
};
Toggle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Toggle.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Determines whether the Toggle is initially turned on.
   * **Warning:** This cannot be used in conjunction with `toggled`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultToggled: _propTypes2.default.bool,
  /**
   * Will disable the toggle if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the Toggle element.
   */
  elementStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the Icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Label for toggle.
   */
  label: _propTypes2.default.node,
  /**
   * Where the label will be placed next to the toggle.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the toggle switch is toggled.
   *
   * @param {object} event Change event targeting the toggle.
   * @param {bool} isInputChecked The new value of the toggle.
   */
  onToggle: _propTypes2.default.func,
  /**
   * Override style of ripple.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override style for thumb.
   */
  thumbStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for thumb when the toggle switch is toggled on.
  */
  thumbSwitchedStyle: _propTypes2.default.object,
  /**
   * Toggled if set to true.
   */
  toggled: _propTypes2.default.bool,
  /**
   * Override style for track.
   */
  trackStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for track when the toggle switch is toggled on.
  */
  trackSwitchedStyle: _propTypes2.default.object,
  /**
   * ValueLink prop for when using controlled toggle.
   */
  valueLink: _propTypes2.default.object
} : {};
exports.default = Toggle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(59);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(50);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(20);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(282);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(283);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(40);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(21);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;

  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.componentWillReceiveProps(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          checked = _props.checked,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'checked', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement('label', { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) }, label);

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var touchHandlers = showTouchRipple ? {
        onMouseUp: this.handleMouseUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : {};

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        checked: this.state.switched,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange
      }, touchHandlers));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement('div', { style: prepareStyles(wrapStyles) }, switchElement, ripples) : _react2.default.createElement('div', { style: prepareStyles(wrapStyles) }, _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }), _react2.default.createElement(_Paper2.default, { style: thumbStyle, zDepth: 1, circle: true }, ' ', ripples, ' '));

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement('div', { style: styles.controls }, switchOrThumbElement, labelElement) : _react2.default.createElement('div', { style: styles.controls }, labelElement, switchOrThumbElement);

      return _react2.default.createElement('div', { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp
      }), inputElement, elementsInOrder);
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedSwitch.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
} : {};
exports.default = EnhancedSwitch;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = __webpack_require__(54);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var makeSelectable = function makeSelectable(MyComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
        }
        return previousValue || _this.isChildSelected(child, _this.props);
      }, _this.handleItemClick = function (event, item) {
        var itemValue = item.props.value;

        if (itemValue !== _this.props.value) {
          if (_this.props.onChange) {
            _this.props.onChange(event, itemValue);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
      key: 'extendChild',
      value: function extendChild(child, styles, selectedItemStyle) {
        var _this2 = this;

        if (child && child.type && child.type.muiName === 'ListItem') {
          var selected = this.isChildSelected(child, this.props);
          var selectedChildrenStyles = void 0;
          if (selected) {
            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
          }

          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);

          this.keyIndex += 1;

          return _react2.default.cloneElement(child, {
            onClick: function onClick(event) {
              _this2.handleItemClick(event, child);
              if (child.props.onClick) {
                child.props.onClick(event);
              }
            },
            key: this.keyIndex,
            style: mergedChildrenStyles,
            nestedItems: child.props.nestedItems.map(function (child) {
              return _this2.extendChild(child, styles, selectedItemStyle);
            }),
            initiallyOpen: this.isInitiallyOpen(child)
          });
        } else {
          return child;
        }
      }
    }, {
      key: 'isInitiallyOpen',
      value: function isInitiallyOpen(child) {
        if (child.props.initiallyOpen) {
          return child.props.initiallyOpen;
        }
        return this.hasSelectedDescendant(false, child);
      }
    }, {
      key: 'isChildSelected',
      value: function isChildSelected(child, props) {
        return props.value === child.props.value;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            children = _props.children,
            selectedItemStyle = _props.selectedItemStyle,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);

        this.keyIndex = 0;
        var styles = {};

        if (!selectedItemStyle) {
          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
        }

        return _react2.default.createElement(MyComponent, (0, _extends3.default)({}, other, this.state), _react.Children.map(children, function (child) {
          return _this3.extendChild(child, styles, selectedItemStyle);
        }));
      }
    }]);
    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    selectedItemStyle: _propTypes2.default.object,
    value: _propTypes2.default.any
  }, _class.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.makeSelectable = makeSelectable;
exports.default = makeSelectable;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToolbarTitle = exports.ToolbarSeparator = exports.ToolbarGroup = exports.Toolbar = undefined;

var _Toolbar2 = __webpack_require__(654);

var _Toolbar3 = _interopRequireDefault(_Toolbar2);

var _ToolbarGroup2 = __webpack_require__(655);

var _ToolbarGroup3 = _interopRequireDefault(_ToolbarGroup2);

var _ToolbarSeparator2 = __webpack_require__(656);

var _ToolbarSeparator3 = _interopRequireDefault(_ToolbarSeparator2);

var _ToolbarTitle2 = __webpack_require__(657);

var _ToolbarTitle3 = _interopRequireDefault(_ToolbarTitle2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.Toolbar = _Toolbar3.default;
exports.ToolbarGroup = _ToolbarGroup3.default;
exports.ToolbarSeparator = _ToolbarSeparator3.default;
exports.ToolbarTitle = _ToolbarTitle3.default;
exports.default = _Toolbar3.default;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var noGutter = props.noGutter;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;

  return {
    root: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      backgroundColor: toolbar.backgroundColor,
      height: toolbar.height,
      padding: noGutter ? 0 : '0px ' + baseTheme.spacing.desktopGutter + 'px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
}

var Toolbar = function (_Component) {
  (0, _inherits3.default)(Toolbar, _Component);

  function Toolbar() {
    (0, _classCallCheck3.default)(this, Toolbar);
    return (0, _possibleConstructorReturn3.default)(this, (Toolbar.__proto__ || (0, _getPrototypeOf2.default)(Toolbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          noGutter = _props.noGutter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'noGutter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }), children);
    }
  }]);
  return Toolbar;
}(_react.Component);

Toolbar.defaultProps = {
  noGutter: false
};
Toolbar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Do not apply `desktopGutter` to the `Toolbar`.
   */
  noGutter: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = Toolbar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var firstChild = props.firstChild,
      lastChild = props.lastChild;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      toolbar = _context$muiTheme.toolbar;

  var marginHorizontal = baseTheme.spacing.desktopGutter;
  var marginVertical = (toolbar.height - button.height) / 2;

  var styles = {
    root: {
      position: 'relative',
      marginLeft: firstChild ? -marginHorizontal : undefined,
      marginRight: lastChild ? -marginHorizontal : undefined,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dropDownMenu: {
      root: {
        color: toolbar.color, // removes hover color change, we want to keep it
        marginRight: baseTheme.spacing.desktopGutter,
        flex: 1,
        whiteSpace: 'nowrap'
      },
      controlBg: {
        backgroundColor: toolbar.menuHoverColor,
        borderRadius: 0
      },
      underline: {
        display: 'none'
      }
    },
    button: {
      margin: marginVertical + 'px ' + marginHorizontal + 'px',
      position: 'relative'
    },
    icon: {
      root: {
        cursor: 'pointer',
        lineHeight: toolbar.height + 'px',
        paddingLeft: baseTheme.spacing.desktopGutter
      }
    },
    span: {
      color: toolbar.iconColor,
      lineHeight: toolbar.height + 'px'
    }
  };

  return styles;
}

var ToolbarGroup = function (_Component) {
  (0, _inherits3.default)(ToolbarGroup, _Component);

  function ToolbarGroup() {
    (0, _classCallCheck3.default)(this, ToolbarGroup);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarGroup.__proto__ || (0, _getPrototypeOf2.default)(ToolbarGroup)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarGroup, [{
    key: 'handleMouseLeaveFontIcon',
    value: function handleMouseLeaveFontIcon(style) {
      return function (event) {
        event.target.style.zIndex = 'auto';
        event.target.style.color = style.root.color;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          firstChild = _props.firstChild,
          lastChild = _props.lastChild,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'firstChild', 'lastChild', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        if (!currentChild) {
          return null;
        }
        if (!currentChild.type) {
          return currentChild;
        }
        switch (currentChild.type.muiName) {
          case 'DropDownMenu':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.dropDownMenu.root, currentChild.props.style),
              underlineStyle: styles.dropDownMenu.underline
            });
          case 'RaisedButton':
          case 'FlatButton':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.button, currentChild.props.style)
            });
          case 'FontIcon':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.icon.root, currentChild.props.style),
              color: currentChild.props.color || _this2.context.muiTheme.toolbar.iconColor,
              hoverColor: currentChild.props.hoverColor || _this2.context.muiTheme.toolbar.hoverColor
            });
          case 'ToolbarSeparator':
          case 'ToolbarTitle':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.span, currentChild.props.style)
            });
          default:
            return currentChild;
        }
      }, this);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }), newChildren);
    }
  }]);
  return ToolbarGroup;
}(_react.Component);

ToolbarGroup.defaultProps = {
  firstChild: false,
  lastChild: false
};
ToolbarGroup.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ToolbarGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Can be any node or number of nodes.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Set this to true for if the `ToolbarGroup` is the first child of `Toolbar`
   * to prevent setting the left gap.
   */
  firstChild: _propTypes2.default.bool,
  /**
   * Set this to true for if the `ToolbarGroup` is the last child of `Toolbar`
   * to prevent setting the right gap.
   */
  lastChild: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ToolbarGroup;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;

  return {
    root: {
      backgroundColor: toolbar.separatorColor,
      display: 'block',
      height: baseTheme.spacing.desktopGutterMore,
      marginLeft: baseTheme.spacing.desktopGutter,
      width: 1
    }
  };
}

var ToolbarSeparator = function (_Component) {
  (0, _inherits3.default)(ToolbarSeparator, _Component);

  function ToolbarSeparator() {
    (0, _classCallCheck3.default)(this, ToolbarSeparator);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarSeparator.__proto__ || (0, _getPrototypeOf2.default)(ToolbarSeparator)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarSeparator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }));
    }
  }]);
  return ToolbarSeparator;
}(_react.Component);

ToolbarSeparator.muiName = 'ToolbarSeparator';
ToolbarSeparator.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ToolbarSeparator.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ToolbarSeparator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(12);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(10);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;

  return {
    root: {
      paddingRight: baseTheme.spacing.desktopGutterLess,
      lineHeight: toolbar.height + 'px',
      fontSize: toolbar.titleFontSize,
      fontFamily: baseTheme.fontFamily,
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  };
}

var ToolbarTitle = function (_Component) {
  (0, _inherits3.default)(ToolbarTitle, _Component);

  function ToolbarTitle() {
    (0, _classCallCheck3.default)(this, ToolbarTitle);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarTitle.__proto__ || (0, _getPrototypeOf2.default)(ToolbarTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          text = _props.text,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'text']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('span', (0, _extends3.default)({
        style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style))
      }, other), text);
    }
  }]);
  return ToolbarTitle;
}(_react.Component);

ToolbarTitle.muiName = 'ToolbarTitle';
ToolbarTitle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ToolbarTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to be displayed.
   */
  text: _propTypes2.default.node
} : {};
exports.default = ToolbarTitle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(26);

var _IconMenu = __webpack_require__(115);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menu = __webpack_require__(91);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(119);

var _search2 = _interopRequireDefault(_search);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(183);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(184);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _accountCircle = __webpack_require__(121);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _authActions = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HeaderBanner: {
    displayName: "HeaderBanner"
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/headbanner.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/headbanner.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var HeaderBanner = _wrapComponent("HeaderBanner")(function (_Component) {
  _inherits(HeaderBanner, _Component);

  function HeaderBanner(props) {
    _classCallCheck(this, HeaderBanner);

    var _this = _possibleConstructorReturn(this, (HeaderBanner.__proto__ || Object.getPrototypeOf(HeaderBanner)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = {
      value: 1,
      open: false
    };
    return _this;
  }

  _createClass(HeaderBanner, [{
    key: "renderSidenav",
    value: function renderSidenav() {
      var _this2 = this;

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          _Drawer2.default,
          {
            docked: false,
            width: 200,
            open: this.state.open,
            onRequestChange: function onRequestChange(open) {
              return _this2.setState({ open: open });
            }
          },
          _react3.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
              return _this2.showModal();
            },
            leftIcon: _react3.default.createElement(_search2.default, null),
            primaryText: "Search"
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + (this.props.activeState.user.lastName || "Guest")
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          !this.props.activeState.isAuthenticated ? this.showAuthenticationLinks() : _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        ),
        _react3.default.createElement(_FlatButton2.default, {
          className: "right hide-on-med-and-up",
          style: { margin: "10px", color: "#FFFFFF" },
          onClick: this.handleToggle,
          icon: _react3.default.createElement(_menu2.default, null)
        })
      );
    }
  }, {
    key: "showAuthenticationLinks",
    value: function showAuthenticationLinks() {
      // Show Sign-in and Sign-up
      // links only if user isn't signed in
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          "span",
          null,
          _react3.default.createElement(
            "li",
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: "/signin" },
              "Sign In"
            )
          ),
          _react3.default.createElement(
            "li",
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: "/signup" },
              "Sign Up"
            )
          )
        );
      }

      return _react3.default.createElement(
        _react3.default.Fragment,
        null,
        _react3.default.createElement(
          _IconMenu2.default,
          {
            iconButtonElement: _react3.default.createElement(
              _IconButton2.default,
              null,
              _react3.default.createElement(_accountCircle2.default, { color: "white" })
            ),
            anchorOrigin: { horizontal: "left", vertical: "top" },
            targetOrigin: { horizontal: "left", vertical: "top" }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "Hello " + this.props.activeState.user.lastName
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "My Events",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/my-events" })
          }),
          _react3.default.createElement(_Divider2.default, null),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: "sign out",
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: "/signout" })
          })
        )
      );
    }
  }, {
    key: "showModal",
    value: function showModal() {
      $("#search__modal").modal("open");
    }
  }, {
    key: "showSignUpActionButton",
    value: function showSignUpActionButton() {
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          _reactRouterDom.Link,
          {
            to: "/signup",
            className: "btn blue lighten-2 waves-effect animated fadeInLeft"
          },
          "Join Boots Events Manager"
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react3.default.createElement(
        "div",
        { className: "header" },
        _react3.default.createElement(
          "div",
          { className: "header__overlay" },
          _react3.default.createElement(
            "div",
            { className: "container" },
            _react3.default.createElement(
              "nav",
              { className: "wow fadeInDown" },
              _react3.default.createElement(
                "div",
                { className: "nav-wrapper" },
                _react3.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/", className: "brand-logo logo" },
                  _react3.default.createElement(
                    "p",
                    null,
                    "Boots EM"
                  )
                ),
                this.renderSidenav(),
                _react3.default.createElement(
                  "ul",
                  { id: "nav-mobile", className: "right hide-on-med-and-down" },
                  _react3.default.createElement(
                    "li",
                    null,
                    _react3.default.createElement(
                      "a",
                      {
                        onClick: function onClick() {
                          return _this3.showModal();
                        },
                        className: "modal-trigger",
                        id: "search__view"
                      },
                      _react3.default.createElement(
                        "i",
                        { className: "material-icons" },
                        "search"
                      )
                    )
                  ),
                  _react3.default.createElement(
                    "li",
                    null,
                    _react3.default.createElement(
                      _reactRouterDom.Link,
                      { to: "/centers" },
                      "List of centers"
                    )
                  ),
                  this.showAuthenticationLinks()
                )
              )
            ),
            _react3.default.createElement(
              "div",
              { className: "center-align header__detail" },
              _react3.default.createElement(
                "h4",
                { className: "wow fadeInLeft" },
                "Worlds Leading Startup events"
              ),
              _react3.default.createElement(
                "p",
                { className: "wow fadeInLeft" },
                "Attend Events around you and Add Events."
              ),
              this.showSignUpActionButton()
            )
          )
        )
      );
    }
  }]);

  return HeaderBanner;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeState: state.authReducer
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutRequest: _authActions.signOutRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(HeaderBanner);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(17);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(22);

var _redux = __webpack_require__(23);

var _propTypes = __webpack_require__(4);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _loader = __webpack_require__(92);

var _eventCard = __webpack_require__(124);

var _eventCard2 = _interopRequireDefault(_eventCard);

var _eventsActions = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  IndexEventCardHolder: {
    displayName: 'IndexEventCardHolder'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/indexEventsCard.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/indexEventsCard.jsx',
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
   * IndexEventCardHolder Class Component
   * */
var IndexEventCardHolder = _wrapComponent('IndexEventCardHolder')(function (_Component) {
  _inherits(IndexEventCardHolder, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function IndexEventCardHolder(props) {
    _classCallCheck(this, IndexEventCardHolder);

    var _this = _possibleConstructorReturn(this, (IndexEventCardHolder.__proto__ || Object.getPrototypeOf(IndexEventCardHolder)).call(this, props));

    _this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null,
      events: []
    };
    return _this;
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */


  _createClass(IndexEventCardHolder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.modal').modal();
      this.props.fetchEventRequest();
    }

    /**
     * componentWillReceiveProps method
     * @param { object } newProps
     * @returns { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _newProps$allEvents = newProps.allEvents,
          events = _newProps$allEvents.events,
          page = _newProps$allEvents.page,
          pageCount = _newProps$allEvents.pageCount,
          pageSize = _newProps$allEvents.pageSize,
          totalCount = _newProps$allEvents.totalCount,
          loadingmore = _newProps$allEvents.loadingmore,
          loadmore = _newProps$allEvents.loadmore;


      this.setState({
        isLoading: false,
        events: events,
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        loadmore: loadmore,
        loadingmore: loadingmore,
        pageCount: pageCount
      });
    }

    /**
     * initInfiniteScroll method
     * @returns { void }
     * */

  }, {
    key: 'initInfiniteScroll',
    value: function initInfiniteScroll() {
      var _this2 = this;

      var winHeight = void 0,
          winScrollTop = void 0,
          docHeight = void 0,
          offset = void 0;
      $(window).scroll(function () {
        winHeight = $(window).height();
        winScrollTop = $(window).scrollTop();
        docHeight = $(document).height();

        if (docHeight - winHeight === winScrollTop) {
          /* *
           * make loadmore request
           * */
          offset = _this2.state.page + 1;
          if (_this2.state.loadmore) {
            _this2.props.loadMoreEvents(offset);
          }
        }
      });
    }

    /**
     * autoLoadMore method
     * @returns { void }
     * */

  }, {
    key: 'autoLoadMore',
    value: function autoLoadMore() {
      if (this.state.loadmore) {
        this.initInfiniteScroll();
      }
    }

    /**
     * loadMore method
     * @returns { void }
     * */

  }, {
    key: 'loadMore',
    value: function loadMore() {
      /**
       * make loadmore request
       * */
      var offset = this.state.page + 1;
      this.props.loadMoreEvents(offset);
    }

    /**
     * renderEventsCard method
     * @returns { void }
     * */

  }, {
    key: 'renderEventsCard',
    value: function renderEventsCard() {
      var events = this.state.events;

      return events.map(function (event, index) {
        return _react3.default.createElement(_eventCard2.default, { key: _shortid2.default.generate(), event: event });
      });
    }

    /**
     * renderNoEvent method
     * @returns { void }
     * */

  }, {
    key: 'renderNoEvent',
    value: function renderNoEvent() {
      var events = this.state.events;

      if ((0, _isEmpty2.default)(events)) {
        return _react3.default.createElement(
          'h4',
          { className: 'bold grey-text lighten-2 center-align' },
          _react3.default.createElement(
            'p',
            null,
            'No Event Available..'
          )
        );
      }
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.autoLoadMore();
      var _state = this.state,
          isLoading = _state.isLoading,
          loadingmore = _state.loadingmore,
          pageCount = _state.pageCount,
          pageSize = _state.pageSize,
          totalCount = _state.totalCount;

      return _react3.default.createElement(
        'div',
        { className: 'popular__events_holdr' },
        _react3.default.createElement(
          'div',
          { className: 'container popular__events' },
          isLoading ? _react3.default.createElement(
            'div',
            { style: { height: '500px', marginTop: '100px' } },
            _react3.default.createElement(_loader.CircularLoader, null)
          ) : _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(
              'div',
              { className: 'col s12 cards-container' },
              this.renderEventsCard()
            ),
            this.renderNoEvent(),
            pageCount > 1 ? loadingmore ? _react3.default.createElement(_loader.CircularLoader, null) : pageSize !== totalCount ? _react3.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.loadMore();
                }, className: 'col offset-s3 s6 btn waves-effect gradient__bg' },
              ' load more '
            ) : '' : ''
          )
        )
      );
    }
  }]);

  return IndexEventCardHolder;
}(_react2.Component));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchEventRequest: _eventsActions.fetchEventRequest, loadMoreEvents: _eventsActions.loadMoreEvents }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    allEvents: state.eventReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IndexEventCardHolder);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ })

})
//# sourceMappingURL=hot-update.js.map