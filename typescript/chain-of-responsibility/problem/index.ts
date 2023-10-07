import { ERRORS_RESPONSE, type IRequest } from 'chain-of-responsibility'
import USERS from '../users.json'

export class AuthService {
  private readonly users = USERS
  private cachedIps: Record<string, number> = {}
  constructor(private readonly request: IRequest) {}
  execute(role?: 'admin' | 'user') {
    const { username, password, ip } = this.request
    if (this.cachedIps[ip] == null) this.cachedIps[ip] = 0

    if (this.cachedIps[ip] >= 5) return ERRORS_RESPONSE.LOCKED

    const user = this.users.find((user) => user.username === username && user.password === password)
    if (user == null) {
      this.cachedIps[ip]++
      return ERRORS_RESPONSE.BAD
    }
    if (role === 'admin' && user.role !== 'admin') return ERRORS_RESPONSE.UNAUTHORIZED

    return true
  }
}
