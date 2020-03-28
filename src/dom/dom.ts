import { StyleObject } from '../core'
import { toKebabCase, generateId } from '../shared'
import style from './style'

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
    transform(value),
  ])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const combine = (css: string) => (...array: any[]): string =>
  array.reduce((acc, current) => {
    console.log(current)

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

export const dom = (styles: StyleObject) => {
  if (typeof window !== 'undefined') {
    const cssClass = `css-${generateId()}`
    const css = combine(`.${cssClass}`)(
      transformRoot(styles),
      transformSelectors(styles)
    )

    const element = document.createElement('style')
    element.type = 'text/css'
    element.setAttribute('data-adlez', cssClass)
    element.appendChild(document.createTextNode(css))
    document.head.appendChild(element)
  }
}

export default (styles: StyleObject[]) => dom(style(styles))
