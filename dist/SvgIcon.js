'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvgIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = exports.SvgIcon = function SvgIcon(props) {
    var size = props.size;
    var _props$icon = props.icon,
        children = _props$icon.children,
        viewBox = _props$icon.viewBox;

    return _react2.default.createElement(
        'svg',
        { style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox },
        children.map(function (child, idx) {
            var name = child.name,
                attribsMap = child.attribs;

            var style = { fill: props.fill };
            if (name === 'path') {
                var attribsToUse = Object.keys(attribsMap).filter(function (k) {
                    return k !== 'fill';
                }).reduce(function (attr, key) {
                    attr[key] = attribsMap[key];
                    return attr;
                }, {});

                return (0, _react.createElement)(name, _extends({ key: idx }, attribsToUse, { style: style }));
            } else {
                return (0, _react.createElement)(name, _extends({ key: idx }, attribsMap, { style: style }));
            }
        })
    );
};

SvgIcon.defaultProps = {
    size: '16',
    fill: 'currentColor'
};

SvgIcon.propTypes = {
    icon: _react.PropTypes.object.isRequired,
    size: _react.PropTypes.number,
    fill: _react.PropTypes.string
};

exports.default = SvgIcon;