
import * as React from 'react'
import { ReactElement } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App'

export const createApp = (): ReactElement<Router> => {

    return (       
        <Router>
            <Route path='/' component={App} />
        </Router>          
    )
}