import { Length } from '@adlez/core'

type BorderSide = Length

export type BorderWidth =
  | BorderSide
  | [BorderSide]
  | [BorderSide, BorderSide]
  | [BorderSide, BorderSide, BorderSide]
  | [BorderSide, BorderSide, BorderSide, BorderSide]

const parseBorderWidth = (value: BorderWidth) =>
  Array.isArray(value)
    ? value.reduce((acc, cur) => `${acc} ${cur}`, '')
    : `${value}`

export const borderWidth = (value: Length) => parseBorderWidth(value[1])
