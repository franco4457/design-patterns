import { type IRequest, ERRORS_RESPONSE } from 'chain-of-responsibility'
import USERS from '../users.json'

interface RequestHandler extends IRequest {
  user?: (typeof USERS)[0]
}

interface Handler {
  setNext: (handler: Handler) => Handler
  handle: (request: RequestHandler) => true | { status: number; message: string }
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null
  setNext(handler: Handler) {
    this.nextHandler = handler
    return handler
  }

  handle(request: RequestHandler) {
    if (this.nextHandler != null) return this.nextHandler.handle(request)
    return true
  }
}

export class AuthenticationHandler extends AbstractHandler {
  private readonly users = USERS
  handle(request: RequestHandler) {
    const { username, password } = request

    const user = this.users.find((user) => user.username === username && user.password === password)
    if (user == null) {
      return ERRORS_RESPONSE.BAD
    }
    return super.handle({ ...request, user })
  }
}
export class AuthorizationHandler extends AbstractHandler {
  constructor(private readonly role?: 'admin' | 'user') {
    super()
  }

  handle(request: RequestHandler) {
    const { user } = request
    if (this.role === 'admin' && user?.role !== 'admin') return ERRORS_RESPONSE.UNAUTHORIZED
    return super.handle(request)
  }
}

class CacheIpHandler extends AbstractHandler {
  private cachedIps: Record<string, number> = {}
  handle(request: RequestHandler) {
    const { ip } = request
    if (this.cachedIps[ip] == null) this.cachedIps[ip] = 0
    this.cachedIps[ip]++
    if (this.cachedIps[ip] >= 5) return ERRORS_RESPONSE.LOCKED
    return super.handle(request)
  }
}

export const cache = new CacheIpHandler()
