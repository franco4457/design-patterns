import { Editor, Historial } from '.'

const iState = { text: 'a', curX: 1, curY: 2 }
describe('Memento Solution', () => {
  it('should be set state', () => {
    const editor = new Editor(iState)
    const historial = new Historial()
    editor.setText('a')
    editor.setCursor(1, 2)
    expect(editor).toEqual({ text: 'a', curX: 1, curY: 2 })
    historial.addState(editor)
    expect(editor).toEqual({ text: 'a', curX: 1, curY: 2 })
  })
  it('should be undo', () => {
    const editor = new Editor(iState)
    const historial = new Historial()
    editor.setText('b')
    editor.setCursor(3, 4)
    historial.addState(editor)
    editor.setText('c')
    editor.setCursor(5, 6)
    historial.addState(editor)
    expect(editor).toEqual({ text: 'c', curX: 5, curY: 6 })
    historial.undo()
    expect(editor).toEqual({ text: 'b', curX: 3, curY: 4 })
  })
  it('should be redo', () => {
    const editor = new Editor(iState)
    const historial = new Historial()
    editor.setText('b')
    editor.setCursor(3, 4)
    historial.addState(editor)
    editor.setText('c')
    editor.setCursor(5, 6)
    historial.addState(editor)
    expect(editor).toEqual({ text: 'c', curX: 5, curY: 6 })
    historial.undo()
    expect(editor).toEqual({ text: 'b', curX: 3, curY: 4 })
    historial.redo()
    expect(editor).toEqual({ text: 'c', curX: 5, curY: 6 })
  })
})
