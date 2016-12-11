
import React from 'react';

const PAGES = {
    install: { title: 'Install and Usage' },
    icons: { title: ' Icons '}
}

const NavItem = (props) => {
    const { active, page } = props;
    const isActive = active === page;
    const color = isActive ? '#FFF' : '#D5D5D6'; 
    const style = isActive ? { color } : {};
    return (
        <div className='navigation-item' style={style} onClick={props.onClick} data-page={page} >
            <div data-page={page}>{ PAGES[props.page].title }</div>
            { isActive ? <div className='navigation-active-indicator'></div> : null }
        </div>
    );
};

export class Navigation extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { active: 'install', pages: PAGES  };
    }

    onPageClicked = (e) => {
        const { target } = e;
        const page = target.getAttribute('data-page');
        this.setState({ active: page });        
        this.props.onNavigationChange(page);
    }

    mapPages = (page) => {
        const { active } = this.state;

        return <NavItem key={page} page={page} active={this.state.active} onClick={this.onPageClicked}/>
    }

    render() {
        const { pages } = this.state;        
        return (
            <div className='navigation container'>
                <div className='navigation-items'>{ Object.keys(pages).map( this.mapPages ) }</div>
            </div>
        );
    }
    
}

export default Navigation;