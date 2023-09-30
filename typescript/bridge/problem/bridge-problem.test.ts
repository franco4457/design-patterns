import {
  AdvancedRadioRemoteControl,
  AdvancedTvRemoteControl,
  Radio,
  RadioRemoteControl,
  Tv,
  TvRemoteControl
} from '.'

describe('Bridge Problem', () => {
  it('Client should be controle TV remotly', () => {
    const tv = new Tv()
    const remoteControle = new TvRemoteControl(tv)
    remoteControle.togglePower()
    expect(tv.isEnable).toBe(true)
    remoteControle.volumeUp()
    expect(tv.volume).toBe(1)
    remoteControle.volumeDown()
    expect(tv.volume).toBe(0)
    remoteControle.channelUp()
    expect(tv.channel).toBe(1)
    remoteControle.channelDown()
    expect(tv.channel).toBe(0)
  })
  it('Client should be controle Radio remotly', () => {
    const radio = new Radio()
    const remoteControle = new RadioRemoteControl(radio)
    remoteControle.togglePower()
    expect(radio.isEnable).toBe(true)
    remoteControle.volumeUp()
    expect(radio.volume).toBe(1)
    remoteControle.volumeDown()
    expect(radio.volume).toBe(0)
    remoteControle.channelUp()
    expect(radio.channel).toBe(1)
    remoteControle.channelDown()
    expect(radio.channel).toBe(0)
  })
  it('Client should be controle TV remotly with advanced remote control', () => {
    const tv = new Tv()
    const remoteControle = new AdvancedTvRemoteControl(tv)
    remoteControle.togglePower()
    expect(tv.isEnable).toBe(true)
    remoteControle.volumeUp()
    expect(tv.volume).toBe(1)
    remoteControle.volumeUp()
    expect(tv.volume).toBe(2)
    remoteControle.mute()
    expect(tv.volume).toBe(0)
  })
  it('Client should be controle Radio remotly with advanced remote control', () => {
    const tv = new Tv()
    const remoteControle = new AdvancedRadioRemoteControl(tv)
    remoteControle.togglePower()
    expect(tv.isEnable).toBe(true)
    remoteControle.volumeUp()
    expect(tv.volume).toBe(1)
    remoteControle.volumeUp()
    expect(tv.volume).toBe(2)
    remoteControle.mute()
    expect(tv.volume).toBe(0)
  })
})
