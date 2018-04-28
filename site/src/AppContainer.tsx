
import * as React from 'react'
import styled from 'styled-components'
import { ReactNode, ReactElement } from 'react'

import { Colors } from './colors'

const SIDENAV_WIDTH = 260;

export const Root = styled.div`
    position: relative;
    overflow: auto;
`

export const Container = styled.div`
    padding-left: ${SIDENAV_WIDTH}px
`

const HeaderContainer = styled.div`
    position: fixed;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 62px;
    background: ${Colors.main}
    color: #FFF;
    font-weight: bold;
    padding: 10px;    
`
HeaderContainer.displayName = 'HeaderContainer'

const SideNavContainer = styled.div`
    position: fixed;
    overflow-y: auto;
    left: 0px;
    top: 62px;
    right: auto;
    bottom: 0;
    background: ${Colors.gray1}
    width: ${SIDENAV_WIDTH}px;
`

const SideNav = styled.div`
    height: 100%;
    padding-top: 20px;
`

const Content = styled.div`
    max-width: 100%;
    padding: 62px 24px 24px 24px;
`


export interface IContainerProps {
    children: ReactNode
}

export const HeaderText = styled.div`
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 1.4em
    padding-left: 12px;
`


export const Header: React.SFC<IContainerProps>  = (props) => null
export const Body: React.SFC<IContainerProps> = (props: IContainerProps) => null
export const Nav: React.SFC<IContainerProps> = (props: IContainerProps) => null


export interface IAppContainerProps {
    children: ReactNode[]
}

export const findElementChildren = (type: React.SFC<IContainerProps>, props: IAppContainerProps): ReactElement<IContainerProps> => {
    const { children } = props
    
    const el = children.reduce( (found, node) => {
        const element = node as ReactElement<any>
        if ( found ) {
            return found
        } else if ( element && element.type === type ) {
            return node            
        }
        return null
    }, null)
    
    return el as ReactElement<IContainerProps>
}

export const AppContainer = (props: IAppContainerProps) => {
    
    const headerElement = findElementChildren(Header, props) 
    const sideNavElement = findElementChildren(Nav, props)
    const bodyElement = findElementChildren(Body, props)
    return (
        <Root>
            <Container>
                <div>
                    <HeaderContainer>
                        { headerElement.props.children }
                    </HeaderContainer>
                    <SideNavContainer>
                        <SideNav>
                            { sideNavElement.props.children }
                        </SideNav>
                    </SideNavContainer>
                </div>
                <Content>
                    { bodyElement.props.children }
                </Content>
            </Container>
        </Root>
    )
}