
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
        } else if ( attribsMap.fill === 'none' ) {
            merge = { fill: 'none' };
        }
        return createElement(name, { key: idx, ...attribs, ...merge }, gchildren === null ? gchildren : walkChildren(gchildren));
    });
};


export const SvgIcon = (props) => {

    const { size } = props;
    const { children, viewBox, attribs: svgAttribs = {} } = props.icon;

    const camelCasedAttribs = Object.keys(svgAttribs).reduce( (partial, key) => {
        partial[camelcase(key)] = svgAttribs[key]
        return partial
    }, {})
    return (
        <svg fill='currentColor' style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}
            {...camelCasedAttribs }>
            { props.title ? <title>{props.title}</title> : null }
            { walkChildren(children) }
        </svg>
    );
};

SvgIcon.defaultProps = {
    size: 16
};

SvgIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string
};

export default SvgIcon;
