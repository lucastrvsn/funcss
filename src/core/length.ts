export const absoluteLengthUnit = ['cm', 'mm', 'px', 'pt', 'pc'] as const

export const relativeLengthUnit = [
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  '%',
] as const

export type AbsoluteLengthUnit = typeof absoluteLengthUnit[number]

export type RelativeLengthUnit = typeof relativeLengthUnit[number]

export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit

export interface Length {
  type: 'length'
  value: [number, LengthUnit]
}

export const cm = (value: number): Length => ({
  type: 'length',
  value: [value, 'cm'],
})

export const mm = (value: number): Length => ({
  type: 'length',
  value: [value, 'mm'],
})

export const px = (value: number): Length => ({
  type: 'length',
  value: [value, 'px'],
})

export const pt = (value: number): Length => ({
  type: 'length',
  value: [value, 'pt'],
})

export const pc = (value: number): Length => ({
  type: 'length',
  value: [value, 'pc'],
})

export const em = (value: number): Length => ({
  type: 'length',
  value: [value, 'em'],
})

export const ex = (value: number): Length => ({
  type: 'length',
  value: [value, 'ex'],
})

export const ch = (value: number): Length => ({
  type: 'length',
  value: [value, 'ch'],
})

export const rem = (value: number): Length => ({
  type: 'length',
  value: [value, 'rem'],
})

export const vw = (value: number): Length => ({
  type: 'length',
  value: [value, 'vw'],
})

export const vh = (value: number): Length => ({
  type: 'length',
  value: [value, 'vh'],
})

export const vmin = (value: number): Length => ({
  type: 'length',
  value: [value, 'vmin'],
})

export const vmax = (value: number): Length => ({
  type: 'length',
  value: [value, 'vmax'],
})

export const p = (value: number): Length => ({
  type: 'length',
  value: [value, '%'],
})

const parse = (value: Length) => `${value.value[0]}${value.value[1]}`

export default parse
