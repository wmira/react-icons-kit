
import React, { Children } from 'react';

export const horizontalCenter = (Component, { rAlign = false, space = 4 } = {}) => props => {

    return (
        <Component {...props} >
            <div style={{display: 'inline-flex', justifyContent: 'center', 'alignItems': 'center'}}>
                { Children.toArray(props.children).map( (child, idx) => {
                    const spacerField = rAlign ? 'paddingLeft' : 'paddingRight';
                    return <div key={idx} style={{ display: 'inline-block', [spacerField]: space }}>{ child }</div>;
                })}
            </div>
        </Component>
    );
};

export default horizontalCenter;