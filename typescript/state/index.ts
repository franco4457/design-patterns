export const sleep = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms))

export interface ISong {
  name: string
}

export interface IAudioPlayer {
  playlist: ISong[]
  currentSong: ISong | null
  currentTime: number
  clickLock: () => void
  clickPlay: () => void
  clickNext: (event?: string) => void
  clickPrevious: (event?: string) => void
  startPlayabck: () => void
  stopPlayback: () => void
  isPlaying: () => boolean
  nextSong: () => void
  previousSong: () => void
  rewind: (time: number) => void
  fastforward: (time: number) => void
}

export const SONGS: ISong[] = [
  { name: 'Bohemian Rhapsody' },
  { name: 'Stairway to Heaven' },
  { name: 'Hotel California' },
  { name: "Sweet Child O' Mine" },
  { name: 'Imagine' }
]
