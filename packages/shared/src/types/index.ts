export const cssKeywords = ['inherit', 'initial', 'unset'] as const

export type CssKeywords = typeof cssKeywords[number]

export type Width = 'auto'

export type Percent = number
