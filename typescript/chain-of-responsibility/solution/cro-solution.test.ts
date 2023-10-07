import { ERRORS_RESPONSE, type IRequest } from 'chain-of-responsibility'
import { AuthenticationHandler, AuthorizationHandler, cache } from '.'

const MOCK_REQUEST = {
  username: 'user1',
  password: 'password1',
  ip: '192.158.1.38'
}

const clientCode = (request: IRequest) => {
  const authen = new AuthenticationHandler()
  const author = new AuthorizationHandler('admin')
  cache.setNext(authen).setNext(author)
  return cache.handle(request)
}

describe('Chain of Responsibility Solution', () => {
  it.concurrent('should be retrun true if user is correct', () => {
    expect(clientCode(MOCK_REQUEST)).toBe(true)
  })
  it.concurrent('should be return bad request if user is incorrect', () => {
    const request = {
      ...MOCK_REQUEST,
      password: 'password2'
    }
    expect(clientCode(request)).toEqual(ERRORS_RESPONSE.BAD)
  })
  it.concurrent('should be return unauthorized if user is not admin', () => {
    const request = {
      ...MOCK_REQUEST,
      username: 'user3',
      password: 'password3'
    }
    expect(clientCode(request)).toEqual(ERRORS_RESPONSE.UNAUTHORIZED)
  })
  it.concurrent('should be return locked if user is incorrect more than 5 times', () => {
    const request = {
      ...MOCK_REQUEST,
      password: 'password2'
    }

    const authen = new AuthenticationHandler()
    const author = new AuthorizationHandler('admin')
    cache.setNext(authen).setNext(author)
    for (let i = 0; i < 6; i++) {
      cache.handle(request)
    }
    expect(cache.handle(request)).toEqual(ERRORS_RESPONSE.LOCKED)
  })
})
