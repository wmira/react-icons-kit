

import * as React from 'react'
// @ts-ignore
import { withBaseIcon } from 'react-icons-kit'
// @ts-ignore
import { home } from 'react-icons-kit/icomoon'
// @ts-ignore
import { home2 } from 'react-icons-kit/icomoon'
// @ts-ignore
import { home3 } from 'react-icons-kit/icomoon'
// @ts-ignore

const SideIconContainer = withBaseIcon({ size: 64, style: {color: '#EF233C'}})

export const HomeIcon1 = () => (<SideIconContainer icon={home}/>)
export const HomeIcon2 = () => (<SideIconContainer icon={home2}/>)
export const HomeIcon3 = () => (<SideIconContainer icon={home3}/>)