webpackHotUpdate(0,{

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SelectField = __webpack_require__(149);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(101);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shortid = __webpack_require__(32);

var _shortid2 = _interopRequireDefault(_shortid);

var _redux = __webpack_require__(19);

var _reactRedux = __webpack_require__(18);

var _propTypes = __webpack_require__(4);

var _TextField = __webpack_require__(102);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(92);

var _formInput = __webpack_require__(59);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(103);

var _facilities = __webpack_require__(246);

var _facilities2 = _interopRequireDefault(_facilities);

var _modalAction = __webpack_require__(247);

var _actions = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  underlineStyle: {
    borderColor: _colors.teal300
  }
};

var EditCenterForm = function (_Component) {
  _inherits(EditCenterForm, _Component);

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

  /* *
     * @Send activeCenter details to updateState method
     * */


  _createClass(EditCenterForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateState(this.props.activeCenter);
    }

    /* *
       * @Void: Get the image data and set the img_url in the state
       * to the binary data url.
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
              img_url: reader.result // store image as binary data string
              // img_url: file
            });
          };
        } else {
          Materialize.toast('File too large', 5000);
        }
      } else {
        Materialize.toast('Image files only', 5000);
      }
    }

    /* *
       * @Check if edit center is set to true.
       * and get the keys from center object and populate the state
       * with its appropriate values.
       * */

  }, {
    key: 'updateState',
    value: function updateState(props) {
      if (props.editCenter) {
        var _props$centr = props.centr,
            id = _props$centr.id,
            title = _props$centr.title,
            img_url = _props$centr.img_url,
            facilities = _props$centr.facilities,
            _location = _props$centr.location,
            price = _props$centr.price,
            capacity = _props$centr.capacity,
            description = _props$centr.description;

        this.setState({
          editCenter: true,
          id: id,
          title: title,
          img_url: img_url,
          facilities: facilities,
          location: _location,
          price: price.toString(),
          capacity: capacity.toString(),
          description: description
        });
      }
    }
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
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event, index, facilities) {
      this.setState({ facilities: facilities });
    }
  }, {
    key: 'menuItems',
    value: function menuItems(facilityes) {
      return (0, _facilities2.default)().map(function (name) {
        return _react2.default.createElement(_MenuItem2.default, {
          key: _shortid2.default.generate(),
          insetChildren: true,
          checked: facilityes && facilityes.indexOf(name) > -1,
          value: name,
          primaryText: name
        });
      });
    }
  }, {
    key: 'handleCenterSubmit',
    value: function handleCenterSubmit(e) {
      var _this3 = this;

      e.preventDefault();

      if (this.isValid()) {
        this.setState({
          isLoading: true
        });

        this.props.updateCenterRequest(this.state).then(function (res) {
          _this3.setState({ isLoading: false });
          // console.log(res);
          if (res.type === _actions.EDIT_CENTER) {
            Materialize.toast('Center has been updated successfully!!', 5000);
            location.reload();
          } else {
            Materialize.toast('Houston, we have a problem! We are working on it', 5000);
          }
        }).catch(function () {
          _this3.setState({ isLoading: false });
          Materialize.toast('Error creating center..!!', 5000);
        });
      }
    }
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
      // console.log(this.state);

      return _react2.default.createElement(
        'form',
        { style: { marginTop: '20px' }, className: 'col s12', id: 'edit-center-form', onSubmit: this.handleCenterSubmit },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col s12 m6' },
            _react2.default.createElement(
              'div',
              { className: 'file-field input-field' },
              _react2.default.createElement(
                'div',
                { className: 'btn' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Upload'
                ),
                _react2.default.createElement('input', {
                  type: 'file',
                  name: 'img_url',
                  onChange: this.onFileChange,
                  accept: 'image/jpeg,jpg,png,gif'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'file-path-wrapper' },
                _react2.default.createElement('input', { className: 'file-path validate', type: 'text', placeholder: 'Upload an image here' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react2.default.createElement(_TextField2.default, {
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
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react2.default.createElement(
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
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react2.default.createElement(_TextField2.default, {
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
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react2.default.createElement(_TextField2.default, {
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
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12 m6' },
            _react2.default.createElement(_TextField2.default, {
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
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react2.default.createElement(_TextField2.default, {
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
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react2.default.createElement(
              'button',
              {
                type: 'submit',
                id: 'submitCenterForm',
                name: 'action',
                className: 'btn col s12 white-text gradient__bg btn-register waves-effect waves-light',
                disabled: isLoading ? 'disabled' : ''
              },
              !isLoading ? 'Save Changes' : _react2.default.createElement('img', { style: { marginTop: '10px' }, src: '/image/loader/loading.gif', alt: 'save-changes-loader' })
            )
          )
        )
      );
    }
  }]);

  return EditCenterForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeCenter: state.activeCenter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updateCenterRequest: _modalAction.updateCenterRequest }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditCenterForm);

/***/ })

})
//# sourceMappingURL=hot-update.js.map