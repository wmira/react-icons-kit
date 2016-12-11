

import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import InstallPage from './InstallPage';
import Icons from './Icons';

import './ReacticonsSite.css';



export class ReacticonsSite extends React.Component {


    constructor(props) {
        super(props);
        this.state = { active: 'install' };
    }

    onNavigationChange = (page) => {
        this.setState({ active: page });
    }

    render() {
        const { active } = this.state;
        return (
            <div style={{ marginTop: 72, background: '#2196F3' }}>                
                <div className='header-container'>
                    <Header />
                    <Navigation onNavigationChange={this.onNavigationChange}/>
                </div>
                <div className='body-container'>
                    <div className='container'>
                        { active === 'install' ? <InstallPage /> : null }
                        { active === 'icons' ? <Icons /> : null }
                    </div>
                </div>
            </div>
        );
    }
}