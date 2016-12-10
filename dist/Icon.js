'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = function Icon(props) {
    var size = props.size;
    var _props$icon = props.icon,
        paths = _props$icon.paths,
        viewBox = _props$icon.viewBox;


    return _react2.default.createElement(
        'svg',
        { style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox },
        paths.map(function (path, idx) {
            return _react2.default.createElement('path', { key: idx, d: path, style: { fill: props.fill } });
        })
    );
};

Icon.defaultProps = {
    size: '16',
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: _react.PropTypes.object.isRequired,
    size: _react.PropTypes.number,
    fill: _react.PropTypes.string
};

exports.default = Icon;