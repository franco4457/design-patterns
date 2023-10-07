export interface IRequest {
  username: string
  password: string
  ip: string
}
export const ERRORS_RESPONSE = {
  BAD: { status: 400, message: 'Bad Request' },
  UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
  LOCKED: { status: 423, message: 'Locked' }
}
