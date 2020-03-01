import { RGBNumberRange, DegreeNumberRange } from './utils'
import { StyleObject } from '../parse/parse'

export type ColorType = 'rgb' | 'rgba' | 'hsl' | 'hex'

export type Percent = number

export type RGBColor = [RGBNumberRange, RGBNumberRange, RGBNumberRange]

export interface RGB {
  type: ColorType
  value: RGBColor
}

export type RGBAColor = [RGBNumberRange, RGBNumberRange, RGBNumberRange, number]

export interface RGBA {
  type: ColorType
  value: RGBAColor
}

export type HSLColor = [DegreeNumberRange, Percent, Percent]

export interface HSL {
  type: ColorType
  value: HSLColor
}

export type HEXColor = string

export interface HEX {
  type: ColorType
  value: HEXColor
}

export type Color = RGB | RGBA | HSL | HEX

export const rgb = (
  r: RGBNumberRange,
  g: RGBNumberRange,
  b: RGBNumberRange
): RGB => ({ type: 'rgb', value: [r, g, b] })

export const rgba = (
  r: RGBNumberRange,
  g: RGBNumberRange,
  b: RGBNumberRange,
  alpha: number
): RGBA => ({ type: 'rgba', value: [r, g, b, alpha] })

export const hsl = (
  hue: DegreeNumberRange,
  saturation: Percent,
  lightness: Percent
): HSL => ({ type: 'hsl', value: [hue, saturation, lightness] })

export const hex = (value: string): HEX => ({ type: 'hex', value })

export const parseRGB = (value: RGBColor): string =>
  `rgb(${value[0]}, ${value[1]}, ${value[2]})`

export const parseRGBA = (value: RGBAColor): string =>
  `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]})`

export const parseHSL = (value: HSLColor): string =>
  `hsl(${value[0]}, ${value[1]}%, ${value[2]}%)`

export const parseHEX = (value: HEXColor): string => value

export const isRGB = (value: any) => value?.type === 'rgb'

export const isRGBA = (value: any) => value?.type === 'rgba'

export const isHSL = (value: any) => value?.type === 'hsl'

export const isHEX = (value: any) => value?.type === 'hex'

export const isColor = (value: any) =>
  isRGB(value) || isRGBA(value) || isHSL(value) || isHEX(value)

export const parseColor = (color: Color): string => {
  if (isColor(color)) {
    const { value } = color

    if (isRGB(color)) {
      return parseRGB(value as RGBColor)
    }

    if (isRGBA(color)) {
      return parseRGBA(value as RGBAColor)
    }

    if (isHSL(color)) {
      return parseHSL(value as HSLColor)
    }

    if (isHEX(color)) {
      return parseHEX(value as HEXColor)
    }
  }

  return String(color)
}

export const color = (value: Color) => ({
  color: (isColor(value) ? parseColor(value) : value) as string
})
