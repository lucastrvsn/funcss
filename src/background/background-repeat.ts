export type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'

export const bgRepeat = (value: BackgroundRepeat) => ({
  backgroundRepeat: value
})
