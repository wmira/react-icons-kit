
import React, { PropTypes } from 'react';

export var SvgIcon = function SvgIcon(props) {
    var size = props.size;
    var _props$icon = props.icon,
        paths = _props$icon.paths,
        viewBox = _props$icon.viewBox;


    return React.createElement(
        'svg',
        { style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox },
        paths.map(function (path, idx) {
            return React.createElement('path', { key: idx, d: path, style: { fill: props.fill } });
        })
    );
};

SvgIcon.defaultProps = {
    size: '16',
    fill: 'currentColor'
};

SvgIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number,
    fill: PropTypes.string
};

export default SvgIcon;