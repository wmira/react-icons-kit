

import React from 'react';
import Icon from './Icon';

import * as icons from './md/';

export const __PlaygroundIcon = () => {

    return (
        <div style={{color: 'green', margin: 2, padding: 4}}>
            { Object.keys(icons).map( key => <Icon icon={icons[key]} size={42}/>) }
        </div>
    );

};