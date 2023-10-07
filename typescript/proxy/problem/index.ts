import { type IApiUsers, sleep } from 'proxy'
import USERS from '../users.json'
export class ApiUsers implements IApiUsers {
  private readonly users = USERS
  public async getUsers() {
    await sleep(200)
    return this.users
  }

  public async getUser(id: number) {
    await sleep(200)
    return this.users.find((user) => user.id === id)
  }
}
