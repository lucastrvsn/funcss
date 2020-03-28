import { Length } from '../core'
import { Percent } from '../shared'

export type BackgroundSize = 'auto' | 'cover' | 'content' | Length | Percent

const parse = (value: BackgroundSize) => {
  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'number') {
    return `${value}%`
  }
}

export const bgSize = (value: BackgroundSize) => ({
  backgroundSize: parse(value),
})
