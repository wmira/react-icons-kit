
import React, { createElement, PropTypes } from 'react';


export const SvgIcon = (props) => {

    const { size } = props;
    const { children, viewBox } = props.icon;
    console.log('icon ', props.icon );
    return (
        <svg style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}>
            { children.map( (child,idx) => {
                const { name, attribs: attribsMap } = child;
                const style = { fill: props.fill };                
                if ( name === 'path' ) {
                    return createElement(name, { d: attribsMap.d, style });
                } else {
                    return createElement(name, { ...attribsMap, style });
                }
            })}
        </svg>
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