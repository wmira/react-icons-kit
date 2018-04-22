
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import camelcase from 'camel-case';

const walkChildren = (children) => {
    return children.map((child, idx ) => {
        const { name, attribs: attribsMap, children: gchildren = null } = child;

        //fill, stroke
        const attribs = Object.keys(attribsMap)
            .filter( key => key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none' )
            .reduce( (partial, key) => {

                partial[camelcase(key)] = attribsMap[key];
                return partial;
            }, {} );
        //special case, it has fill and stroke at the same time
        let merge = {};
        if ( attribsMap.fill === 'none' && attribsMap.stroke ) {
            merge = { fill: 'none', stroke: 'currentColor' };
        }
        return createElement(name, { key: idx, ...attribs, ...merge }, gchildren === null ? gchildren : walkChildren(gchildren));
    });
};


export const SvgIcon = (props) => {

    const { size } = props;
    const { children, viewBox } = props.icon;
    return (
        <svg fill='currentColor' style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}>
            { props.title && <title>{props.title}</title> }
            { walkChildren(children) }
        </svg>
    );
};

SvgIcon.defaultProps = {
    size: '16'
};

SvgIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number,
    title: PropTypes.string
};

export default SvgIcon;
