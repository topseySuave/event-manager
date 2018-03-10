webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputForm = function InputForm(_ref) {
   var fieldId = _ref.fieldId,
       nameField = _ref.nameField,
       value = _ref.value,
       error = _ref.error,
       type = _ref.type,
       onChange = _ref.onChange,
       label = _ref.label,
       _ref$minValue = _ref.minValue,
       minValue = _ref$minValue === undefined ? null : _ref$minValue;
   return _react2.default.createElement(
      'div',
      { className: 'input-field col s12' },
      _react2.default.createElement('input', {
         id: fieldId,
         name: nameField,
         type: type,
         defaultValue: value,
         onChange: onChange,
         className: 'validate',
         min: minValue || '',
         required: true
      }),
      _react2.default.createElement(
         'label',
         { htmlFor: fieldId },
         label
      ),
      error && _react2.default.createElement(
         'span',
         { className: 'red-text accent-1' },
         error
      )
   );
};

var requiredPropTypeString = _propTypes2.default.string.isRequired;
var requiredPropTypeFunc = _propTypes2.default.func.isRequired;
var propsTypeNotRequired = _propTypes2.default.string;

InputForm.propTypes = {
   /**
      * Field Identification Required,
      * Type: String
      * */
   fieldId: requiredPropTypeString,

   /**
      * Name field Required,
      * Type: String
      * */
   nameField: requiredPropTypeString,

   /**
      * Field Value Required,
      * Type: String
      * */
   value: requiredPropTypeString,

   /**
      * Error field Required,
      * Type: String
      * */
   error: requiredPropTypeString,

   /**
      * Field Type Required,
      * Type: String
      * */
   type: requiredPropTypeString,

   /**
      * Field onChange Required,
      * Type: Function
      * */
   onChange: requiredPropTypeFunc,

   /**
      * Field label not Required,
      * Type: String
      * */
   label: propsTypeNotRequired,

   /**
      * Min field not Required,
      * Type: String
      * */
   minValue: propsTypeNotRequired
};

exports.default = InputForm;

/***/ })

})
//# sourceMappingURL=hot-update.js.map