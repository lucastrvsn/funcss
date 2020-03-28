export type BackgroundAttachment = 'scroll' | 'fixed' | 'local'

export const bgAttachment = (value: BackgroundAttachment) => ({
  backgroundAttachment: value,
})
