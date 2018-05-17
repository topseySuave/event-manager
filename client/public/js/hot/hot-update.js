webpackHotUpdate(0,{1680:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(15);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(16);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(0);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(17);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _SelectField = __webpack_require__(191);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _MenuItem = __webpack_require__(59);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _shortid = __webpack_require__(36);\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _redux = __webpack_require__(23);\n\nvar _reactRedux = __webpack_require__(22);\n\nvar _propTypes = __webpack_require__(4);\n\nvar _TextField = __webpack_require__(127);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _colors = __webpack_require__(45);\n\nvar _formInput = __webpack_require__(76);\n\nvar _formInput2 = _interopRequireDefault(_formInput);\n\nvar _validateInput = __webpack_require__(128);\n\nvar _facilities = __webpack_require__(307);\n\nvar _facilities2 = _interopRequireDefault(_facilities);\n\nvar _modalAction = __webpack_require__(308);\n\nvar _actions = __webpack_require__(28);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  EditCenterForm: {\n    displayName: 'EditCenterForm'\n  }\n};\n\nvar _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/editCenterForm.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/gabrielmicah/Desktop/projects/event-manager/client/src/components/modals/centerModalForms/editCenterForm.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformHmrLibIndexJs2(_UsersGabrielmicahDesktopProjectsEventManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar styles = {\n  underlineStyle: {\n    borderColor: 'transparent'\n  }\n};\n\n/**\n * EditCenterForm Class Component\n * */\n\nvar EditCenterForm = _wrapComponent('EditCenterForm')(function (_Component) {\n  _inherits(EditCenterForm, _Component);\n\n  /**\n   * EditCenterForm Class Constructor\n   * @param { object } props\n   * */\n  function EditCenterForm(props) {\n    _classCallCheck(this, EditCenterForm);\n\n    /**\n     * @Initialize the component's state.\n     * */\n    var _this = _possibleConstructorReturn(this, (EditCenterForm.__proto__ || Object.getPrototypeOf(EditCenterForm)).call(this, props));\n\n    _this.state = {\n      errors: {},\n      editCenter: false,\n      isLoading: false,\n      title: '',\n      img_url: {},\n      facilities: [],\n      location: '',\n      price: '',\n      capacity: '',\n      description: ''\n    };\n\n    _this.handleCenterChange = _this.handleCenterChange.bind(_this);\n    _this.handleSelectChange = _this.handleSelectChange.bind(_this);\n    _this.handleCenterSubmit = _this.handleCenterSubmit.bind(_this);\n    _this.onFileChange = _this.onFileChange.bind(_this);\n    return _this;\n  }\n\n  /**\n    * componentDidMount Method\n    * @Send activeCenter details to updateState method\n    * @return { void }\n    * */\n\n\n  _createClass(EditCenterForm, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.updateState(this.props.activeCenter);\n    }\n\n    /**\n     * @Void: Get the image data and set the img_url in the state\n     * to the binary data url.\n     * @param { object } e\n     * @return { void }\n     * * */\n\n  }, {\n    key: 'onFileChange',\n    value: function onFileChange(e) {\n      var _this2 = this;\n\n      var file = e.target.files[0];\n      if (file.type.indexOf('image/') > -1) {\n        // only image file\n        if (file.size < 2000000) {\n          // Must not be more than 2mb\n          var reader = new FileReader(); // instance of the FileReader\n          reader.readAsDataURL(file); // read the local file\n          reader.onloadend = function () {\n            _this2.setState({\n              img_url: file\n            });\n          };\n        } else {\n          Materialize.toast('File too large', 5000, 'red');\n        }\n      } else {\n        Materialize.toast('Image files only', 5000, 'red');\n      }\n    }\n\n    /**\n      * @Check if edit center is set to true.\n      * and get the keys from center object and populate the state\n      * with its appropriate values.\n      * updateState Method\n      * @param { object } props\n      * @return { void }\n      * */\n\n  }, {\n    key: 'updateState',\n    value: function updateState(props) {\n      if (props.editCenter) {\n        var _props$center = props.center,\n            id = _props$center.id,\n            title = _props$center.title,\n            img_url = _props$center.img_url,\n            facilities = _props$center.facilities,\n            location = _props$center.location,\n            price = _props$center.price,\n            capacity = _props$center.capacity,\n            description = _props$center.description;\n\n        this.setState({\n          editCenter: true,\n          id: id,\n          title: title,\n          img_url: img_url,\n          facilities: facilities,\n          location: location,\n          price: price.toString(),\n          capacity: capacity.toString(),\n          description: description\n        });\n      }\n    }\n\n    /**\n      * handleCenterChange Method\n      * @param { object } e\n      * @return { void }\n      * */\n\n  }, {\n    key: 'handleCenterChange',\n    value: function handleCenterChange(e) {\n      if (this.state.errors[e.target.name]) {\n        var _setState;\n\n        var errors = Object.assign({}, !!this.state.errors);\n        delete errors[e.target.name];\n        this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'errors', errors), _setState));\n      } else {\n        this.setState(_defineProperty({}, e.target.name, e.target.value));\n      }\n    }\n\n    /**\n      * isValid Method\n      * @return { void }\n      * */\n\n  }, {\n    key: 'isValid',\n    value: function isValid() {\n      var _validateCenterInput = (0, _validateInput.validateCenterInput)(this.state),\n          errors = _validateCenterInput.errors,\n          isValid = _validateCenterInput.isValid;\n\n      if (!isValid) {\n        this.setState({ errors: errors });\n      }\n      return isValid;\n    }\n\n    /**\n      * handleSelectChange Method\n      * @param { object } event\n      * @param { string } index\n      * @param { array } facilities\n      * @return { void }\n      * */\n\n  }, {\n    key: 'handleSelectChange',\n    value: function handleSelectChange(event, index, facilities) {\n      this.setState({ facilities: facilities });\n    }\n\n    /**\n      * menuItems Method\n      * @param { object } facilityes\n      * @return { void }\n      * */\n\n  }, {\n    key: 'menuItems',\n    value: function menuItems(facilityes) {\n      return (0, _facilities2.default)().map(function (name) {\n        return _react3.default.createElement(_MenuItem2.default, {\n          key: _shortid2.default.generate(),\n          insetChildren: true,\n          checked: facilityes && facilityes.indexOf(name) > -1,\n          value: name,\n          primaryText: name\n        });\n      });\n    }\n\n    /**\n      * handleCenterSubmit Method\n      * @param { object } e\n      * @return { void }\n      * */\n\n  }, {\n    key: 'handleCenterSubmit',\n    value: function handleCenterSubmit(e) {\n      e.preventDefault();\n\n      if (this.isValid()) {\n        this.setState({\n          isLoading: true\n        });\n\n        this.props.updateCenterRequest(this.state);\n        // .then((res) => {\n        //   console.log(res);\n        //   this.setState({ isLoading: false });\n        //   if (res.type === EDIT_CENTER) {\n        //     Materialize.toast('Center has been updated successfully!!', 5000, 'teal');\n        //     location.reload();\n        //   } else {\n        //     Materialize.toast('Houston, we have a problem! We are working on it', 5000, 'red');\n        //   }\n        // })\n        // .catch(() => {\n        //   this.setState({ isLoading: false });\n        //   Materialize.toast('Error creating center..!!', 5000, 'red');\n        // });\n      }\n    }\n\n    /**\n      * render Method\n      * @return { component }\n      * */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          editCenter = _state.editCenter,\n          errors = _state.errors,\n          isLoading = _state.isLoading,\n          title = _state.title,\n          location = _state.location,\n          facilities = _state.facilities,\n          price = _state.price,\n          capacity = _state.capacity,\n          description = _state.description;\n\n\n      return _react3.default.createElement(\n        'form',\n        { style: { marginTop: '20px' }, className: 'col s12', id: 'edit-center-form', onSubmit: this.handleCenterSubmit },\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'col s12 m6' },\n            _react3.default.createElement(\n              'div',\n              { className: 'file-field input-field' },\n              _react3.default.createElement(\n                'div',\n                { className: 'btn' },\n                _react3.default.createElement(\n                  'span',\n                  null,\n                  'Upload'\n                ),\n                _react3.default.createElement('input', {\n                  type: 'file',\n                  name: 'img_url',\n                  onChange: this.onFileChange,\n                  accept: 'image/jpeg,jpg,png,gif'\n                })\n              ),\n              _react3.default.createElement(\n                'div',\n                { className: 'file-path-wrapper' },\n                _react3.default.createElement('input', { className: 'file-path validate', type: 'text', placeholder: 'Upload an image here' })\n              )\n            )\n          ),\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12 m6' },\n            _react3.default.createElement(_TextField2.default, {\n              id: 'text-field-controlled',\n              hintText: 'Title',\n              value: title,\n              name: 'title',\n              errorText: errors.title || '',\n              underlineStyle: styles.underlineStyle,\n              underlineFocusStyle: styles.underlineStyle,\n              onChange: this.handleCenterChange\n            })\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12 m6' },\n            _react3.default.createElement(\n              _SelectField2.default,\n              {\n                multiple: true,\n                hintText: 'Select Facilities',\n                value: facilities,\n                onChange: this.handleSelectChange\n              },\n              this.menuItems(facilities)\n            )\n          ),\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12 m6' },\n            _react3.default.createElement(_TextField2.default, {\n              id: 'text-field-controlled',\n              hintText: 'location',\n              value: location,\n              name: 'location',\n              errorText: errors.location || '',\n              underlineStyle: styles.underlineStyle,\n              underlineFocusStyle: styles.underlineStyle,\n              onChange: this.handleCenterChange\n            })\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12 m6' },\n            _react3.default.createElement(_TextField2.default, {\n              id: 'text-field-controlled',\n              hintText: 'Price',\n              value: price,\n              name: 'price',\n              type: 'number',\n              errorText: errors.price || '',\n              underlineStyle: styles.underlineStyle,\n              underlineFocusStyle: styles.underlineStyle,\n              onChange: this.handleCenterChange\n            })\n          ),\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12 m6' },\n            _react3.default.createElement(_TextField2.default, {\n              id: 'text-field-controlled',\n              hintText: 'Capacity',\n              value: capacity,\n              name: 'capacity',\n              type: 'number',\n              errorText: errors.capacity || '',\n              underlineStyle: styles.underlineStyle,\n              underlineFocusStyle: styles.underlineStyle,\n              onChange: this.handleCenterChange\n            })\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            _react3.default.createElement(_TextField2.default, {\n              hintText: 'Description',\n              value: description,\n              name: 'description',\n              errorText: errors.description || '',\n              multiLine: true,\n              fullWidth: true,\n              onChange: this.handleCenterChange,\n              underlineStyle: styles.underlineStyle,\n              underlineFocusStyle: styles.underlineStyle,\n              rows: 2,\n              rowsMax: 5\n            })\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            _react3.default.createElement(\n              'button',\n              {\n                type: 'submit',\n                id: 'submitCenterForm',\n                name: 'action',\n                className: 'btn col s12 white-text gradient__bg btn-register waves-effect waves-light',\n                disabled: isLoading ? 'disabled' : ''\n              },\n              !isLoading ? 'Save Changes' : _react3.default.createElement('img', { style: { marginTop: '10px' }, src: '/image/loader/loading.gif', alt: 'save-changes-loader' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return EditCenterForm;\n}(_react2.Component));\n\nEditCenterForm.propTypes = {\n  history: _propTypes.PropTypes.object.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    activeCenter: state.activeCenter\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ updateCenterRequest: _modalAction.updateCenterRequest }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditCenterForm);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/components/modals/centerModalForms/editCenterForm.jsx\n// module id = 1680\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/components/modals/centerModalForms/editCenterForm.jsx?")}});