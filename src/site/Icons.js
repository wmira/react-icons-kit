
import React from 'react';

import Icon from '../Icon';

const IMPORTS = {
    icomoon: { module: '../icomoon', title: 'IcoMoon' },
    md: { module: '../fa', title: 'Material Design' },
    fa: { module: '../md', title: 'FontAwesome' },
    iconic: { module: '../iconic', title: 'Ionic' },
    entypo: { module: '../entypo', title: 'Entypo' },
    metrize: { module: '../metrize', title: 'Metrize' },
    ikons: { module: '../ikons', title: 'Ikons' },
    linea: { module: '../ikons', title: 'Linea' },
    ionicons: { module: '../ionicons', title: 'Ionics' },
    oct: { module: '../oct', title: 'Octicons' },
    typicons: { module: '../typicons', title: 'Typicons' }
};


const ICONSET = Object.keys(IMPORTS);


const IconContainer = (props) => (
    <div className={'icon-container ' + (props.selected === props.iconName ? 'icon-container-selected' : '' )}
        data-icon={props.iconName} onClick={props.onIconClicked}>
        <div ><Icon size={32} icon={props.iconData} /></div>
        <div style={{paddingTop: 4, fontSize: 10}}>{props.iconName}</div>
    </div>
);


export class Icons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { set: 'icomoon', icon: 'home', iconset: null };
       
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

        this.setState({ set: target.value }, () => {
            this.loadIcon(this.state.set);
        });
    }

    componentDidMount() {
        this.loadIcon(this.state.set);
    }

    icomoon = () => {
        return import('../icomoon');
    }

    md = () => {
        return import('../md');  //handcranked ftw!
    }
    fa = () => {
        return import('../fa');  //handcranked ftw!
    }
    iconic = () => {
        return import('../iconic');  //handcranked ftw!
    }
    entypo = () => {
        return import('../entypo');  //handcranked ftw!
    }
    metrize = () => {
        return import('../metrize');  //handcranked ftw!
    }
    ikons = () => {
        return import('../ikons');  //handcranked ftw!
    }
    linea = () => {
        return import('../linea');  //handcranked ftw!
    }
    ionicons = () => {
        return import('../ionicons');  //handcranked ftw!
    }
    oct = () => {
        return import('../oct');  //handcranked ftw!
    }
    typicons = () => {
        return import('../typicons');  //handcranked ftw!
    }

    loadIcon = (set) => {
        
        const importData = IMPORTS[set];
        this[set]().then( data => {            
            this.setState({ iconset: data } );
        })
    }

    render() {

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
                                    { ICONSET.map( key => <option key={key} value={key}>{ IMPORTS[key].title }</option> ) }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
             { this.state.iconset ? (<div className='container' style={{paddingTop: 220, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                    { Object.keys(this.state.iconset).map( icon => {
                        return (
                            <IconContainer onIconClicked={this.onIconClicked} 
                                selected={this.state.icon} key={icon} iconData={this.state.iconset[icon]} iconName={icon} />
                        );
                    })}
            </div>) : <div>Please Wait...</div> }
        </div>
        );
    }
}

export default Icons;