webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateCenterRequest = exports.createCenterRequest = undefined;\n\nvar _axios = __webpack_require__(40);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _setAuthenticationToken = __webpack_require__(111);\n\nvar _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);\n\nvar _ = __webpack_require__(28);\n\nvar _history = __webpack_require__(179);\n\nvar _history2 = _interopRequireDefault(_history);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar centerApi = '/api/v1/centers';\n\nvar addCenterPayload = function addCenterPayload(payload) {\n  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (response === 'success') {\n    return {\n      type: _.ADD_CENTER_SUCCESS,\n      center: payload\n    };\n  } else if (response === 'request') {\n    return {\n      type: _.ADD_CENTER_REQUEST,\n      center: payload\n    };\n  } else if (response === 'failure') {\n    return {\n      type: _.ADD_CENTER_FAlLURE,\n      center: payload\n    };\n  }\n};\n\nvar createCenter = function createCenter(centerApi, centerData, imgUrl) {\n  return function (dispatch) {\n    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;\n    (0, _setAuthenticationToken2.default)(token);\n    centerData.img_url = imgUrl;\n    dispatch(addCenterPayload(centerData, 'request'));\n    return _axios2.default.post(centerApi, centerData).then(function (_ref) {\n      var data = _ref.data;\n\n      if (data.statusCode === 400) {\n        Materialize.toast(data.message, 5000, 'red');\n        return dispatch(addCenterPayload(data, 'failure'));\n      } else {\n        Materialize.toast(data.message, 5000, 'teal');\n        document.getElementById('edit-center-form').reset();\n        $('.modal').modal('close');\n        return dispatch(addCenterPayload(data.center, 'success'));\n      }\n    });\n  };\n};\n\nvar createCenterRequest = exports.createCenterRequest = function createCenterRequest(centerData) {\n  return function (dispatch) {\n    if (centerData.img_url.name) {\n      var formData = new FormData();\n      formData.append('file', centerData.img_url);\n      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);\n      (0, _setAuthenticationToken2.default)(false);\n      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref2) {\n        var data = _ref2.data;\n\n        dispatch(createCenter(centerApi, centerData, data.url));\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n    return dispatch(createCenter(centerApi, centerData, ''));\n  };\n};\n\n/***\n * update center payload sorter\n * ***/\nvar updateCenterPayload = function updateCenterPayload(data, res) {\n  if (res === 'success') {\n    return {\n      type: _.EDIT_CENTER,\n      payload: data\n    };\n  } else if (res === 'failure') {\n    return {\n      type: _.EDIT_CENTER_FAILURE,\n      payload: data\n    };\n  }\n};\n\n/***\n * update center method\n * requester to local server\n * ***/\nvar editCenter = function editCenter(centerApi, centerData, imgUrl) {\n  return function (dispatch) {\n    var token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;\n    (0, _setAuthenticationToken2.default)(token);\n    centerData.img_url = imgUrl;\n    return _axios2.default.post(centerApi, centerData).then(function (_ref3) {\n      var data = _ref3.data;\n\n      dispatch(updateCenterPayload(data.centr, 'success'));\n      window.location.reload();\n    });\n  };\n};\n\n/***\n * Initial landing method for edit center request\n * ***/\nvar updateCenterRequest = exports.updateCenterRequest = function updateCenterRequest(centerData) {\n  return function (dispatch) {\n    if (centerData.img_url.name) {\n      var formData = new FormData();\n      formData.append('file', centerData.img_url);\n      formData.append('upload_preset', _.CLOUDINARY_UPLOAD_PRESET);\n      (0, _setAuthenticationToken2.default)(false);\n      return _axios2.default.post(_.CLOUDINARY_URL, formData).then(function (_ref4) {\n        var data = _ref4.data;\n\n        dispatch(editCenter(centerApi + '/' + centerData.id, centerData, data.url));\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n    return dispatch(editCenter(centerApi + '/' + centerData.id, centerData, centerData.img_url));\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/actions/modalAction.js\n// module id = 290\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/actions/modalAction.js?");

/***/ })

})