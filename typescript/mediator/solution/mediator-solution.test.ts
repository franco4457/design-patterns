import { Button, Checkbox, Input, Mediator } from './index'

const loadForm = () => {
  const btn = new Button()
  const inputUser = new Input()
  const inputPassword = new Input()
  const checkbox = new Checkbox()
  const mediator = new Mediator(btn, inputUser, inputPassword, checkbox)
  btn.setMediator(mediator)
  inputUser.setMediator(mediator)
  inputPassword.setMediator(mediator)
  checkbox.setMediator(mediator)
  return {
    btn,
    inputUser,
    inputPassword,
    checkbox
  }
}
describe('Mediator Problem', () => {
  it('should be throw error if form is not valid', () => {
    const { btn } = loadForm()
    expect(() => btn.click()).toThrowError('Form is not valid')
  })
  it('should be throw error if form is not valid and sets wrongs input', () => {
    const { btn, inputUser, inputPassword } = loadForm()
    expect(() => btn.click()).toThrowError('Form is not valid')
    expect(inputUser.isWrong()).toBe(true)
    expect(inputPassword.isWrong()).toBe(true)
  })
  it('should be find user if form is valid', () => {
    const { btn, inputUser, inputPassword, checkbox } = loadForm()
    inputUser.setValue('user1')
    inputPassword.setValue('password1')
    checkbox.check()
    expect(btn.isDisable()).toBe(false)
    expect(btn.click()).toEqual({ username: 'user1', password: 'password1' })
  })
})
