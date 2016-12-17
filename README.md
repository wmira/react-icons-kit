react-icons-kit
=================


# Installation

```
npm install --save-dev react-icon-kit
```

# Documentation / Demo

Please visit [react-icons-kit](http://wmira.github.io/react-icon-kit/)

# Icon Sets Available

1. FontAwesome 4.7
2. Material Design 3.0.1
3. IcoMoon Latest Release

Plus more to come.

# Quick Start Guide

```javascript
    
    import Icon from 'react-icons-kit';
    import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
    import { lock } from 'react-icons-kit/fa/lock';

    export const ShowIcons = () => {

        return (
            <div>
                <div><Icon icon={ic_add_a_photo}/><div>
                <div><Icon icon={lock}/><div>
            </div>
        )
    }
```
