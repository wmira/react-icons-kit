
import React from 'react';

import Icon from 'react-icons-kit';

import * as icomoon from 'react-icons-kit/icomoon';
import * as fontawesome from 'react-icons-kit/fa';
import * as materialDesign from 'react-icons-kit/md';
import * as iconic from 'react-icons-kit/iconic';
import * as entypo from 'react-icons-kit/entypo';


const Sep = () => <span style={{paddingRight: 4}}/>;
const InlineBlk = (props) => (<div style={{paddingRight: 6, display: 'inline-block'}}>{props.children}</div>);

const IconContainer = (props) => (
    <div className={'icon-container ' + (props.selected === props.iconName ? 'icon-container-selected' : '' )}
        data-icon={props.iconName} onClick={props.onIconClicked}>
        <div><Icon size={32} icon={props.iconData} /></div>
        <div style={{paddingTop: 4, fontSize: 10}}>{props.iconName}</div>
    </div>
);

const ICONSET = {
    icomoon,
    md: materialDesign,
    fa: fontawesome,
    iconic,
    entypo
};

export class Icons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { set: 'icomoon', icon: 'home' };
    }
    onIconClicked = (e) => {
        const { target } = e;

        let icon = null;
        let currentTarget = target;
        while ( !icon ) {
            icon = currentTarget.getAttribute('data-icon');
            if ( !icon ) {
                currentTarget = currentTarget.parentElement;
            }
        }
        if ( ICONSET[this.state.set][icon] ) {
            this.setState({ icon });
        }
    }

    onSetChanged = (e) => {
        const { target } = e;
        const icon = Object.keys(ICONSET[target.value])[0];
        this.setState({ set: target.value, icon });
    }

    render() {

        const iconSet = ICONSET[this.state.set];

        return (
            <div>
                <div style={{background: '#FFF', position: 'fixed', width: '100%'}} >
                    <div className='container'>
                        <h3>Icons</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                            <div>
                                <pre className='prettyprint lang-javascript'>{`
    import Icon from 'react-icons-kit';
    import { ${this.state.icon} } from 'react-icons-kit/${this.state.set}/${this.state.icon}';       

    <Icon icon={${this.state.icon}} />;                            
                                `}</pre>
                            </div>
                            <div >
                                <select style={{padding: 6, background: '#FFF'}} value={this.state.set} onChange={this.onSetChanged}>
                                    <option value={'icomoon'}>IcoMoon</option>
                                    <option value={'fa'}>FontAwesome</option>
                                    <option value={'md'}>Material Design</option>
                                    <option value={'iconic'}>Open Iconic</option>
                                    <option value={'entypo'}>Entypo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
             <div className='container' style={{paddingTop: 220, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                    { Object.keys(iconSet).map( icon => {
                        return (
                            <IconContainer onIconClicked={this.onIconClicked} selected={this.state.icon} key={icon} iconData={iconSet[icon]} iconName={icon} />
                        );
                    })}
            </div>
        </div>
        );
    }
}

export default Icons;