"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBaseIcon = exports["default"] = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));

var _excluded = ["style", "className", "icon", "size", "tag"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(props) {
  var style = props.style,
      className = props.className,
      icon = props.icon,
      size = props.size,
      tag = props.tag,
      others = _objectWithoutProperties(props, _excluded); //eslint-disable-line


  var Tag = tag;
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, others, {
    style: _objectSpread({
      display: 'inline-block'
    }, style),
    className: className
  }), /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], {
    size: props.size,
    icon: props.icon,
    title: props.title
  }));
};

exports.Icon = Icon;

var withBaseIcon = function withBaseIcon(defaultProps) {
  return function (props) {
    var propsToUse = _objectSpread({}, defaultProps);

    return /*#__PURE__*/_react["default"].createElement(Icon, _extends({}, propsToUse, props));
  };
};

exports.withBaseIcon = withBaseIcon;
Icon.defaultProps = {
  size: 16,
  fill: 'currentColor',
  tag: 'i'
};
Icon.propTypes = {
  icon: _propTypes["default"].object.isRequired,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  style: _propTypes["default"].object,
  tag: _propTypes["default"].oneOf(['i', 'span', 'div']),
  className: _propTypes["default"].string
};
var _default = Icon;
exports["default"] = _default;