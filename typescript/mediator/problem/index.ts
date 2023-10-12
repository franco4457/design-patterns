import { type Checkbox, type Button, type Input, findUser } from 'mediator'

export class InputUser implements Input {
  private value: string = ''
  private buttonForm: ButtonForm | null = null
  private wrong: boolean = false
  setValue(value: string) {
    this.buttonForm?.isChanged('inputUser')
    this.value = value
  }

  setButton(button: ButtonForm) {
    this.buttonForm = button
  }

  isWrong() {
    return this.wrong
  }

  setWrong(wrong: boolean) {
    this.wrong = wrong
  }

  getValue() {
    return this.value
  }
}
export class CheckboxAgree implements Checkbox {
  private value: boolean = false
  private buttonForm: ButtonForm | null = null
  check() {
    this.buttonForm?.isChanged('checkbox')
    this.value = !this.value
  }

  setButton(button: ButtonForm) {
    this.buttonForm = button
  }

  isChecked() {
    return this.value
  }
}

export class InputPassword implements Input {
  private value: string = ''
  private buttonForm: ButtonForm | null = null
  private wrong: boolean = false
  setValue(value: string) {
    this.buttonForm?.isChanged('inputPassword')
    this.value = value
  }

  setButton(button: ButtonForm) {
    this.buttonForm = button
  }

  isWrong() {
    return this.wrong
  }

  setWrong(wrong: boolean) {
    this.wrong = wrong
  }

  getValue() {
    return this.value
  }
}

export class ButtonForm implements Button {
  private hasChanged = {
    inputUser: false,
    inputPassword: false,
    checkbox: false
  }

  constructor(
    private readonly inputUser: InputUser,
    private readonly inputPassword: InputPassword,
    private readonly checkbox: CheckboxAgree
  ) {}

  isDisable() {
    const disable =
      this.inputUser.isWrong() ||
      this.inputPassword.isWrong() ||
      !this.checkbox.isChecked() ||
      Object.values(this.hasChanged).some((v) => !v)
    return disable
  }

  isChanged(key: keyof typeof this.hasChanged) {
    this.hasChanged[key] = true
    key !== 'checkbox' && this[key].setWrong(false)
  }

  click() {
    if (this.inputUser.getValue() === '') {
      this.inputUser.setWrong(true)
      this.hasChanged.inputUser = false
    }
    if (this.inputPassword.getValue() === '') {
      this.inputPassword.setWrong(true)
      this.hasChanged.inputPassword = false
    }
    if (!this.checkbox.isChecked()) {
      this.hasChanged.checkbox = false
    }
    if (this.isDisable()) {
      throw new Error('Form is not valid')
    }
    return findUser({
      username: this.inputUser.getValue(),
      password: this.inputPassword.getValue()
    })
  }
}
