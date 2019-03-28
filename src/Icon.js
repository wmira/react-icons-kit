
import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from './SvgIcon';

export const Icon = (props) => {
    const { style, className, icon, size, tag, ...others} = props; //eslint-disable-line

    const Tag = tag;

    return (
        <Tag {...others} style={{display: 'inline-block',...style}} className={className}>
            <SvgIcon size={props.size} icon={props.icon} title={props.title} />
        </Tag>
    );
};

export const withBaseIcon = (defaultProps) => props => {
    const propsToUse = {...defaultProps};

    return <Icon {...propsToUse} {...props}/>;
};


Icon.defaultProps = {
    size: 16,
    fill: 'currentColor',
    tag: 'i'
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    tag: PropTypes.oneOf(['i','span','div']),
    className: PropTypes.string
};

export default Icon;
