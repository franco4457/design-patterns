import USERS from './users.json'

export interface Button {
  isDisable: () => boolean
  click: () => void
}
export interface Input {
  isWrong: () => boolean
  setValue: (value: string) => void
  getValue: () => string
}
export interface Checkbox {
  check: () => void
  isChecked: () => boolean
}

export const findUser = (user: (typeof USERS)[0]) => {
  return USERS.find((u) => u.password === user.password && u.username === user.username)
}
