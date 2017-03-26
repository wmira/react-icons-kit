
import React, { createElement, PropTypes } from 'react';
import camelcase from 'camelcase';

const walkChildren = (children) => {
    return children.map((child, idx ) => {
        const { name, attribs: attribsMap, children: gchildren = null } = child;
        const init = name === 'path' ? { fill: 'currentColor' } : {};

        const attribs = Object.keys(attribsMap).filter( key => key !== 'fill' ).reduce( (partial, key) => {
            partial[camelcase(key)] = attribsMap[key];
            return partial;
        }, init);
        return createElement(name, { key: idx, ...attribs }, gchildren === null ? gchildren : walkChildren(gchildren));
    });
};


export const SvgIcon = (props) => {

    const { size } = props;
    const { children, viewBox } = props.icon;
    return (
        <svg style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}>
            { walkChildren(children) }
        </svg>
    );
};

SvgIcon.defaultProps = {
    size: '16'
};

SvgIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number
};

export default SvgIcon;