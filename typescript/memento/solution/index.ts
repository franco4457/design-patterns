interface Snapshot {
  restore: () => void
}

export class Editor {
  private text: string
  private curX: number
  private curY: number
  constructor({ text = '', curX = 0, curY = 0 }: { text?: string; curX?: number; curY?: number }) {
    this.text = text
    this.curX = curX
    this.curY = curY
  }

  setText(text: string) {
    this.text = text
  }

  setCursor(curX: number, curY: number) {
    this.curX = curX
    this.curY = curY
  }

  // Memento
  private readonly EditorSnapshot = class implements Snapshot {
    private readonly editor: Editor
    private readonly text: string
    private readonly curX: number
    private readonly curY: number
    constructor(editor: Editor, text: string, curX: number, curY: number) {
      this.editor = editor
      this.text = text
      this.curX = curX
      this.curY = curY
    }

    restore() {
      this.editor.setText(this.text)
      this.editor.setCursor(this.curX, this.curY)
    }
  }

  createSnapshot(): Snapshot {
    return new this.EditorSnapshot(this, this.text, this.curX, this.curY)
  }

  getState() {
    return {
      text: this.text,
      curX: this.curX,
      curY: this.curY
    }
  }
}

export class Historial {
  private readonly snapshots: Snapshot[] = []
  private curState: number = 0

  addState(editor: Editor) {
    const snapshot = editor.createSnapshot()
    this.snapshots.push(snapshot)
    this.curState = this.snapshots.length - 1
  }

  undo() {
    if (this.curState > 0) {
      this.curState--
      this.snapshots[this.curState].restore()
    }
  }

  redo() {
    if (this.curState < this.snapshots.length - 1) {
      this.curState++
      this.snapshots[this.curState].restore()
    }
  }
}
