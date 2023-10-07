import { ERRORS_RESPONSE } from 'chain-of-responsibility'
import { AuthService } from '.'

const MOCK_REQUEST = {
  username: 'user1',
  password: 'password1',
  ip: '192.158.1.38'
}
describe('Chain of Responsibility  Problem', () => {
  it.concurrent('should be retrun true if user is correct', () => {
    const request = MOCK_REQUEST
    const authService = new AuthService(request)
    const result = authService.execute('admin')
    expect(result).toBe(true)
  })
  it.concurrent('should be return bad request if user is incorrect', () => {
    const request = {
      ...MOCK_REQUEST,
      password: 'password2'
    }
    const authService = new AuthService(request)
    const result = authService.execute()
    expect(result).toEqual(ERRORS_RESPONSE.BAD)
  })
  it.concurrent('should be return unauthorized if user is not admin', () => {
    const request = {
      ...MOCK_REQUEST,
      username: 'user3',
      password: 'password3'
    }
    const authService = new AuthService(request)
    const result = authService.execute('admin')
    expect(result).toEqual(ERRORS_RESPONSE.UNAUTHORIZED)
  })
  it.concurrent('should be return locked if user is incorrect more than 5 times', () => {
    const request = {
      ...MOCK_REQUEST,
      password: 'password2'
    }
    const authService = new AuthService(request)
    for (let i = 0; i < 5; i++) {
      authService.execute()
    }
    const result = authService.execute()
    expect(result).toEqual(ERRORS_RESPONSE.LOCKED)
  })
})
