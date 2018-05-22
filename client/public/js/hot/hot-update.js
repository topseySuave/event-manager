webpackHotUpdate(0,{

/***/ 1684:
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

var _RaisedButton = __webpack_require__(193);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _DatePicker = __webpack_require__(306);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = __webpack_require__(124);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _eventsActions = __webpack_require__(64);

var _formInput = __webpack_require__(77);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(133);

var _actions = __webpack_require__(27);

var _history = __webpack_require__(62);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ })

})
//# sourceMappingURL=hot-update.js.map