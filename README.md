# adlez

> opinionated atomic way to compose css styles

## Instalation

```bash
yarn add adlez
```

## Usage

```js
import a, { color, rgb, hover } from 'adlez'

const el = document.createElement('div')
el.className = a(color(rgb(255, 0, 0)), hover(color(rgb(0, 255, 255))))

/** output:
 * css-awe12ic {
 *  color: rgb(255, 0, 0);
 * }
 * css-awe12ic:hover {
 *  color: rgb(0, 255, 255);
 * }
 */
```

## Planned features

- [ ] all css proprieties
- [ ] cache generated style
- [ ] media query support
- [ ] theme for style (dynamic styling)
- [ ] some refactoring and tests (MUST! 😫)
- [ ] hook for react components
