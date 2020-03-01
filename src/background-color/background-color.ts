import { Color, parseColor } from '../color/color'

export const map = {
  backgroundColor: 'background-color'
}

export const bgColor = (value: Color) => ({
  backgroundColor: parseColor(value)
})
