import type { IEditor } from 'command'

export class Editor implements IEditor {
  clipbbord: string = ''
  constructor(public text: string) {}

  replaceText(text: string) {
    this.text = text
  }

  deleteText() {
    this.text = ''
  }

  getText() {
    return this.text
  }
}

export class ButtonCopy {
  constructor(public editor: Editor) {}
  onClick(string: string) {
    this.editor.clipbbord = string
  }
}
export class ButtonPaste {
  constructor(public editor: Editor) {}
  onClick() {
    this.editor.replaceText(this.editor.clipbbord)
  }
}
export class ButtonClear {
  constructor(public editor: Editor) {}
  onClick() {
    this.editor.deleteText()
  }
}
export class ShortcutCopy {
  constructor(public editor: Editor) {}
  onCtrlC(string: string) {
    this.editor.clipbbord = string
  }
}

export class ShortcutPaste {
  constructor(public editor: Editor) {}
  onCtrlV() {
    this.editor.replaceText(this.editor.clipbbord)
  }
}

export class ShortcutClear {
  constructor(public editor: Editor) {}
  onCtrlL() {
    this.editor.deleteText()
  }
}
