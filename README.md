react-reacticons
=================


# Installation

```
npm install --save-dev react-reacticons
```

# Documentation / Demo

Please visit [react-reacticons](http://wmira.github.io/reacticons/)

# Usage

```javascript
    
    import Icon from 'react-reacticons';
    import { ic_add_a_photo } from 'react-reacticons/material-design';
    import { lock } from 'react-reacticons/fontawesome';

    export const ShowIcons = () => {

        return (
            <div>
                <div><Icon icon={ic_add_a_photo}/><div>
                <div><Icon icon={lock}/><div>
            </div>
        )
    }
```

# Unused Icons

On your .babelrc, having the following preset should exlude unused icons:

```javascript

{
    "presets": [ 
        [ "es2015", { "modules": false } ]
    ]
}

```
Your bundler should at least support it (i.e. webpack2/rollup)

More info can be found here:

[Tree Shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html)
