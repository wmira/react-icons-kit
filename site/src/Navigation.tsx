
import * as React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { IIconSetMap } from './state'


const Item = styled.div`
    margin: 8px 22px;
`
const IconLinkContainer = styled.div`
    padding: 6px;
    & > a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`
export interface INavigationProps {
    iconsets: IIconSetMap
}

export const Navigation = (props: INavigationProps) => (
    <div>
        <Item><IconLinkContainer><Link to='/guide'>Installation and Usage</Link></IconLinkContainer></Item>
        <Item>Icons</Item>
        <div style={{paddingLeft: 36}}>
            {
                Object.keys(props.iconsets).map( iconSet => {
                    const { title, module } = props.iconsets[iconSet]
                    return <IconLinkContainer key={module}><Link to={`/iconset/${module}`}>{title}</Link></IconLinkContainer>
                })
            }
        </div>
    </div>
)

