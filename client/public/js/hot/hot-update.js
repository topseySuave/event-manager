webpackHotUpdate("main",{

/***/ "./client/src/actions/events-actions/index.js":
/*!****************************************************!*\
  !*** ./client/src/actions/events-actions/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStatusEventAction = exports.loadMoreEvents = exports.deleteEventRequest = exports.editEventAction = exports.editEventRequestAction = exports.fetchSessionEventRequest = exports.fetchEventRequest = exports.createEventRequest = exports.createEvent = exports.searchEventsDispatch = exports.eventsDispatchAction = undefined;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _ = __webpack_require__(/*! ../ */ "./client/src/actions/index.js");

var _setAuthenticationToken = __webpack_require__(/*! ../../components/authentication/setAuthenticationToken */ "./client/src/components/authentication/setAuthenticationToken.js");

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

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
var eventsDispatchAction = exports.eventsDispatchAction = function eventsDispatchAction(type) {
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

    case 'EDIT_EVENT_FAILURE':
      return {
        type: _.EDIT_EVENT_FAILURE
      };

    case 'SESSION_EVENTS':
      return {
        type: _.SESSION_EVENTS,
        payload: data
      };

    case 'SESSION_EVENTS_FAILURE':
      return {
        type: _.SESSION_EVENTS_FAILURE
      };

    case 'EVENT_STATUS_CHANGE':
      return {
        type: _.EVENT_STATUS_CHANGE
      };

    case 'LOADMORE_EVENT_REQUEST':
      return {
        type: _.LOADMORE_EVENT_REQUEST
      };

    case 'LOADMORE_EVENT_SUCCESS':
      return {
        type: _.LOADMORE_EVENT_SUCCESS,
        payload: data
      };

    case 'LOADMORE_EVENT_FAILURE':
      return {
        type: _.LOADMORE_EVENT_FAILURE
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

var createEvent = exports.createEvent = function createEvent(eventData, imgUrl) {
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
      }
    }).catch(function (err) {
      dispatch(eventsDispatchAction('EDIT_EVENT_FAILURE'));
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
      formData.append('upload_preset', "z3nqw1ue");
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post("https://api.cloudinary.com/v1_1/dcbqn1c10/upload", formData).then(function (_ref2) {
        var data = _ref2.data;

        dispatch(createEvent(eventData, data.url));
      }).catch(function (err) {
        Materialize.toast('Error in connection', 5000, 'red lighten-2');
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
        return dispatch(eventsDispatchAction('SESSION_EVENTS', data));
      }
      return dispatch(eventsDispatchAction('SESSION_EVENTS_FAILURE'));
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
      formData.append('upload_preset', "z3nqw1ue");
      (0, _setAuthenticationToken2.default)(false);
      return _axios2.default.post("https://api.cloudinary.com/v1_1/dcbqn1c10/upload", formData).then(function (_ref6) {
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
var loadMoreEvents = exports.loadMoreEvents = function loadMoreEvents(userId, offset) {
  return function (dispatch) {
    dispatch(eventsDispatchAction('LOADMORE_EVENT_REQUEST'));
    return _axios2.default.get(api + '?sessionEvents=' + userId + '&next=' + offset).then(function (_ref8) {
      var data = _ref8.data;

      if (data.statusCode === 200) {
        return dispatch(eventsDispatchAction('LOADMORE_EVENT_SUCCESS', data.events));
      }
      return dispatch(eventsDispatchAction('LOADMORE_EVENT_FAILURE'));
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
          return dispatch(eventsDispatchAction('EVENT_STATUS_CHANGE'));
        }
        Materialize.toast(data.message, 5000, 'red lighten-2');
      })
    );
  };
};

/***/ })

})
//# sourceMappingURL=hot-update.js.map