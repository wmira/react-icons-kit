


export const IMPORT_JSX = `

import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

export const IconHome () => <Icon icon={home} />

`

export const COMPOSE_JSX = `

//File ProjectIcons.js
import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
import { home2 } from 'react-icons-kit/icomoon'
import { home3 } from 'react-icons-kit/icomoon'

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 64, style: {color: '#EF233C'}})

export const HomeIcon1 = () => <SideIconContainer icon={home}/>
export const HomeIcon2 = () => <SideIconContainer icon={home2}/>
export const HomeIcon3 = () => <SideIconContainer icon={home3}/>


`

export const basicUsage = `

<Center>
    <InlineItems>
        <Icon icon={home} />
        <Icon size={32} icon={home} />
        <Icon size={64} icon={home} />
        <div style={{width: 24, height: 24}}>
            <Icon size={'100%'} icon={home}/>
        </div>
    </InlineItems>
</Center>

`
export const changingColors = `

<Center>
    <InlineItems>
        <div style={{ color: '#F4A261' }}>
            <Icon size={64} icon={home}/>
        </div>
        <div style={{ color: '#2A9D8F' }}>
            <Icon size={64} icon={home}/>
        </div>
        <div style={{ color: '#E9C46A' }}>
            <Icon size={64} icon={home}/>
        </div>
    </InlineItems>
</Center>

`

export const composeIcon = `

// import { HomeIcon1, HomeIcon2, HomeIcon 3} from ...
<Center>
    <div>
        <div><HomeIcon1/></div>
        <div><HomeIcon2/></div>
        <div><HomeIcon3/></div>
    </div>
</Center>

`