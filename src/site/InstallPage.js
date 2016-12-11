
import React from 'react';

import Icon, { withBaseIcon } from 'react-reacticons';
import { home, home2, home3 } from 'react-reacticons/icomoon';

const IconRed64 = withBaseIcon({ size: 64, style: {color: '#E53935'}});
const IconPink32 = withBaseIcon({ size: 32, style: {color: '#EC407A'}});
const IconBrown16 = withBaseIcon({ size: 16, style: {color: '#795548'}});

const Section = (props) => <div className='section-container'>{props.children}</div>;
const Sep = () => <span style={{paddingRight: 4}}/>
const InlineBlk = (props) => (<div style={{paddingRight: 6, display: 'inline-block', ...props.style}}>{props.children}</div>);

export const InstallPage = () => (
    <div style={{paddingTop: 20}}>
        <h3>Install</h3>
        <div style={{ width: '60%', margin: 'auto'}}>
            <pre className='prettyprint'>{`
                        npm install --save-dev react-reacticons
            `}
            </pre>        
        </div>
        <h3>Basic Usage</h3>
        <Section>
            <div style={{ width: '40%' }}>
                <pre className='prettyprint lang-javascript'>{`
    import Icon from 'react-reacticons';

    //import icons

    import { home } from 'react-reacticons/icomoon';
                
    <Icon icon={home}/>
    <Icon size={32} icon={home}/>
    <Icon size={64} icon={home}/>
                `}
                </pre>
            </div>
            <div style={{ width: '40%', margin: 'auto' }}>
                <InlineBlk>
                    <Icon icon={home}/><Sep />
                    <Icon size={32} icon={home}/><Sep />
                    <Icon size={64} icon={home}/><Sep />
                </InlineBlk>
                <InlineBlk>
                    <Icon icon={home2}/><Sep />
                    <Icon size={32} icon={home2}/><Sep />
                    <Icon size={64} icon={home2}/><Sep />
                </InlineBlk>
                <InlineBlk>
                    <Icon icon={home3}/><Sep />
                    <Icon size={32} icon={home3}/><Sep />
                    <Icon size={64} icon={home3}/><Sep />
                </InlineBlk>
            </div>
        </Section>
        <h3> Changing Colors </h3>        
        <Section>
            <div style={{ width: '40%' }}>
                <pre className='prettyprint lang-javascript'>{`
    
    //by default it will take color of container
                
    <div style={{ color: 'orange' }}>
        <Icon icon={home}/></div>
        <Icon size={32} icon={home}/>
        <Icon size={64} icon={home}/>
    </div>
                `}
                </pre>
            </div>
            <div style={{ width: '40%', margin: 'auto' }}>
                <InlineBlk style={{ color: '#1E88E5' }}>
                    <Icon icon={home}/><Sep />
                    <Icon size={32} icon={home}/><Sep />
                    <Icon size={64} icon={home}/><Sep />
                </InlineBlk>
                <InlineBlk style={{ color: '#009688' }}>
                    <Icon icon={home2}/><Sep />
                    <Icon size={32} icon={home2}/><Sep />
                    <Icon size={64} icon={home2}/><Sep />
                </InlineBlk>
                <InlineBlk style={{ color: '#F4511E' }}>
                    <Icon icon={home3}/><Sep />
                    <Icon size={32} icon={home3}/><Sep />
                    <Icon size={64} icon={home3}/><Sep />
                </InlineBlk>
            </div>
        </Section>
        <h3>Compose</h3>
        <Section>
            <div style={{ width: '40%' }}>
                <pre className='prettyprint lang-javascript'>{`

    import { withBaseIcon } from 'react-reacticons';
    import { home } from 'react-reacticons/icomoon';
    import { home2 } from 'react-reacticons/icomoon';
    import { home3 } from 'react-reacticons/icomoon';
    
    //you can compose icon to prevent repetitive 
    //args like size and color

    const IconRed64 = 
        withBaseIcon({ size: 32, style: {color: '##E53935'}});
                
    <IconRed64 icon={home}/>
    <IconRed64 icon={home2}/>
    <IconRed64 icon={home3}/>
                `}
                </pre>
            </div>
            <div style={{ width: '40%', margin: 'auto' }}>
                <InlineBlk>
                    <IconRed64 icon={home}/><Sep />
                    <IconRed64 icon={home}/><Sep />
                    <IconRed64 icon={home}/><Sep />
                </InlineBlk>
                <InlineBlk>
                    <IconPink32 icon={home2}/><Sep />
                    <IconPink32 icon={home2}/><Sep />
                    <IconPink32 icon={home2}/><Sep />
                </InlineBlk>
                <InlineBlk>
                    <IconBrown16 icon={home3}/><Sep />
                    <IconBrown16 icon={home3}/><Sep />
                    <IconBrown16 icon={home3}/><Sep />
                </InlineBlk>
            </div>
        </Section>


    </div>
);

export default InstallPage;