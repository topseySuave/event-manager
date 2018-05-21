webpackHotUpdate(0,{

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

/***/ })

})
//# sourceMappingURL=hot-update.js.map