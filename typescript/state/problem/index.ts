import { type ISong, type IAudioPlayer } from 'state'

export class AudioPlayer implements IAudioPlayer {
  private state: 'locked' | 'playing' | 'ready' = 'ready'
  private isPaused: boolean = true
  constructor(public playlist: ISong[]) {
    setInterval(() => {
      if (this.isPlaying()) this.currentTime++
    }, 1)
  }

  currentTime: number = 0
  currentSong: ISong | null = null
  clickLock() {
    if (this.state === 'locked') this.state = 'ready'
    else this.state = 'locked'
  }

  clickPlay() {
    if (this.state === 'locked') return
    if (this.state === 'playing') {
      this.stopPlayback()
      this.state = 'ready'
    } else {
      this.startPlayabck()
      this.state = 'playing'
    }
  }

  clickNext(event?: string) {
    if (this.state === 'locked') return
    if (event === 'double' && this.state === 'playing') {
      this.fastforward(5)
      return
    }
    this.nextSong()
  }

  clickPrevious(event?: string) {
    if (this.state === 'locked') return
    if (event === 'double' && this.state === 'playing') {
      this.rewind(5)
      return
    }
    this.previousSong()
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
