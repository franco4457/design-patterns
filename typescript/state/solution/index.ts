import { type ISong, type IAudioPlayer } from 'state'

abstract class State {
  constructor(protected readonly player: AudioPlayer) {}
  abstract clickLock(): void
  abstract clickPlay(): void
  abstract clickNext(event?: string): void
  abstract clickPrevious(event?: string): void
}

class ReadyState extends State {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player))
  }

  clickPlay(): void {
    this.player.startPlayabck()
    this.player.changeState(new PlayingState(this.player))
  }

  clickNext(): void {
    this.player.nextSong()
  }

  clickPrevious(): void {
    this.player.previousSong()
  }
}

class LockedState extends State {
  clickLock(): void {
    if (this.player.isPlaying()) this.player.changeState(new PlayingState(this.player))
    else this.player.changeState(new ReadyState(this.player))
  }

  clickPlay() {}
  clickNext() {}
  clickPrevious() {}
}

class PlayingState extends State {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player))
  }

  clickPlay(): void {
    this.player.stopPlayback()
    this.player.changeState(new ReadyState(this.player))
  }

  clickNext(event?: string | undefined): void {
    if (event === 'double') this.player.fastforward(5)
    else this.player.nextSong()
  }

  clickPrevious(event?: string | undefined): void {
    if (event === 'double') this.player.rewind(5)
    else this.player.previousSong()
  }
}

export class AudioPlayer implements IAudioPlayer {
  private state: State
  private isPaused: boolean = true

  constructor(public playlist: ISong[]) {
    this.state = new ReadyState(this)
    setInterval(() => {
      if (this.isPlaying()) this.currentTime++
    }, 1)
  }

  changeState(state: State) {
    this.state = state
  }

  currentTime: number = 0
  currentSong: ISong | null = null
  clickLock() {
    this.state.clickLock()
  }

  clickPlay() {
    this.state.clickPlay()
  }

  clickNext(event?: string) {
    this.state.clickNext(event)
  }

  clickPrevious(event?: string) {
    this.state.clickPrevious(event)
  }

  startPlayabck() {
    if (this.currentSong === null) this.currentSong = this.playlist[0]
    this.isPaused = false
  }

  stopPlayback() {
    this.isPaused = true
  }

  isPlaying() {
    return !this.isPaused
  }

  nextSong() {
    const isong = this.playlist.findIndex((song) => song === this.currentSong)
    this.currentSong = this.playlist[isong + 1] ?? this.playlist[0]
  }

  previousSong() {
    const isong = this.playlist.findIndex((song) => song === this.currentSong)
    this.currentSong = this.playlist[isong - 1] ?? this.playlist[this.playlist.length - 1]
  }

  rewind(time: number) {
    this.currentTime -= time
  }

  fastforward(time: number) {
    this.currentTime += time
  }
}
