webpackHotUpdate(0,{

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
     * showSignUpActionButton method
     * @returns { void }
     * */

  }, {
    key: 'showSignUpActionButton',
    value: function showSignUpActionButton() {
      if (!this.props.activeState.isAuthenticated) {
        return _react3.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/signup',
            className: 'btn blue lighten-2 waves-effect animated fadeInLeft'
          },
          'Join Boots Events Manager'
        );
      }
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
                'Worlds Leading Events Centers'
              ),
              _react3.default.createElement(
                'p',
                { className: 'wow fadeInLeft' },
                'Book Events Centers In Your Area'
              ),
              this.showSignUpActionButton(),
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

/***/ })

})
//# sourceMappingURL=hot-update.js.map