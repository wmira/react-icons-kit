'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SvgIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _camelcase = require('camelcase');

var _camelcase2 = _interopRequireDefault(_camelcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var walkChildren = function walkChildren(children) {
    return children.map(function (child, idx) {
        var name = child.name,
            attribsMap = child.attribs,
            _child$children = child.children,
            gchildren = _child$children === undefined ? null : _child$children;

        var init = name === 'path' ? { fill: 'currentColor' } : {};

        var attribs = Object.keys(attribsMap).filter(function (key) {
            return key !== 'fill';
        }).reduce(function (partial, key) {
            partial[(0, _camelcase2.default)(key)] = attribsMap[key];
            return partial;
        }, init);
        return (0, _react.createElement)(name, _extends({ key: idx }, attribs), gchildren === null ? gchildren : walkChildren(gchildren));
    });
};

var SvgIcon = exports.SvgIcon = function SvgIcon(props) {
    var size = props.size;
    var _props$icon = props.icon,
        children = _props$icon.children,
        viewBox = _props$icon.viewBox;

    return _react2.default.createElement(
        'svg',
        { style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox },
        walkChildren(children)
    );
};

SvgIcon.defaultProps = {
    size: '16'
};

SvgIcon.propTypes = {
    icon: _react.PropTypes.object.isRequired,
    size: _react.PropTypes.number
};

exports.default = SvgIcon;