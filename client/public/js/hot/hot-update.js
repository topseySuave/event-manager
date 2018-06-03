webpackHotUpdate("main",{

/***/ "./client/src/actions/searchAction.js":
/*!********************************************!*\
  !*** ./client/src/actions/searchAction.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterEventTitle = exports.filterCenterTitle = exports.searchAction = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var _queryString2 = _interopRequireDefault(_queryString);

var _fetchCenterAction = __webpack_require__(/*! ./center-actions/fetchCenterAction */ "./client/src/actions/center-actions/fetchCenterAction.js");

var _index = __webpack_require__(/*! ./events-actions/index */ "./client/src/actions/events-actions/index.js");

var _ = __webpack_require__(/*! ./ */ "./client/src/actions/index.js");

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

var searchAction = exports.searchAction = function searchAction(searchQueries) {
  var searchApi = prepareCenterSearchQuery(searchQueries);
  return function (dispatch) {
    return _axios2.default.get(searchApi).then(function (_ref2) {
      var data = _ref2.data;

      console.log('data ===> ', data);
      if (data.statusCode === 200) {
        return dispatch((0, _fetchCenterAction.fetchCentersDispatch)(data, _.FETCH_CENTERS));
      } else if (data.statusCode === 404) {
        console.log('error dey 404');
        if (err) {
          console.log('has error');
          Materialize.toast('search result do not match center(s)', 5000, 'red');
        }
      }
    }).catch(function (err) {
      if (err) {
        console.log('error dey oooo');
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
      } else if (data.statusCode === 404) {
        Materialize.toast(data.message, 5000, 'red');
        dispatch((0, _fetchCenterAction.searchCenterDispatch)(null, 'SEARCH_CENTER_TITLE_FAILED'));
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

/***/ })

})
//# sourceMappingURL=hot-update.js.map