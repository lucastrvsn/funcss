import { StyleObject } from '../core'

const transform = (styles: StyleObject[]): StyleObject =>
  styles.reduce((acc, cur) => {
    const [prop, value] = Object.entries(cur)[0]

    return { ...acc, [prop]: value }
  }, {})

export const after = (styles: StyleObject[]) => ({
  '::after': transform(styles),
})

export const before = (styles: StyleObject[]) => ({
  '::before': transform(styles),
})

export const hover = (styles: StyleObject[]) => ({
  ':hover': transform(styles),
})

export const active = (styles: StyleObject[]) => ({
  ':active': transform(styles),
})

export const checked = (styles: StyleObject[]) => ({
  ':checked': transform(styles),
})

export const disabled = (styles: StyleObject[]) => ({
  ':disabled': transform(styles),
})
