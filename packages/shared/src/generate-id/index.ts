const possibleChars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'

export const generateId = (): string =>
  [...new Array(8)].reduce(
    acc => `${acc}${possibleChars[(Math.random() * 60) | 0]}`,
    ''
  )
