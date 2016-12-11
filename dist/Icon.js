var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import SvgIcon from './SvgIcon';

export var Icon = function Icon(props) {

    return React.createElement(
        'div',
        { style: _extends({}, props.style, { display: 'inline-block' }), className: props.className },
        React.createElement(SvgIcon, { size: props.size, icon: props.icon })
    );
};

export var withBaseIcon = function withBaseIcon(defaultProps) {
    return function (props) {
        var propsToUse = _extends({}, defaultProps);

        return React.createElement(Icon, _extends({}, propsToUse, { icon: props.icon }));
    };
};

Icon.defaultProps = {
    size: 16,
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number
};

export default Icon;