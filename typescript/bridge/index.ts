export interface IDevice {
  isEnable: boolean
  volume: number
  channel: number
}
export interface IRemoteControl {
  togglePower: () => void
  volumeUp: () => void
  volumeDown: () => void
  channelUp: () => void
  channelDown: () => void
}
