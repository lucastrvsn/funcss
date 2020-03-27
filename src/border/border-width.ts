import { Length } from '../core'

export type BorderWidth =
  | Length
  | [Length]
  | [Length, Length]
  | [Length, Length, Length]
  | [Length, Length, Length, Length]

const parseBorderWidth = (value: BorderWidth) =>
  Array.isArray(value)
    ? value.reduce((acc, cur) => `${acc} ${cur}`, '')
    : `${value}`

export const borderWidth = (value: Length) => parseBorderWidth(value[1])
