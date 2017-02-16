'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withBaseIcon = exports.Icon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('./SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(props) {
    var style = props.style,
        className = props.className,
        others = _objectWithoutProperties(props, ['style', 'className']);

    return _react2.default.createElement(
        'div',
        _extends({}, others, { style: _extends({}, style, { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }), className: className }),
        _react2.default.createElement(_SvgIcon2.default, { size: props.size, icon: props.icon })
    );
};

exports.Icon = Icon;
var withBaseIcon = exports.withBaseIcon = function withBaseIcon(defaultProps) {
    return function (props) {
        var propsToUse = _extends({}, defaultProps);

        return _react2.default.createElement(Icon, _extends({}, propsToUse, props));
    };
};

Icon.defaultProps = {
    size: 16,
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: _react.PropTypes.object.isRequired,
    size: _react.PropTypes.number,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string
};

exports.default = Icon;