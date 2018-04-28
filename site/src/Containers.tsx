
import styled from 'styled-components'

import { Colors } from './colors'

export const Title = styled.h2`
    color: ${Colors.title}
`

export const IconSetContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;   
`


export const IconView = styled.div`
    width: 140px;
    padding: 10px 4px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;    
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    &:hover {
        color: #FFF;
        background: ${Colors.main}
    }
`
export const SelectedIconView = styled(IconView)`
    color: #FFF;
    background: ${Colors.main}
`

export const IconTitle = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 12px;
`

export const StaticCodeContainer = styled.div`    
    width: 100%;
    font-size: 0.9em;
`

export const StaticCode = styled.div`    
    width: ${ (props: ({ width?: string})) => props.width ? props.width : '620px;'}    
`

export const IconCodeContainer = styled.div`
    background: #FFF;
    width: 100%;
    position: fixed; 
    top: 62px;
    height: 80px;
    padding: 12px;
`

