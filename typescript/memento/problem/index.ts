export class Editor {
  text: string
  curX: number
  curY: number
  constructor({ text = '', curX = 0, curY = 0 }: Partial<Editor>) {
    this.text = text
    this.curX = curX
    this.curY = curY
  }
}
export class Historial {
  private readonly states: Editor[] = []
  private curState: number = 0
  constructor(private editor: Editor) {
    this.addState(editor)
  }

  addState(editor: Editor) {
    const newEditor = new Editor(editor)
    this.states.push(newEditor)
    this.editor = newEditor
    this.curState = this.states.length - 1
  }

  undo() {
    if (this.curState > 0) {
      this.curState--
      this.editor = this.states[this.curState]
    }
  }

  redo() {
    if (this.curState < this.states.length - 1) {
      this.curState++
      this.editor = this.states[this.curState]
    }
  }

  getEditor() {
    return this.editor
  }
}
