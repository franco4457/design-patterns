import USERS from '../users.json'
import { ApiUsers, ApiUsersProxy } from '.'

describe('Proxy problem', () => {
  it.concurrent('should be request 1 time to server', async () => {
    const api = new ApiUsers()
    const proxyApi = new ApiUsersProxy(api)
    const users = await proxyApi.getUsers()
    expect(users).toEqual(USERS)
  })
  it.concurrent('should be request 2 times to server', async () => {
    const api = new ApiUsers()
    const proxyApi = new ApiUsersProxy(api)
    const user = await proxyApi.getUser(1)
    expect(user).toEqual(USERS[0])
  })
  it.concurrent('should be request to server 20 times', async () => {
    const api = new ApiUsers()
    const proxyApi = new ApiUsersProxy(api)
    const users = await proxyApi.getUsers()
    for await (const { id } of users) {
      await proxyApi.getUser(id)
    }
  })
  it.concurrent('should be request 2000000 times to server', async () => {
    const api = new ApiUsers()
    const proxyApi = new ApiUsersProxy(api)
    const per1 = performance.now()
    for (let i = 0; i < 100000; i++) {
      const users = await proxyApi.getUsers()
      for await (const { id } of users) {
        await proxyApi.getUser(id)
      }
    }
    const per2 = performance.now()
    expect(per2 - per1).toBeLessThan(1000)
  })
})
