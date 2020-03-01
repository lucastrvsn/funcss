import { parseColor } from '@adlez/color'
import { Color } from '@adlez/shared'

export const bgColor = (value: Color) => ({
  backgroundColor: parseColor(value)
})
