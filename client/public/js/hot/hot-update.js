webpackHotUpdate(0,{

/***/ 125:
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

var _redux = __webpack_require__(22);

var _propTypes = __webpack_require__(3);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactRedux = __webpack_require__(21);

var _classnames = __webpack_require__(188);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconMenu = __webpack_require__(116);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(61);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _svgIcons = __webpack_require__(687);

var _eventsActions = __webpack_require__(52);

var _editEventModal = __webpack_require__(304);

var _editEventModal2 = _interopRequireDefault(_editEventModal);

var _actions = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EventCard: {
    displayName: 'EventCard'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/eventsCard/eventCard.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/eventsCard/eventCard.jsx',
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
var EventCard = _wrapComponent('EventCard')(function (_Component) {
  _inherits(EventCard, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function EventCard(props) {
    _classCallCheck(this, EventCard);

    var _this = _possibleConstructorReturn(this, (EventCard.__proto__ || Object.getPrototypeOf(EventCard)).call(this, props));

    _this.state = {
      openAlert: false,
      event: {}
    };

    _this.handleAlertOpen = _this.handleAlertOpen.bind(_this);
    _this.handleAlertClose = _this.handleAlertClose.bind(_this);
    return _this;
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */


  _createClass(EventCard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      $('.modal').modal();
      $('.tooltipped').tooltip();
    }

    /**
     * componentDidMount method
     * @returns { void }
     * */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        event: this.props.event
      });
    }

    /**
     * handleAlertOpen method
     * @returns { void }
     * */

  }, {
    key: 'handleAlertOpen',
    value: function handleAlertOpen() {
      this.setState({ openAlert: true });
    }

    /**
     * handleAlertClose method
     * @returns { void }
     * */

  }, {
    key: 'handleAlertClose',
    value: function handleAlertClose() {
      this.setState({ openAlert: false });
    }

    /**
     * handleEditOpen method
     * @returns { void }
     * */

  }, {
    key: 'handleEditOpen',
    value: function handleEditOpen() {
      this.props.editEventRequestAction(this.state.event);
      $('#add_event_modal').modal('open');
    }

    /**
     * handleDelete method
     * @param {string} id
     * @returns { void }
     * */

  }, {
    key: 'handleDelete',
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
    key: 'showMenu',
    value: function showMenu() {
      var _this3 = this;

      if (this.props.userState.isAuthenticated) {
        return _react3.default.createElement(
          _IconMenu2.default,
          {
            className: 'right-align',
            iconButtonElement: _react3.default.createElement(
              _IconButton2.default,
              null,
              _react3.default.createElement(_moreVert2.default, null)
            ),
            anchorOrigin: { horizontal: 'left', vertical: 'top' },
            targetOrigin: { horizontal: 'left', vertical: 'top' }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'Edit',
            leftIcon: _react3.default.createElement(_svgIcons.EditorModeEdit, null),
            onClick: function onClick() {
              return _this3.handleEditOpen();
            }
          }),
          _react3.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
              return _this3.handleAlertOpen();
            },
            primaryText: 'Delete',
            style: { color: 'red' },
            leftIcon: _react3.default.createElement(_svgIcons.ActionDelete, null)
          })
        );
      }
    }

    /**
     * showStatusBars method
     * @param {string} status
     * @param {string} statusColor
     * @returns { Component }
     * */

  }, {
    key: 'showStatusBars',
    value: function showStatusBars(status, statusColor) {
      var userState = this.props.userState;

      if (userState.isAuthenticated && userState.user.id === this.state.event.userId || userState.user.role) {
        return _react3.default.createElement(
          'span',
          {
            className: (0, _classnames2.default)('status-indicator', 'darken-3', 'white-text', statusColor)
          },
          status
        );
      }
    }

    /**
     * showAlertModal method
     * @param {string} id
     * @returns { Component }
     * */

  }, {
    key: 'showAlertModal',
    value: function showAlertModal(id) {
      var _this4 = this;

      var actions = [_react3.default.createElement(_FlatButton2.default, {
        label: 'Yes',
        primary: true,
        onClick: function onClick() {
          return _this4.handleDelete(id);
        }
      }), _react3.default.createElement(_FlatButton2.default, {
        label: 'No',
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
        'Are you sure you want to delete this event?'
      );
    }

    /**
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      var shareColor = ['red', 'blue', 'yellow', 'green'],
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

      var displayDate = startDate === endDate ? startDate : startDate + ' - ' + endDate;
      var statusColor = status === 'pending' ? shareColor[2] : status === 'rejected' ? shareColor[0] : shareColor[3];

      return _react3.default.createElement(
        'div',
        null,
        this.showAlertModal(id),
        _react3.default.createElement(
          'div',
          { className: 'card', 'data-id': _shortid2.default.generate(id) },
          _react3.default.createElement(
            'div',
            { className: 'card-image' },
            this.showStatusBars(status, statusColor),
            img_url ? _react3.default.createElement('img', { src: img_url, alt: title }) : _react3.default.createElement('img', {
              src: 'http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png',
              alt: title
            }),
            _react3.default.createElement(
              'span',
              {
                className: 'card-title bold',
                style: {
                  right: '0',
                  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'
                }
              },
              title
            ),
            _react3.default.createElement(
              'a',
              {
                className: (0, _classnames2.default)('btn-floating', 'activator', 'halfway-fab', 'waves-effect', 'waves-light', 'tooltipped', floatBtnColor),
                'data-position': 'bottom',
                'data-tooltip': 'share'
              },
              _react3.default.createElement(
                'i',
                { className: 'material-icons' },
                'dehaze'
              )
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'card-content' },
            _react3.default.createElement(
              'p',
              { className: 'small__duration' },
              _react3.default.createElement(
                'i',
                { className: 'material-icons f15' },
                'schedule'
              ),
              displayDate
            ),
            _react3.default.createElement(
              'div',
              null,
              _react3.default.createElement(
                'i',
                { className: 'material-icons f15' },
                'location_on '
              ),
              ' ',
              center ? center.location : "sorry can't get location at this time",
              (this.props.userState.user.id === userId || this.props.userState.user.role) && this.showMenu(id)
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'card-reveal' },
            _react3.default.createElement(
              'span',
              { className: 'card-title grey-text text-darken-4' },
              _react3.default.createElement(
                'a',
                { className: 'bold' },
                title
              ),
              _react3.default.createElement(
                'i',
                { className: 'material-icons right' },
                'close'
              )
            ),
            _react3.default.createElement(
              'p',
              null,
              description
            ),
            _react3.default.createElement(
              'small',
              null,
              _react3.default.createElement(
                'i',
                { className: 'material-icons f15' },
                'location_on'
              ),
              ' ',
              center ? center.location : ''
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 131:
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
     * numberWithCommas Method
     * Converts number to currency, comma seperated currency
     * @param { string } x
     * @returns { string }
     * */

  }, {
    key: 'numberWithCommas',
    value: function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

/***/ 1652:
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

var _SelectField = __webpack_require__(191);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(61);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(22);

var _reactRedux = __webpack_require__(21);

var _propTypes = __webpack_require__(3);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(127);

var _facilities = __webpack_require__(307);

var _facilities2 = _interopRequireDefault(_facilities);

var _modalAction = __webpack_require__(308);

var _helpers = __webpack_require__(131);

var _helpers2 = _interopRequireDefault(_helpers);

var _history = __webpack_require__(130);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AddCenterForm: {
    displayName: 'AddCenterForm'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/addCenterForm.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/addCenterForm.jsx',
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
var AddCenterForm = _wrapComponent('AddCenterForm')(function (_Component) {
  _inherits(AddCenterForm, _Component);

  /**
   * Class Constructor
   * @param { object } props
   * @returns { void }
   * */
  function AddCenterForm(props) {
    _classCallCheck(this, AddCenterForm);

    var _this = _possibleConstructorReturn(this, (AddCenterForm.__proto__ || Object.getPrototypeOf(AddCenterForm)).call(this, props));

    _this.helpers = new _helpers2.default();

    /**
     * @Initialize the component's state.
     * */
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
   * @Void: Get the image data and set the img_url in the state
   * to the binary data url.
   * @param {object} e
   * @return {void}
   * * */


  _createClass(AddCenterForm, [{
    key: 'onFileChange',
    value: function onFileChange(e) {
      var file = e.target.files[0];
      if (file && file.type.indexOf('image/') > -1) {
        // only image file
        if (file.size < 2000000) {
          this.setState({
            img_url: file
          });
        } else {
          Materialize.toast('File too large', 5000, 'red');
        }
      } else {
        Materialize.toast('Image files only please', 5000, 'red');
      }
    }

    /**
     * handleCenterChange Method
     * @param {object} e
     * @returns { void }
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
     * @returns { void }
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
     * @param {object} event
     * @param {object} index
     * @param {object} facilities
     * @returns { void }
     * */

  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event, index, facilities) {
      this.setState({ facilities: facilities });
    }

    /**
     * menuItems Method
     * @param {object} facilityes
     * @returns { component }
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
     * @param {object} e
     * @returns { component }
     * */

  }, {
    key: 'handleCenterSubmit',
    value: function handleCenterSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.isValid()) {
        this.setState({
          isLoading: true
        });
        this.props.createCenterRequest(this.state).then(function () {
          _this2.setState({
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
          });
          _history2.default.push('/centers');
        });
      }
    }

    /**
     * render Method
     * @returns { component }
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
          capacity = _state.capacity;

      var modalTitle = editCenter ? 'Save changes' : 'Add center';

      return _react3.default.createElement(
        'form',
        {
          className: 'col s12',
          id: 'edit-center-form',
          onSubmit: this.handleCenterSubmit,
          encType: 'multipart/form-data'
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
            { className: 'input-field col s6' },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'title',
              nameField: 'title',
              value: title,
              error: errors.title || '',
              type: 'text',
              onChange: this.handleCenterChange,
              label: 'Title'
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            _SelectField2.default,
            {
              multiple: true,
              hintText: 'Select Facilities',
              value: facilities,
              onChange: this.handleSelectChange
            },
            this.menuItems(facilities)
          ),
          _react3.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'location',
              nameField: 'location',
              value: location,
              error: errors.location || '',
              type: 'text',
              onChange: this.handleCenterChange,
              label: 'Location'
            })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'row' },
          _react3.default.createElement(
            'div',
            { className: 'input-field col s6' },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'price',
              nameField: 'price',
              value: price,
              error: errors.price || '',
              type: 'number',
              onChange: this.handleCenterChange,
              label: 'Price',
              minValue: '100'
            })
          ),
          _react3.default.createElement(
            'div',
            { className: 'input-field col s6' },
            _react3.default.createElement(_formInput2.default, {
              fieldId: 'capacity',
              nameField: 'capacity',
              value: capacity,
              error: errors.capacity || '',
              type: 'number',
              onChange: this.handleCenterChange,
              label: 'Capacity'
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
              'label',
              { htmlFor: 'description' },
              'Description'
            ),
            _react3.default.createElement('textarea', {
              id: 'description',
              type: 'text',
              name: 'description',
              onChange: this.handleCenterChange,
              className: 'materialize-textarea validate',
              required: true
            }),
            errors.description ? _react3.default.createElement(
              'span',
              { className: 'red-text accent-1' },
              errors.description
            ) : ''
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
              !isLoading ? modalTitle : _react3.default.createElement('img', {
                style: { marginTop: '10px' },
                src: '/image/loader/loading.gif',
                alt: 'loader'
              })
            )
          )
        )
      );
    }
  }]);

  return AddCenterForm;
}(_react2.Component));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ createCenterRequest: _modalAction.createCenterRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddCenterForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 1658:
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

var _reactRouterDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(22);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _eventCard = __webpack_require__(125);

var _eventCard2 = _interopRequireDefault(_eventCard);

var _centerCard = __webpack_require__(1808);

var _centerCard2 = _interopRequireDefault(_centerCard);

var _helpers = __webpack_require__(131);

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
   * componentDidMount method
   * @returns { void }
   * */


  _createClass(SearchModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var search__back_btn = $('.search__back_btn');
      $('.search__back_btn').on('click', function () {
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
          return _react3.default.createElement(_centerCard2.default, { to: to, center: center, key: _shortid2.default.generate() });
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

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

/***/ }),

/***/ 1682:
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

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(22);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(189);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _DatePicker = __webpack_require__(305);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(121);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(52);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(127);

var _actions = __webpack_require__(27);

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

var EventModal = _wrapComponent("EventModal")(function (_Component) {
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
      if (newProps.bookedCenter) this.setState({ isLoading: false });
      if (newProps.event.eventCreated) location.reload();
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 1683:
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

var _SelectField = __webpack_require__(191);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(61);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(22);

var _reactRedux = __webpack_require__(21);

var _propTypes = __webpack_require__(3);

var _TextField = __webpack_require__(126);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(46);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(127);

var _facilities = __webpack_require__(307);

var _facilities2 = _interopRequireDefault(_facilities);

var _modalAction = __webpack_require__(308);

var _actions = __webpack_require__(27);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 1686:
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

var _reactRedux = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(25);

var _redux = __webpack_require__(22);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _propTypes = __webpack_require__(3);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _queryString = __webpack_require__(310);

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(311);

var _searchAction = __webpack_require__(309);

var _centerCard = __webpack_require__(1808);

var _centerCard2 = _interopRequireDefault(_centerCard);

var _loader = __webpack_require__(92);

var _helpers = __webpack_require__(131);

var _helpers2 = _interopRequireDefault(_helpers);

var _history = __webpack_require__(130);

var _history2 = _interopRequireDefault(_history);

var _searchFasterForm = __webpack_require__(1687);

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
        return _react3.default.createElement(_centerCard2.default, { to: to, center: center, key: _shortid2.default.generate() });
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 1687:
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

var _redux = __webpack_require__(22);

var _reactRedux = __webpack_require__(21);

var _propTypes = __webpack_require__(3);

var _SelectField = __webpack_require__(191);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(61);

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
        { className: 'col s12 full-width' },
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
  style: _propTypes.PropTypes.object,
  onSearch: _propTypes.PropTypes.func.isRequired
};

exports.default = SearchFasterForm;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 1804:
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

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var newState = void 0;
var newCenter = void 0;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actions.ADD_CENTER_SUCCESS:
      newState = Object.assign({}, state);
      newState.centers = newState.centers.concat(action.center);
      return newState;

    case _actions.ADD_CENTER_FAlLURE:
      newCenter = Object.assign({}, action.center);
      return newCenter;

    case _actions.FETCH_CENTERS:
      return action.payload;

    case _actions.LOADMORE_CENTER_REQUEST:
      return _extends({}, state, {
        loadingmore: true,
        loadmore: true
      });

    case _actions.LOADMORE_CENTER_FAILURE:
      return _extends({}, state, {
        loadingmore: false
      });

    case _actions.LOADMORE_CENTER_SUCCESS:
      newState = Object.assign({}, state);
      newState.centers = newState.centers.concat(action.payload);
      newState.loadingmore = false;
      newState.meta.page = parseInt(newState.meta.page + 1, 10);
      newState.meta.pageSize = parseInt(newState.meta.pageSize + action.payload.length, 10);
      if (newState.meta.pageSize === newState.meta.totalCount) {
        newState.loadmore = false;
      }
      return newState;

    case _actions.SEARCH_CENTER_TITLE:
      newState = Object.assign({}, state);
      if (!(0, _isEmpty2.default)(action.payload.centers)) {
        newState = action.payload;
      } else {
        return state;
      }
      return newState;

    case _actions.SEARCH_CENTER_TITLE_FAILED:
      newState = Object.assign({}, state);
      newState.searchFailure = true;
      return newState;

    default:
      return state;
  }
};

/***/ }),

/***/ 1806:
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

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var pageLimit = Object({"SECRET_KEY":"iamgabrieltopseysuavemicah"}).DATA_LIMIT;
var newState = void 0;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actions.FETCH_EVENTS:
      return action.payload;

    case _actions.ADD_EVENT:
      newState = Object.assign({}, state);
      if (newState.events) {
        newState.events.unshift(action.payload);
        newState.totalCount = newState.events.length;
        newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
        return newState;
      }
      newState.events = [];
      newState.events.unshift(action.payload);
      newState.totalCount = newState.events.length;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      newState.eventCreated = true;
      return newState;

    case _actions.ADD_EVENT_FAILURE:
      newState = Object.assign({}, state);
      newState.bookedCenter = true;
      return newState;

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
      newState.sessEvents.events.map(function (event, index) {
        if (event.id === action.payload.id) {
          delete newState.sessEvents.events[index];
        }
      });
      newState.sessEvents.meta.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.meta.pageSize = newState.sessEvents.meta.totalCount;
      newState.sessEvents.meta.pageCount = Math.ceil(newState.sessEvents.meta.totalCount / pageLimit);
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
      newState.sessEvents.events = newState.sessEvents.events.concat(action.payload);
      newState.loadingmore = false;
      newState.sessEvents.meta.page = parseInt(newState.sessEvents.meta.page + 1, 10);
      newState.sessEvents.meta.pageSize = parseInt(newState.sessEvents.meta.pageSize + action.payload.length, 10);
      if (newState.sessEvents.meta.pageSize === newState.sessEvents.meta.totalCount) {
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

/***/ }),

/***/ 1808:
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

var _reactRouterDom = __webpack_require__(25);

var _propTypes = __webpack_require__(3);

var _helpers = __webpack_require__(131);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CenterCard: {
    displayName: 'CenterCard'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerCard/centerCard.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/centerComponent/centerCard/centerCard.jsx',
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
 * CenterCard Class Component
 * */

var CenterCard = _wrapComponent('CenterCard')(function (_Component) {
  _inherits(CenterCard, _Component);

  /**
   * class constructor
   * @param {object} props
   * */
  function CenterCard(props) {
    _classCallCheck(this, CenterCard);

    var _this = _possibleConstructorReturn(this, (CenterCard.__proto__ || Object.getPrototypeOf(CenterCard)).call(this, props));

    _this.helper = new _helpers2.default();
    return _this;
  }

  /**
   * componentWillMount Method
   * @return {void}
   * */


  _createClass(CenterCard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      $('.modal').modal();
    }

    /**
     * showPriceBar Method
     * @param {string} priceString
     * @return {component}
     * */

  }, {
    key: 'showPriceBar',
    value: function showPriceBar(priceString) {
      return _react3.default.createElement(
        'span',
        { className: 'status-indicator darken-3 transparent-status-bar white-text' },
        '\u20A6',
        helpers.numberWithCommas(priceString)
      );
    }

    /**
     * render Method
     * @return {component}
     * */

  }, {
    key: 'render',
    value: function render() {
      var center = this.props.center;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.to, href: this.props.to },
          _react3.default.createElement(
            'div',
            { className: 'card' },
            this.showPriceBar(center.price),
            _react3.default.createElement(
              'div',
              { className: 'card-image' },
              center.img_url ? _react3.default.createElement('img', { src: center.img_url, alt: center.title }) : _react3.default.createElement('img', {
                src: 'http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png',
                alt: center.title
              })
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
        )
      );
    }
  }]);

  return CenterCard;
}(_react2.Component));

CenterCard.propTypes = {
  center: _propTypes.PropTypes.object,
  to: _propTypes.PropTypes.string
};

exports.default = CenterCard;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 27:
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
 * ADD_EVENT action constants.
 * To add a new event to the database and to the store.
 * * */
var ADD_EVENT_FAILURE = exports.ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

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

/***/ 304:
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

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(22);

var _propTypes = __webpack_require__(3);

var _Dialog = __webpack_require__(51);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(189);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(126);

var _TextField2 = _interopRequireDefault(_TextField);

var _DatePicker = __webpack_require__(305);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(121);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(52);

var _formInput = __webpack_require__(75);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(127);

var _actions = __webpack_require__(27);

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
      if (file && file.type.indexOf('image/') > -1) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return ['Chairs', 'Security', 'Air Conditioner', 'Tables', 'Changing Room', 'Parking Space', 'Stage', 'Lighting', 'Power', 'Generator', 'Rest Room', 'Television', 'Swimming pool'];
};

var centerBackgrounds = exports.centerBackgrounds = ['https://www.propertypro.ng/blog/wp-content/uploads/2016/10/lekki-event-center-decorated2.jpg', 'https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2015/03/188388-640x427.jpg', 'https://1ycj2r3bavx920ilxq3m8nxc157p-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/decor-more-Banner-980-x-450.jpg', 'http://www.landmarklagos.com/wp-content/uploads/2015/09/banner-3.jpg', 'https://aggieeventcenter.com/wp-content/uploads/2014/04/blue-room-lights.jpg', 'http://merryacres.com/wp-content/uploads/2014/01/slider7.jpg'];

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

var _setAuthenticationToken = __webpack_require__(123);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _ = __webpack_require__(27);

var _history = __webpack_require__(130);

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

var _queryString = __webpack_require__(310);

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(311);

var _index = __webpack_require__(52);

var _ = __webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prepareCenterSearchQuery = function prepareCenterSearchQuery(searchVal) {
  var searchObjectString = void 0,
      searchApi = void 0,
      api = '/api/v1/centers?';
  searchObjectString = _queryString2.default.stringify(searchVal, {
    arrayFormat: 'bracket'
  });
  searchApi = '' + api + searchObjectString;
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
    var searchApi = prepareCenterSearchQuery(value, 'title');
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStatusEventAction = exports.loadMoreEvents = exports.deleteEventRequest = exports.editEventAction = exports.editEventRequestAction = exports.fetchSessionEventRequest = exports.fetchEventRequest = exports.createEventRequest = exports.searchEventsDispatch = undefined;

var _redux = __webpack_require__(22);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(27);

var _setAuthenticationToken = __webpack_require__(123);

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _history = __webpack_require__(130);

var _history2 = _interopRequireDefault(_history);

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

    case 'failure':
      return {
        type: _.ADD_EVENT_FAILURE
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

      if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red lighten-2');
        dispatch(eventsDispatchAction('failure'));
      } else {
        dispatch(eventsDispatchAction('add', data.event));
        Materialize.toast(data.message, 5000, 'teal lighten-2');
        _history2.default.push('/my-events');
      }
    }).catch(function (err) {
      console.log(err);
      dispatch({
        type: _.EDIT_EVENT_FAILURE
      });
      Materialize.toast('An Error Occurred..!!!', 5000, 'red lighten-2');
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
        Materialize.toast('Error in connection', 5000, 'red lighten-2');
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
        Materialize.toast(data.message, 5000, 'teal lighten-2');
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
        Materialize.toast('Error in connection', 5000, 'red lighten-2');
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
        Materialize.toast(data.message, 5000, 'teal lighten-2');
        return dispatch(eventsDispatchAction('delete', data.event));
      }
      Materialize.toast(data.message, 5000, 'red lighten-2');
      return data;
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
          Materialize.toast(data.message, 5000, 'teal lighten-2');
          return dispatch({
            type: _.EVENT_STATUS_CHANGE
          });
        }
        Materialize.toast(data.message, 5000, 'red lighten-2');
      })
    );
  };
};

/***/ }),

/***/ 678:
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

var _redux = __webpack_require__(22);

var _reactRedux = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(25);

var _queryString = __webpack_require__(310);

var _queryString2 = _interopRequireDefault(_queryString);

var _IconMenu = __webpack_require__(116);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(90);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menu = __webpack_require__(91);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(120);

var _search2 = _interopRequireDefault(_search);

var _MenuItem = __webpack_require__(61);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(184);

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = __webpack_require__(185);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _FlatButton = __webpack_require__(42);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _accountCircle = __webpack_require__(122);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _authActions = __webpack_require__(62);

var _history = __webpack_require__(130);

var _history2 = _interopRequireDefault(_history);

var _facilities = __webpack_require__(307);

var _searchFasterForm = __webpack_require__(1687);

var _searchFasterForm2 = _interopRequireDefault(_searchFasterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HeaderBanner: {
    displayName: 'HeaderBanner'
  }
};

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/headbanner.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/bodyComponents/headNav/headbanner.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var searchStyle = {
  main: {
    backgroundColor: 'white',
    borderRadius: '8px'
  },
  bold: {
    fontWeight: 200
  }
};

/**
 * MyEventCardHolder Class Component
 * */

var HeaderBanner = _wrapComponent('HeaderBanner')(function (_Component) {
  _inherits(HeaderBanner, _Component);

  /**
   * Class contructor
   * @param { object } props
   * */
  function HeaderBanner(props) {
    _classCallCheck(this, HeaderBanner);

    var _this = _possibleConstructorReturn(this, (HeaderBanner.__proto__ || Object.getPrototypeOf(HeaderBanner)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);
    return _this;
  }

  /**
   * onSearch Method
   * @param { object } query
   * @returns { void }
   * */


  _createClass(HeaderBanner, [{
    key: 'onSearch',
    value: function onSearch(query) {
      var qString = _queryString2.default.stringify(query, { arrayFormat: 'bracket' });
      _history2.default.push('/centers?' + qString);
    }

    /**
     * handleClose method
     * @returns { void }
     * */

  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }

    /**
     * handleToggle method
     * @returns { void }
     * */

  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({ open: !this.state.open });
    }

    /**
     * showAuthenticationLinks method
     * @returns { component }
     * */

  }, {
    key: 'showAuthenticationLinks',
    value: function showAuthenticationLinks() {
      // Show Sign-in and Sign-up
      // links only if user isn't signed in
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          'span',
          null,
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: '/signin' },
              'Sign In'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouterDom.Link,
              { to: '/signup' },
              'Sign Up'
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
              _react3.default.createElement(_accountCircle2.default, { color: 'white' })
            ),
            anchorOrigin: { horizontal: 'left', vertical: 'top' },
            targetOrigin: { horizontal: 'left', vertical: 'top' }
          },
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'Hello ' + this.props.activeState.user.lastName
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'My Events',
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: '/my-events' })
          }),
          _react3.default.createElement(_Divider2.default, null),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'sign out',
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: '/signout' })
          })
        )
      );
    }

    /**
     * showModal method
     * @returns { void }
     * */

  }, {
    key: 'showModal',
    value: function showModal() {
      $('#search__modal').modal('open');
    }

    /**
     * showModal method
     * @returns { void }
     * */

  }, {
    key: 'changeHeaderBackground',
    value: function changeHeaderBackground() {
      var i = 0;
      var el = document.getElementsByClassName('header'); // el doesn't change
      function toggle() {
        el[0].style.backgroundImage = 'url(' + _facilities.centerBackgrounds[i] + ')'; // set the image
        /* *
          * wraps around centerBackgrounds
          * length and update the counter,
          * then reset when length is reached
          * */
        i = (i + 1) % _facilities.centerBackgrounds.length;
      }
      setInterval(toggle, 5000);
    }

    /**
     * renderSidenav method
     * @returns { component }
     * */

  }, {
    key: 'renderSidenav',
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
            primaryText: 'Search'
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'Hello ' + (this.props.activeState.user.lastName || 'Guest')
          }),
          _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'My Events',
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: '/my-events' })
          }),
          _react3.default.createElement(_Divider2.default, null),
          !this.props.activeState.isAuthenticated ? this.showAuthenticationLinks() : _react3.default.createElement(_MenuItem2.default, {
            primaryText: 'sign out',
            containerElement: _react3.default.createElement(_reactRouterDom.Link, { to: '/signout' })
          })
        ),
        _react3.default.createElement(_FlatButton2.default, {
          className: 'right hide-on-med-and-up',
          style: { margin: '10px', color: '#FFFFFF' },
          onClick: this.handleToggle,
          icon: _react3.default.createElement(_menu2.default, null)
        })
      );
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

      this.changeHeaderBackground();
      return _react3.default.createElement(
        'div',
        { className: 'header' },
        _react3.default.createElement(
          'div',
          { className: 'header__overlay' },
          _react3.default.createElement(
            'div',
            { className: 'container' },
            _react3.default.createElement(
              'nav',
              { className: 'wow fadeInDown' },
              _react3.default.createElement(
                'div',
                { className: 'nav-wrapper' },
                _react3.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'brand-logo logo' },
                  _react3.default.createElement(
                    'p',
                    null,
                    'Boots EM'
                  )
                ),
                this.renderSidenav(),
                _react3.default.createElement(
                  'ul',
                  { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
                  _react3.default.createElement(
                    'li',
                    null,
                    _react3.default.createElement(
                      'a',
                      {
                        onClick: function onClick() {
                          return _this3.showModal();
                        },
                        className: 'modal-trigger',
                        id: 'search__view'
                      },
                      _react3.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'search'
                      )
                    )
                  ),
                  _react3.default.createElement(
                    'li',
                    null,
                    _react3.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/centers' },
                      'List of centers'
                    )
                  ),
                  this.showAuthenticationLinks()
                )
              )
            ),
            _react3.default.createElement(
              'div',
              { className: 'center-align header__detail' },
              _react3.default.createElement(
                'h4',
                { className: 'wow fadeInLeft' },
                'World\'s Leading Events Centers'
              ),
              _react3.default.createElement(
                'p',
                { className: 'wow fadeInLeft' },
                'Book Events Centers In Your Area'
              ),
              _react3.default.createElement(
                'div',
                {
                  className: 'row center-align search-faster-form full-width',
                  style: searchStyle.main
                },
                _react3.default.createElement(
                  'div',
                  { className: 'col s12' },
                  _react3.default.createElement(
                    'h4',
                    { className: 'center-align gradient_text', style: searchStyle.bold },
                    'Find and Book Event Centers'
                  )
                ),
                _react3.default.createElement(_searchFasterForm2.default, { onSearch: this.onSearch })
              )
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 679:
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

var _reactRedux = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(25);

var _redux = __webpack_require__(22);

var _shortid = __webpack_require__(35);

var _shortid2 = _interopRequireDefault(_shortid);

var _propTypes = __webpack_require__(3);

var _isEmpty = __webpack_require__(44);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _queryString = __webpack_require__(310);

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(311);

var _centerCard = __webpack_require__(1808);

var _centerCard2 = _interopRequireDefault(_centerCard);

var _searchAction = __webpack_require__(309);

var _loader = __webpack_require__(92);

var _helpers = __webpack_require__(131);

var _helpers2 = _interopRequireDefault(_helpers);

var _history = __webpack_require__(130);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  IndexCenterCardHolder: {
    displayName: 'IndexCenterCardHolder'
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
var IndexCenterCardHolder = _wrapComponent('IndexCenterCardHolder')(function (_Component) {
  _inherits(IndexCenterCardHolder, _Component);

  /**
     * Class contructor
     * @param { object } props
     * */
  function IndexCenterCardHolder(props) {
    _classCallCheck(this, IndexCenterCardHolder);

    var _this = _possibleConstructorReturn(this, (IndexCenterCardHolder.__proto__ || Object.getPrototypeOf(IndexCenterCardHolder)).call(this, props));

    _this.helper = new _helpers2.default();
    _this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null
    };
    return _this;
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */


  _createClass(IndexCenterCardHolder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.modal').modal();
      this.props.fetchCentersAction();
    }

    /**
     * componentWillReceiveProps Method
     * @param { object } newProps
     * @returns { void }
     * */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _newProps$centerStore = newProps.centerStore.meta,
          page = _newProps$centerStore.page,
          pageCount = _newProps$centerStore.pageCount,
          pageSize = _newProps$centerStore.pageSize,
          totalCount = _newProps$centerStore.totalCount,
          _newProps$centerStore2 = newProps.centerStore,
          loadingmore = _newProps$centerStore2.loadingmore,
          loadmore = _newProps$centerStore2.loadmore;


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
     * showCentersCard Method
     * @returns { Component }
     * */

  }, {
    key: 'showCentersCard',
    value: function showCentersCard() {
      var _this2 = this;

      var centers = this.props.centerStore.centers;

      return centers.sort(function (firstObj, secObj) {
        return secObj.id - firstObj.id;
      }).map(function (center) {
        var to = 'center/' + center.id + '/' + _this2.helper.sanitizeString(center.title);
        return _react3.default.createElement(_centerCard2.default, { to: to, center: center, key: _shortid2.default.generate() });
      });
    }

    /**
     * initInfiniteScroll Method
     * @returns { void }
     * */

  }, {
    key: 'initInfiniteScroll',
    value: function initInfiniteScroll() {
      var _this3 = this;

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
          offset = _this3.state.page + 1;
          if (_this3.state.loadmore) {
            _this3.props.loadMoreCenters(offset);
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
      var _this4 = this;

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
                return _this4.loadMore();
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
     * render method
     * @returns { Component }
     * */

  }, {
    key: 'render',
    value: function render() {
      this.autoLoadMore();
      var isLoading = this.state.isLoading;

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
              this.showCentersCard()
            ),
            isLoading ? '' : this.renderNoCenter(),
            this.showLoadMoreButton()
          )
        )
      );
    }
  }]);

  return IndexCenterCardHolder;
}(_react2.Component));

IndexCenterCardHolder.propTypes = {
  fetchCentersAction: _propTypes.PropTypes.func.isRequired,
  centerStore: _propTypes.PropTypes.object.isRequired,
  loadMoreCenters: _propTypes.PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchCentersAction: _fetchCenterAction.fetchCentersAction, loadMoreCenters: _fetchCenterAction.loadMoreCenters, searchAction: _searchAction.searchAction }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    centerStore: state.centerReducer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IndexCenterCardHolder);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ })

})
//# sourceMappingURL=hot-update.js.map