
import React, { PropTypes } from 'react';


export const SvgIcon = (props) => {

    const { size } = props;
    const { paths, viewBox } = props.icon;

    return (
        <svg style={{ display: 'inline-block', verticalAlign: 'middle'}} height={size} width={size} viewBox={viewBox}>
            { paths.map( (path,idx) => {
                return <path key={idx} d={ path } style={{ fill: props.fill }} />;
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