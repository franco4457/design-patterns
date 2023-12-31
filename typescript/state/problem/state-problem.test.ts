import { SONGS, sleep } from 'state'
import { AudioPlayer } from '.'
describe('State problem', () => {
  it('should be manipulate the current song when is playing', async () => {
    const player = new AudioPlayer(SONGS)
    player.clickPlay()
    expect(player.isPlaying()).toBeTruthy()
    expect(player.currentSong).toEqual(SONGS[0])
    player.clickNext()
    expect(player.currentSong).toEqual(SONGS[1])
    player.clickPrevious()
    expect(player.currentSong).toEqual(SONGS[0])
    await sleep(5)
    expect(player.currentTime).toBeGreaterThan(0)
    let cTime = player.currentTime
    player.clickNext('double')
    expect(player.currentTime).toBe(cTime + 5)
    cTime = player.currentTime
    player.clickPrevious('double')
    expect(player.currentTime).toBe(cTime - 5)
  })
  it('should be manupulate the song when is ready', async () => {
    const player = new AudioPlayer(SONGS)
    player.clickNext()
    expect(player.currentSong).toEqual(SONGS[0])
    player.clickPrevious()
    expect(player.currentSong).toEqual(SONGS.at(-1))
    expect(player.isPlaying()).toBeFalsy()
    expect(player.currentTime).toBe(0)
    await sleep(5)
    expect(player.currentTime).toBe(0)
  })
  it('should do nothing when is locked', async () => {
    const player = new AudioPlayer(SONGS)
    player.clickLock()
    player.clickNext()
    expect(player.currentSong).toEqual(null)
    player.clickPrevious()
    expect(player.currentSong).toEqual(null)
    player.clickPlay()
    expect(player.isPlaying()).toBeFalsy()
    expect(player.currentTime).toBe(0)
    await sleep(5)
    expect(player.currentTime).toBe(0)
    player.clickLock()
    player.clickPlay()
    player.clickLock()
    player.clickNext()
    player.clickNext()
    expect(player.currentSong).toEqual(SONGS[0])
    player.clickPrevious()
    expect(player.currentSong).toEqual(SONGS[0])
    expect(player.isPlaying()).toBeTruthy()
    let cTime = player.currentTime
    await sleep(5)
    expect(player.currentTime).toBeGreaterThan(cTime)
    cTime = player.currentTime
    player.clickNext('double')
    expect(player.currentTime).toBe(cTime)
    cTime = player.currentTime
    player.clickPrevious('double')
    expect(player.currentTime).toBe(cTime)
  })
})
