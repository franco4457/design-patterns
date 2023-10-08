import {
  ButtonClear,
  ButtonCopy,
  ButtonPaste,
  CommandClear,
  CommandCopy,
  CommandPaste,
  Editor,
  ShortcutClear,
  ShortcutCopy,
  ShortcutPaste
} from '.'

describe('Command solution', () => {
  it.concurrent('should be manipulate editor whit btn', () => {
    const editor = new Editor('Hello world')
    const copyComannd = new CommandCopy(editor)
    const pasteComannd = new CommandPaste(editor)
    const clearComannd = new CommandClear(editor)
    const btnCopy = new ButtonCopy(copyComannd)
    const btnPaste = new ButtonPaste(pasteComannd)
    const btnClear = new ButtonClear(clearComannd)
    btnCopy.onClick('Hello world 2')
    expect(editor.clipbbord).toBe('Hello world 2')
    expect(editor.getText()).toBe('Hello world')
    btnPaste.onClick()
    expect(editor.getText()).toBe('Hello world 2')
    btnClear.onClick()
    expect(editor.text).toBe('')
  })
  it('should be manipulate editor whit shortcut', () => {
    const editor = new Editor('Hello world')
    const copyComannd = new CommandCopy(editor)
    const pasteComannd = new CommandPaste(editor)
    const clearComannd = new CommandClear(editor)
    const shortcutCopy = new ShortcutCopy(copyComannd)
    const shortcutPaste = new ShortcutPaste(pasteComannd)
    const shortcutClear = new ShortcutClear(clearComannd)
    shortcutCopy.onCtrlC('Hello world 2')
    expect(editor.getText()).toBe('Hello world')
    expect(editor.clipbbord).toBe('Hello world 2')
    shortcutPaste.onCtrlV()
    expect(editor.getText()).toBe('Hello world 2')
    shortcutClear.onCtrlL()
    expect(editor.text).toBe('')
  })
})
