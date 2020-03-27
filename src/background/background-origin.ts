export type BackgroundOrigin = 'border-box' | 'padding-box' | 'content-box'

export const bgOrigin = (value: BackgroundOrigin) => ({
  backgroundOrigin: value
})
