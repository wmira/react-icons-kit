

import * as React from 'react'
import { MouseEvent } from 'react'
import { IconSetContainer, IconView, IconTitle, IconCodeContainer, SelectedIconView } from './Containers'
import { ICON_SETS } from './state'
import { Icon } from 'react-icons-kit'

interface IconContainerProps {
    iconData: any
    iconName: string
    selectedIcon: string
    onClick: ((event: MouseEvent<HTMLDivElement>) => void) | undefined
}

const IconContainer = (props: IconContainerProps) => {
    const IconViewContainer = props.iconName === props.selectedIcon ? SelectedIconView : IconView 
    // console.log('IS IT THE SAME ? ', `ICON NAME: ${props.iconName}`, `S: ${props.selectedIcon}`, props.iconName === props.selectedIcon)
    return (
        <IconViewContainer onClick={props.onClick} data-icon={props.iconName}>        
            <div ><Icon size={32} icon={props.iconData} /></div>
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
            <IconSetContainer>
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
        const target = e.target as HTMLDivElement
        const iconName = target.getAttribute('data-icon')        
        if ( iconName ) {
            this.props.onIconSelected(iconName, this.props.iconSet)
        }
    }
    

    public render() {
        const { iconSetData = null, iconSet, selectedIcon = '' } = this.props        
        return (            
            <div>                
                <IconCodeContainer>
                    <IconTitle>{ ICON_SETS[iconSet].title } </IconTitle>
                    <code>{`import {${selectedIcon}} from 'react-icons-kit/${iconSet}/${selectedIcon}'`}</code>
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