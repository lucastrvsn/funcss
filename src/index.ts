import { parse, StyleObject } from './parse/parse'

export * from './parse/parse'
export * from './selectors/selectors'
export * from './color/color'
export * from './background-color/background-color'
export * from './theme/theme'

const possibleChars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
const generateClassId = () =>
  [...new Array(8)].reduce(
    acc => `${acc}${possibleChars[(Math.random() * 60) | 0]}`,
    ''
  )

const toKebabCase = (string: string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

const transform = (styles: StyleObject) =>
  Object.entries(styles).reduce(
    (acc, [prop, value]) => `${acc}${toKebabCase(prop)}: ${value};`,
    ''
  )

const root = (styles: StyleObject): StyleObject =>
  Object.entries(styles)
    .filter(([key]) => /^([a-z])+$/gi.test(key))
    .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {})

const transformRoot = (styles: StyleObject) => [null, transform(root(styles))]

const selectors = (styles: StyleObject): StyleObject =>
  Object.entries(styles)
    .filter(([key]) => /^::?([a-z])+$/gi.test(key))
    .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {})

const transformSelectors = (styles: StyleObject) =>
  Object.entries(selectors(styles)).map(([selector, value]) => [
    selector,
    transform(value)
  ])

const combine = (css: string) => (...array: any[]): string => {
  return array.reduce((acc, current) => {
    if (current[0] === '' || current[1] === '') {
      return ''
    }

    if (current[0] === null) {
      return `${acc}${css}{${current[1]}}`
    }

    return `${acc}${current.reduce(
      (acc: string, [prop, value]) => `${acc}${css}${prop}{${value}}`,
      ''
    )}`
  }, '')
}

const dom = (cssClass: string, css: string) => {
  if (typeof window !== 'undefined') {
    const element = document.createElement('style')
    element.type = 'text/css'
    element.setAttribute('data-adlez', cssClass)
    element.appendChild(document.createTextNode(css))
    document.head.appendChild(element)
  } else {
    console.log(css)
  }
}

const adlez = (...styles: StyleObject[]): string => {
  const parsed = parse(styles)
  const cssClass = `css-${generateClassId()}`
  const css = combine(`.${cssClass}`)(
    transformRoot(parsed),
    transformSelectors(parsed)
  )

  // put generated css to the dom
  dom(cssClass, css)

  return cssClass
}

export default adlez
