import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createApp } from './createApp'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
  
  html, body {
    margin: 0;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-size: 16px;        
    font-family: 'Open Sans', sans-serif;   
  }
  #root {

  }
  * {
    box-sizing: border-box;
  }

  .prism-code {
    background: #474949 !important;
  }
`


const App: React.ReactElement<any> = createApp()

ReactDOM.render(
  App,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
