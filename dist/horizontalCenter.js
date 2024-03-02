"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.horizontalCenter = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var horizontalCenter = function horizontalCenter(Component) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$rAlign = _ref.rAlign,
      rAlign = _ref$rAlign === void 0 ? false : _ref$rAlign,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 4 : _ref$space;

  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(Component, props, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'inline-flex',
        justifyContent: 'center',
        'alignItems': 'center'
      }
    }, _react.Children.toArray(props.children).map(function (child, idx) {
      var spacerField = rAlign ? 'paddingLeft' : 'paddingRight';
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: idx,
        style: _defineProperty({
          display: 'inline-block'
        }, spacerField, space)
      }, child);
    })));
  };
};

exports.horizontalCenter = horizontalCenter;
var _default = horizontalCenter;
exports["default"] = _default;