# adlez

![Publish](https://github.com/lucastrvsn/adlez/workflows/Publish/badge.svg?branch=master&event=push)

> opinionated atomic way to compose css styles

## Instalation

```bash
yarn add adlez
```

## Usage

```js
import adlez, { color, rgb, hover } from 'adlez'

const el = document.createElement('div')

el.className = adlez(color(rgb(255, 0, 0)), hover(color(rgb(0, 255, 255))))
```

```js
import React from 'react'
import adlez, { color, bgColor, rgb, rgba, hover } from 'adlez'

const btn = adlez(
  color(rgb(255, 0, 0)),
  bgColor(rgba(255, 255, 0, 0.4))
  hover(
    color(rgb(0, 255, 255))
    bgColor(rgba(255, 255, 0, 1))
  )
)

function Button() {
  return <button className={btn}>Button</button>
}

export default Button
```

## Planned features

- [ ] all css proprieties
- [ ] cache generated style
- [ ] media query support
- [ ] theme for style (dynamic styling)
- [ ] some refactoring and tests (MUST! 😫)
- [ ] hook for react components
