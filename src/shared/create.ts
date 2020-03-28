// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = (o: { [key: string]: any }) =>
  Object.assign(Object.create(null), o)

export default create
