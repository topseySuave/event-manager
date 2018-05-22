webpackHotUpdate(0,{

/***/ 1807:
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
      newState.sessEvents.events.map(function (event, index) {
        if (event.id === action.payload.id) {
          newState.sessEvents.events[index] = action.payload;
        }
      });
      newState.isLoading = false;
      newState.sessEvents.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.pageSize = newState.sessEvents.totalCount;
      newState.sessEvents.pageCount = Math.ceil(newState.sessEvents.totalCount / pageLimit);
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

/***/ })

})
//# sourceMappingURL=hot-update.js.map