'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.horizontalCenter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var horizontalCenter = exports.horizontalCenter = function horizontalCenter(Component) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$rAlign = _ref.rAlign,
        rAlign = _ref$rAlign === undefined ? false : _ref$rAlign,
        _ref$space = _ref.space,
        space = _ref$space === undefined ? 4 : _ref$space;

    return function (props) {

        return _react2.default.createElement(
            Component,
            props,
            _react2.default.createElement(
                'div',
                { style: { display: 'inline-flex', justifyContent: 'center', 'alignItems': 'center' } },
                _react.Children.toArray(props.children).map(function (child, idx) {
                    var spacerField = rAlign ? 'paddingLeft' : 'paddingRight';
                    return _react2.default.createElement(
                        'div',
                        { key: idx, style: _defineProperty({ display: 'inline-block' }, spacerField, space) },
                        child
                    );
                })
            )
        );
    };
};

exports.default = horizontalCenter;