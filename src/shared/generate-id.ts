const possibleChars =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'

const generateId = (): string =>
  [...new Array(8)].reduce(
    acc => `${acc}${possibleChars[(Math.random() * 60) | 0]}`,
    ''
  )

export default generateId
