
import React, { createElement, PropTypes } from 'react';

export const SvgIcon = (props) => {

    const { size } = props;
    const { children, viewBox } = props.icon;
    return (
        <svg style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}>
            { children.map( (child, idx) => {
                const { name, attribs: attribsMap } = child;
                const style = { fill: props.fill };
                if ( name === 'path' ) {
                    const attribsToUse = Object.keys(attribsMap).filter( k => k !== 'fill' ).reduce( (attr, key) => {
                        attr[key] = attribsMap[key];
                        return attr;
                    }, {});

                    return createElement(name, { key: idx, ...attribsToUse, style });
                } else {
                    return createElement(name, { key: idx, ...attribsMap, style });
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