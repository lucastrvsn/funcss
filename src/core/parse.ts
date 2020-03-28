export type StyleObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: StyleObject | StyleObject[] | string | any
}

const parse = (styles: StyleObject[]): StyleObject =>
  styles.reduce((acc, cur) => {
    const prop = Object.keys(cur)[0]
    const value = cur[prop]

    return {
      ...acc,
      [prop]: Array.isArray(value) ? parse(value) : value,
    }
  }, {})

export default parse
