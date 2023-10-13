import { type IApiUsers, sleep, type IUser } from 'proxy'
import USERS from '../users.json'
export class ApiUsers implements IApiUsers {
  private readonly users = USERS
  public async getUsers() {
    await sleep(50)
    return this.users
  }

  public async getUser(id: number) {
    await sleep(50)
    return this.users.find((user) => user.id === id)
  }
}

export class ApiUsersProxy implements IApiUsers {
  private usersApi: IUser[] = []
  constructor(private readonly api: IApiUsers) {}
  async getUsers() {
    if (this.usersApi.length === 0) {
      this.usersApi = await this.api.getUsers()
    }
    return this.usersApi
  }

  async getUser(id: number) {
    if (this.usersApi.length === 0) {
      this.usersApi = await this.api.getUsers()
    }
    return this.usersApi.find((user) => user.id === id)
  }
}
