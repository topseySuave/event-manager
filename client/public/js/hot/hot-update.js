webpackHotUpdate(0,{

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

/***/ })

})
//# sourceMappingURL=hot-update.js.map