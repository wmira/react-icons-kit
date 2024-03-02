"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SvgIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _camelCase = require("camel-case");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function notNullOrUndef(val) {
  return val !== null && val !== undefined;
}

function expandStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return style.split(';').reduce(function (partial, next) {
    // next h ere is key:val
    var _next$split = next.split(':'),
        _next$split2 = _slicedToArray(_next$split, 2),
        key = _next$split2[0],
        val = _next$split2[1];

    if (notNullOrUndef(key) && notNullOrUndef(val)) {
      partial[(0, _camelCase.camelCase)(key)] = val;
    }

    return partial;
  }, {});
}

var walkChildren = function walkChildren(children) {
  return children.map(function (child, idx) {
    var name = child.name,
        attribsMap = child.attribs,
        _child$children = child.children,
        gchildren = _child$children === void 0 ? null : _child$children; //fill, stroke

    var attribs = Object.keys(attribsMap).filter(function (key) {
      return key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none';
    }).reduce(function (partial, key) {
      if (key === 'style') {
        partial.style = expandStyle(attribsMap[key]);
      } else {
        partial[(0, _camelCase.camelCase)(key)] = attribsMap[key];
      }

      return partial;
    }, {}); //special case, it has fill and stroke at the same time

    var merge = {};

    if (attribsMap.fill === 'none' && attribsMap.stroke) {
      merge = {
        fill: 'none',
        stroke: 'currentColor'
      };
    } else if (attribsMap.fill === 'none') {
      merge = {
        fill: 'none'
      };
    }

    return /*#__PURE__*/(0, _react.createElement)(name, _objectSpread(_objectSpread({
      key: idx
    }, attribs), merge), gchildren === null ? gchildren : walkChildren(gchildren));
  });
};

var SvgIcon = function SvgIcon(props) {
  var size = props.size;
  var _props$icon = props.icon,
      children = _props$icon.children,
      viewBox = _props$icon.viewBox,
      _props$icon$attribs = _props$icon.attribs,
      svgAttribs = _props$icon$attribs === void 0 ? {} : _props$icon$attribs;
  var camelCasedAttribs = Object.keys(svgAttribs).reduce(function (partial, key) {
    partial[(0, _camelCase.camelCase)(key)] = svgAttribs[key];
    return partial;
  }, {});
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentColor",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    height: size,
    width: size,
    viewBox: viewBox
  }, camelCasedAttribs), props.title ? /*#__PURE__*/_react["default"].createElement("title", null, props.title) : null, walkChildren(children));
};

exports.SvgIcon = SvgIcon;
SvgIcon.defaultProps = {
  size: 16
};
SvgIcon.propTypes = {
  icon: _propTypes["default"].object.isRequired,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  title: _propTypes["default"].string
};
var _default = SvgIcon;
exports["default"] = _default;