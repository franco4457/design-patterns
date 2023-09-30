export class Tv {
  isEnable: boolean = false
  volume: number = 0
  channel: number = 0
}
export class Radio {
  isEnable: boolean = false
  volume: number = 0
  channel: number = 0
}

export class TvRemoteControl {
  constructor(protected readonly tv: Tv) {}
  togglePower() {
    this.tv.isEnable = !this.tv.isEnable
  }

  volumeUp() {
    this.tv.volume++
  }

  volumeDown() {
    this.tv.volume--
  }

  channelUp() {
    this.tv.channel++
  }

  channelDown() {
    this.tv.channel--
  }
}

export class RadioRemoteControl {
  constructor(protected readonly radio: Radio) {}
  togglePower() {
    this.radio.isEnable = !this.radio.isEnable
  }

  volumeUp() {
    this.radio.volume++
  }

  volumeDown() {
    this.radio.volume--
  }

  channelUp() {
    this.radio.channel++
  }

  channelDown() {
    this.radio.channel--
  }
}
export class AdvancedTvRemoteControl extends TvRemoteControl {
  mute() {
    this.tv.volume = 0
  }
}
export class AdvancedRadioRemoteControl extends RadioRemoteControl {
  mute() {
    this.radio.volume = 0
  }
}
