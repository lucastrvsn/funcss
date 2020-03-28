import { Color, parseColor } from '../color'

export const bgColor = (value: Color) => ({
  backgroundColor: parseColor(value),
})
