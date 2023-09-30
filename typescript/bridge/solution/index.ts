import type { IRemoteControl, IDevice } from 'bridge'

export class Tv implements IDevice {
  isEnable: boolean = false
  volume: number = 0
  channel: number = 0
}
export class Radio implements IDevice {
  isEnable: boolean = false
  volume: number = 0
  channel: number = 0
}
export class RemoteControl implements IRemoteControl {
  constructor(protected readonly device: IDevice) {}
  togglePower() {
    this.device.isEnable = !this.device.isEnable
  }

  volumeUp() {
    this.device.volume++
  }

  volumeDown() {
    this.device.volume--
  }

  channelUp() {
    this.device.channel++
  }

  channelDown() {
    this.device.channel--
  }
}
export class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.volume = 0
  }
}
