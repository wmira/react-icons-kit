
import * as React from 'react'
import styled from 'styled-components'

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'

const StyledProvider = styled(LiveProvider)`    
    overflow: hidden;    
    margin: 0 auto;
`

const LiveWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    width: 720px;
    margin: 0 auto;
`

const StyledEditor = styled(LiveEditor)`    
    font-size: 0.84em;
    font-family: Arial;
    height: ${props => props.height ? props.height : '240px'};
    overflow: auto;
    border: 1px solid #C5C3C6;
    width: 400px;
`

const StyledPreview = styled(LivePreview)`
    position: relative;
    padding: 0.5rem;        
    height: auto;
    overflow: hidden;  
    width: 320px;
`

export const Editor = (props: IEditorProps) => (
    <StyledProvider
        code={props.code}
        scope={props.scope}>
        <LiveWrapper>
            <StyledEditor height={props.height}/>
            <StyledPreview/>
        </LiveWrapper>
        <LiveError/>
    </StyledProvider>
)

export interface IEditorProps {
    code: string
    scope: { [key: string]: object }
    height?: string
}