export interface IEditor {
  text: string
  clipbbord: string
  replaceText: (text: string) => void
  deleteText: () => void
  getText: () => string
}
