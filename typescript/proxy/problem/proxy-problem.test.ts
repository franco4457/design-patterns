import USERS from '../users.json'
import { ApiUsers } from '.'

describe('Proxy problem', () => {
  it.concurrent('should be request 1 time to server', async () => {
    const api = new ApiUsers()
    const users = await api.getUsers()
    expect(users).toEqual(USERS)
  })
  it.concurrent('should be request 2 times to server', async () => {
    const api = new ApiUsers()
    const user = await api.getUser(1)
    expect(user).toEqual(USERS[0])
  })
  it.concurrent('should be request to server 20 times', async () => {
    const api = new ApiUsers()
    const users = await api.getUsers()
    for await (const { id } of users) {
      await api.getUser(id)
    }
  })
})
