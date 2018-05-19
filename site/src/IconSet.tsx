

import * as React from 'react'
import styled from 'styled-components'
import { MouseEvent } from 'react'
import { IconSetContainer, IconView, IconTitle, IconCodeContainer, SelectedIconView } from './Containers'
import { ICON_SETS } from './state'
import { Icon } from 'react-icons-kit'
import * as copy from 'copy-to-clipboard'

// @ts-ignore
import { ic_content_copy as copyIcon } from 'react-icons-kit/md/ic_content_copy'

interface IconContainerProps {
    iconData: any
    iconName: string
    selectedIcon: string
    onClick: ((event: MouseEvent<HTMLDivElement>) => void) | undefined
}

const CodeContainer = styled.div`
    font-size: 0.8em;
    display: flex;
    justify-content: left;
    align-items: center;
`

const CopyContainer = styled.div`
    padding-left: 6px;
    padding-top: 4px;
    cursor: pointer;
`


const IconContainer = (props: IconContainerProps) => {
    const IconViewContainer = props.iconName === props.selectedIcon ? SelectedIconView : IconView 
    
    return (
        <IconViewContainer onClick={props.onClick} data-icon={props.iconName}>        
            <div><Icon size={32} icon={props.iconData} /></div>
            <div style={{paddingTop: 4, fontSize: 10}}>{props.iconName}</div>
        </IconViewContainer>
    )
}


export class IconSet extends React.Component<IIconSetProp> {


    public showLoading() {
        return (
            <div>Loading, Please Wait....</div>
        )
    }

    public showIconSetData = (): React.ReactElement<string> => {
        const { iconSetData } = this.props
        return (            
            <IconSetContainer onClick={this.onIconSelected} >
                { Object.keys(iconSetData).map( icon => {
                    return (
                        <IconContainer 
                            selectedIcon={this.props.selectedIcon}
                            onClick={this.onIconSelected} 
                            key={icon} 
                            iconName={icon} 
                            iconData={iconSetData[icon]} />
                    )
                })}
            </IconSetContainer>
        )
    }

    public onIconSelected = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        let targetWithData = target
        let iconName = null
        
        while ( targetWithData ) {
            iconName = targetWithData.getAttribute('data-icon')
            if ( iconName ) {
                break
            }
            const parentEl = targetWithData.parentElement
            if ( parentEl ) {
                targetWithData = parentEl
            } else {
                break
            }
        }
            
        if ( iconName ) {
            this.props.onIconSelected(iconName, this.props.iconSet)
        }
    }
    
    public copyToClipboard = () => {
        const { iconSet, selectedIcon = '' } = this.props
        copy(`import {${selectedIcon}} from 'react-icons-kit/${iconSet}/${selectedIcon}'`)
    }

    public render() {
        const { iconSetData = null, iconSet, selectedIcon = '' } = this.props        
        return (            
            <div>                
                <IconCodeContainer>
                    
                    <div><IconTitle>{ ICON_SETS[iconSet].title } </IconTitle></div>
                    <CodeContainer>                        
                        <code>{`import {${selectedIcon}} from 'react-icons-kit/${iconSet}/${selectedIcon}'`}</code>
                        <CopyContainer><Icon onClick={this.copyToClipboard} icon={copyIcon} size={16}/></CopyContainer>
                    </CodeContainer>
                    
                </IconCodeContainer>
                <div style={{marginTop: 100 }}>   
                { !iconSetData || Object.keys(iconSetData).length === 0 ? this.showLoading() : this.showIconSetData() }
                </div>
            </div>
        )
    }

}


export interface IIconSetProp {
    iconSet: string
    iconSetData: any
    selectedIcon: string
    onIconSelected: (iconName: string, iconSet: string) => void    
}