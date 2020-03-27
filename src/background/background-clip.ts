export type BackgroundClip = 'border-box' | 'padding-box' | 'content-box'

export const bgClip = (value: BackgroundClip) => ({
  backgroundClip: value
})
