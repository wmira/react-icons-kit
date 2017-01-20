
import React, { PropTypes } from 'react';

import SvgIcon from './SvgIcon';

export const Icon = (props) => {

    return (
        <div style={{...props.style, display: 'inline-flex', justifyContent: 'center', alignItems:'center'}} className={props.className}>
            <SvgIcon size={props.size} icon={props.icon}/>
        </div>
    );
};

export const withBaseIcon = (defaultProps) => props => {
    const propsToUse = {...defaultProps};

    return <Icon {...propsToUse} icon={props.icon}/>;
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