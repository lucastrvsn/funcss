export const create = (o: { [key: string]: any }) =>
  Object.assign(Object.create(null), o)
