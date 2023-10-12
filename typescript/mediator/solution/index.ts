import {
  type Button as IButton,
  type Checkbox as ICheckbox,
  type Input as IInput,
  findUser
} from 'mediator'

export class Mediator {
  private readonly validValues = {
    inputUser: false,
    inputPassword: false,
    checkbox: false
  }

  constructor(
    private readonly buttonForm: IButton,
    private readonly inputUser: IInput,
    private readonly inputPassword: IInput,
    private readonly checkbox: ICheckbox
  ) {}

  private validate(key?: keyof typeof this.validValues) {
    if (key != null) {
      return this.validValues[key]
    }
    return Object.values(this.validValues).some((v) => !v)
  }

  nofity(
    sender: IButton | IInput | ICheckbox,
    event: 'click' | 'change' | 'validate'
  ): ReturnType<typeof findUser> | undefined | boolean {
    if (sender === this.buttonForm) {
      if (event === 'click') {
        if (this.inputUser.getValue() === '') this.validValues.inputUser = false
        if (this.inputPassword.getValue() === '') this.validValues.inputPassword = false
        if (!this.checkbox.isChecked()) this.validValues.checkbox = false
        if (this.validate()) throw new Error('Form is not valid')

        return findUser({
          username: this.inputUser.getValue(),
          password: this.inputPassword.getValue()
        })
      } else if (event === 'validate') {
        return this.validate()
      }
    }
    if (sender === this.inputUser || sender === this.inputPassword) {
      if (event === 'change') {
        this.validValues[sender === this.inputUser ? 'inputUser' : 'inputPassword'] = true
      } else if (event === 'validate') {
        return !this.validate(sender === this.inputUser ? 'inputUser' : 'inputPassword')
      }
    }
    if (sender === this.checkbox) {
      if (event === 'change') {
        this.validValues.checkbox = true
      }
    }
    return undefined
  }
}

export class Button implements IButton {
  constructor(private mediator?: Mediator) {}
  setMediator(mediator: Mediator) {
    this.mediator = mediator
  }

  isDisable(): boolean {
    return this.mediator?.nofity(this, 'validate') as boolean
  }

  click() {
    return this.mediator?.nofity(this, 'click')
  }
}
export class Input implements IInput {
  private value = ''
  constructor(private mediator?: Mediator) {}
  setMediator(mediator: Mediator) {
    this.mediator = mediator
  }

  isWrong(): boolean {
    return this.mediator?.nofity(this, 'validate') as boolean
  }

  setValue(value: string) {
    this.mediator?.nofity(this, 'change')
    this.value = value
  }

  getValue(): string {
    return this.value
  }
}
export class Checkbox implements ICheckbox {
  private checked = false
  constructor(private mediator?: Mediator) {}
  setMediator(mediator: Mediator) {
    this.mediator = mediator
  }

  check() {
    this.mediator?.nofity(this, 'change')
    this.checked = true
  }

  isChecked() {
    return this.checked
  }
}
