import { Editor, Historial } from '.'

const iState = { text: 'a', curX: 1, curY: 2 }
describe('Memento Problem', () => {
  it('should be set state', () => {
    const editor = new Editor(iState)
    const historial = new Historial(editor)
    expect(editor).toEqual(iState)
    editor.text = 'b'
    editor.curX = 3
    editor.curY = 4
    expect(editor).toEqual({ text: 'b', curX: 3, curY: 4 })
    historial.addState(editor)
    expect(historial.getEditor()).toEqual({ text: 'b', curX: 3, curY: 4 })
  })
  it('should be undo', () => {
    const editor = new Editor(iState)
    const historial = new Historial(editor)
    editor.text = 'b'
    editor.curX = 3
    editor.curY = 4
    historial.addState(editor)
    editor.text = 'c'
    editor.curX = 5
    editor.curY = 6
    historial.addState(editor)
    expect(historial.getEditor()).toEqual({ text: 'c', curX: 5, curY: 6 })
    historial.undo()
    expect(historial.getEditor()).toEqual({ text: 'b', curX: 3, curY: 4 })
  })
  it('should be redo', () => {
    const editor = new Editor(iState)
    const historial = new Historial(editor)
    editor.text = 'b'
    editor.curX = 3
    editor.curY = 4
    historial.addState(editor)
    editor.text = 'c'
    editor.curX = 5
    editor.curY = 6
    historial.addState(editor)
    expect(historial.getEditor()).toEqual({ text: 'c', curX: 5, curY: 6 })
    historial.undo()
    expect(historial.getEditor()).toEqual({ text: 'b', curX: 3, curY: 4 })
    historial.redo()
    expect(historial.getEditor()).toEqual({ text: 'c', curX: 5, curY: 6 })
  })
})
