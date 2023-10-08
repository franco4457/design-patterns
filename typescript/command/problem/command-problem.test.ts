import {
  ButtonClear,
  ButtonCopy,
  ButtonPaste,
  Editor,
  ShortcutClear,
  ShortcutCopy,
  ShortcutPaste
} from '.'

describe('Command problem', () => {
  it.concurrent('should be manipulate editor whit btn', () => {
    const editor = new Editor('Hello world')
    const btnCopy = new ButtonCopy(editor)
    const btnPaste = new ButtonPaste(editor)
    const btnClear = new ButtonClear(editor)
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
    const shortcutCopy = new ShortcutCopy(editor)
    const shortcutPaste = new ShortcutPaste(editor)
    const shortcutClear = new ShortcutClear(editor)
    shortcutCopy.onCtrlC('Hello world 2')
    expect(editor.getText()).toBe('Hello world')
    expect(editor.clipbbord).toBe('Hello world 2')
    shortcutPaste.onCtrlV()
    expect(editor.getText()).toBe('Hello world 2')
    shortcutClear.onCtrlL()
    expect(editor.text).toBe('')
  })
})
