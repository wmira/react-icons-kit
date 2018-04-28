
import * as React from 'react'
import md from 'react-markings'
import { InlineItems, Center } from 'react-containers'
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter'
// @ts-ignore
import { rainbow as theme } from 'react-syntax-highlighter/styles/hljs';

import { Icon } from 'react-icons-kit'
// @ts-ignore
import { home } from 'react-icons-kit/icomoon/home'

// @ts-ignore
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'


import { Editor } from './Editor'
import { Title } from './Containers'
import { StaticCodeContainer, StaticCode } from './Containers'
import { 
    basicUsage, 
    IMPORT_JSX,     
    changingColors,
    composeIcon,
    COMPOSE_JSX
} from './exampleCode'
import { HomeIcon1, HomeIcon2, HomeIcon3 } from './compose'


const { Component } = React

const Install = () => {
    
    return md`    
        > npm install --save react-icons-kit        
    `
}

const CodeViewer = (props: { code: string, width?: string }) => (
    <StaticCodeContainer>                    
        <StaticCode width={props.width}>
            <SyntaxHighlighter showLineNumbers={true} language='javascript' style={theme}>{props.code}</SyntaxHighlighter>
        </StaticCode>
    </StaticCodeContainer>
)

const scope = { Icon, Center, InlineItems, home, HomeIcon1, HomeIcon2, HomeIcon3 }

export class Guide extends Component {


    public render() {

        
        return (
            <div>
                <Title>Installation</Title>             
                
                { md`
                   ${<Install/>}
                `}
                
                <Title>Importing and Basic Usage</Title>
                {
                    md`
                        To use react-icons-kit, import the Icon component plus an icon from any of the iconset. 
                    `
                }
                <CodeViewer code={IMPORT_JSX}/>                    
                <Title>Setting Icon Size</Title>
                <p>
                    You can set the size of an icon using the size attribute. The size attribute can take in percentage instead of a number
                    such that it can use the size of the container
                </p>
                <Editor code={basicUsage} scope={scope}/>
                <Title>Changing Colors</Title>
                <p>
                    The component takes in the color of the container by default. To change the color, just set the color of the container.
                </p>
                <Editor height={'290px'} code={changingColors} scope={scope}/>
                <Title>Composing</Title>
                <p>
                    You should normally have the Icon not referred directly but rather exported such that you only change it in one place.
                    You can use <strong>withBaseIcon</strong> function helper for this purpose. Below is an example of a file called ProjectIcons.js
                    which contains icons used throughout a specific project
                </p>
                <CodeViewer width={'720px'} code={COMPOSE_JSX}/>
                <p>
                    So to use the icons, you would import them as normal then render them as their own component as per the live example below.
                </p>
                <Editor code={composeIcon} scope={scope}/>
            </div>
        )
    }

}
