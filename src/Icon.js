
import React, { PropTypes } from 'react';

import SvgIcon from './SvgIcon';

export const Icon = (props) => {
    const { style, className, ...others} = props;

    return (
        <div {...others} style={{...style, display: 'inline-flex', justifyContent: 'center', alignItems:'center'}} className={className}>
            <SvgIcon size={props.size} icon={props.icon}/>
        </div>
    );
};

export const withBaseIcon = (defaultProps) => props => {
    const propsToUse = {...defaultProps};

    return <Icon {...propsToUse} {...props}/>;
};


Icon.defaultProps = {
    size: 16,
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
};

export default Icon;