react-icons-kit
=================


# Installation

```
npm install --save-dev react-icons-kit
```

# Documentation / Demo

Please visit [react-icons-kit](http://wmira.github.io/react-icons-kit/)

# Bundled Icon Sets

* [`IcoMoon`](https://github.com/Keyamoon/IcoMoon-Free) vmaster
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) v4.7
* [`MaterialIcons`](https://www.google.com/design/icons/) v3.0.1
* [`Open Iconic`](https://github.com/iconic/open-iconic) v1.1.1
* [`Entypo`](http://entypo.com) latest



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
