export async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
export interface IUser {
  name: string
  age: number
  email: string
  id: number
}

export interface IApiUsers {
  getUsers: () => Promise<IUser[]>
  getUser: (id: number) => Promise<IUser | undefined>
}
