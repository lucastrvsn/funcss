import { StyleObject } from '../index'

export const after = (...styles: StyleObject[]) => ({
  '::after': styles
})

export const before = (...styles: StyleObject[]) => ({
  '::before': styles
})

export const hover = (...styles: StyleObject[]) => ({
  ':hover': styles
})

export const active = (...styles: StyleObject[]) => ({
  ':active': styles
})

export const checked = (...styles: StyleObject[]) => ({
  ':checked': styles
})

export const disabled = (...styles: StyleObject[]) => ({
  ':disabled': styles
})
