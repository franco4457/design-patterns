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
abstract class Command {
  protected selectedText: string = ''
  setSelection(selectedText: string) {
    this.selectedText = selectedText
  }

  constructor(public editor: Editor) {}
  abstract execute(): void
}

export class CommandCopy extends Command {
  execute() {
    this.editor.clipbbord = this.selectedText
  }
}
export class CommandPaste extends Command {
  execute() {
    this.editor.replaceText(this.editor.clipbbord)
  }
}

export class CommandClear extends Command {
  execute() {
    this.editor.deleteText()
  }
}
export class ButtonCopy {
  constructor(private readonly command: CommandCopy) {}

  onClick(string: string) {
    this.command.setSelection(string)
    this.command.execute()
  }
}

export class ButtonPaste {
  constructor(private readonly command: CommandPaste) {}

  onClick() {
    this.command.execute()
  }
}

export class ButtonClear {
  constructor(private readonly command: CommandClear) {}

  onClick() {
    this.command.execute()
  }
}
export class ShortcutCopy {
  constructor(private readonly command: CommandCopy) {}

  onCtrlC(selectedText: string) {
    this.command.setSelection(selectedText)
    this.command.execute()
  }
}

export class ShortcutPaste {
  constructor(private readonly command: CommandPaste) {}

  onCtrlV() {
    this.command.execute()
  }
}

export class ShortcutClear {
  constructor(private readonly command: CommandClear) {}
  onCtrlL() {
    this.command.execute()
  }
}
