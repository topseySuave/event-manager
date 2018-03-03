webpackHotUpdate(0,{

/***/ 1532:
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

var _reactDocumentTitle = __webpack_require__(59);

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

var _activeCenterAction = __webpack_require__(1533);

var _deleteCenterAction = __webpack_require__(1534);

var _actions = __webpack_require__(23);

var _currentEventForCenter = __webpack_require__(1535);

var _currentEventForCenter2 = _interopRequireDefault(_currentEventForCenter);

var _RecommCenter = __webpack_require__(1536);

var _RecommCenter2 = _interopRequireDefault(_RecommCenter);

var _EventModal = __webpack_require__(1538);

var _EventModal2 = _interopRequireDefault(_EventModal);

var _editCenterForm = __webpack_require__(1539);

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

        _this.handleOpen = function () {
            _this.props.editCenterRequestAction();
            _this.setState({ open: true });
        };

        _this.handleClose = function () {
            _this.setState({ open: false });
        };

        _this.handleAlertOpen = function () {
            _this.setState({ openAlert: true });
        };

        _this.handleAlertClose = function () {
            _this.setState({ openAlert: false });
        };

        _this.state = {
            isLoading: true,
            openAlert: false,
            open: false,
            events: [],
            activeCenter: {
                centr: {
                    title: 'center'
                }
            }
        };
        return _this;
    }

    _createClass(CenterDetail, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var params = this.props.params;
            this.props.fetchCenterAction(params.id);
        }

        /**
         * TODO: modify center details component to update and change the redux store in respond to route change
         * **/

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
                this.setState({ isLoading: false, events: newProps.activeCenterDetail.events, activeCenter: newProps.activeCenterDetail });
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
        key: 'editCenter',
        value: function editCenter() {
            this.props.editCenterRequestAction();
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

            if (isAdmin) return _react2.default.createElement(
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
    }, {
        key: 'showBookCenterButton',
        value: function showBookCenterButton() {
            var isSignedIn = this.props.activeUser.isAuthenticated;
            if (isSignedIn) return _react2.default.createElement(_EventModal2.default, null);
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

            if (isAdmin) return _react2.default.createElement(
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
                            { className: 'center__holdr' },
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
            } else {
                return '';
            }
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

/***/ }),

/***/ 1539:
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

var _formInput = __webpack_require__(58);

var _formInput2 = _interopRequireDefault(_formInput);

var _validateInput = __webpack_require__(103);

var _facilities2 = __webpack_require__(246);

var _facilities3 = _interopRequireDefault(_facilities2);

var _redux = __webpack_require__(19);

var _reactRedux = __webpack_require__(18);

var _propTypes = __webpack_require__(4);

var _modalAction = __webpack_require__(247);

var _actions = __webpack_require__(23);

var _TextField = __webpack_require__(102);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(92);

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
         **/
        var _this = _possibleConstructorReturn(this, (EditCenterForm.__proto__ || Object.getPrototypeOf(EditCenterForm)).call(this, props));

        _this.handleSelectChange = function (event, index, facilities) {
            return _this.setState({ facilities: facilities });
        };

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
     * @Send activeCenter details to updateState method
     * */


    _createClass(EditCenterForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateState(this.props.activeCenter);
        }

        /**
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
                    _facilities = _props$centr.facilities,
                    _location = _props$centr.location,
                    price = _props$centr.price,
                    capacity = _props$centr.capacity,
                    description = _props$centr.description;

                this.setState({
                    editCenter: true,
                    id: id,
                    title: title,
                    img_url: img_url,
                    facilities: _facilities,
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
            if (!!this.state.errors[e.target.name]) {
                var _setState;

                var errors = Object.assign({}, !!this.state.errors);
                delete errors[e.target.name];
                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'errors', errors), _setState));
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }

        /**
         * @Void: Get the image data and set the img_url in the state
         * to the binary data url.
         * **/

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
                            img_url: reader.result //store image as binary data string
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
        key: 'menuItems',
        value: function menuItems(facilityes) {
            return (0, _facilities3.default)().map(function (name) {
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
                                _react2.default.createElement('input', { type: 'file', name: 'img_url', onChange: this.onFileChange,
                                    accept: 'image/jpeg,jpg,png,gif' })
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
                            !isLoading ? "Save Changes" : _react2.default.createElement('img', { style: { marginTop: "10px" }, src: '/image/loader/loading.gif' })
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