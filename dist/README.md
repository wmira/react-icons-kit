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
    import { Icon } from 'react-reacticons/Icon';
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