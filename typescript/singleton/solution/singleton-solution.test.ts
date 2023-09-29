import { Database } from './index'

describe('Singleton Problem', () => {
  afterEach(() => {
    const db = Database.getInstance()
    db.disconnect()
  })
  it('should be intert in to Database', () => {
    const db = Database.getInstance()
    db.connect('ssh://localhost:8080')
    db.query('INSERT foo')
    expect(db.query('SELECT')).toEqual(['foo'])
    /* -----a lot of code here------- */
    const db2 = Database.getInstance()
    db2.connect('ssh://localhost:8080')
    db2.query('INSERT bar')
    expect(db2).toEqual(db)
    expect(db2.query('SELECT')).toEqual(['foo', 'bar'])
  })
  it('should be intert in to Database', () => {
    const db = Database.getInstance()
    db.connect('ssh://localhost:8080')
    db.query('INSERT foo')
    db.query('INSERT bar')
    db.query('INSERT fizz')
    db.query('INSERT buzz')
    expect(db.query('SELECT')).toEqual(['foo', 'bar', 'fizz', 'buzz'])
    /* -----a lot of code here------- */
    const db2 = Database.getInstance()
    db2.connect('ssh://localhost:8080')
    db2.query('INSERT foo')
    db2.query('INSERT bar')
    db2.query('INSERT fizz')
    db2.query('INSERT buzz')
    expect(db2).toEqual(db)
    expect(db2.query('SELECT')).toEqual([
      'foo',
      'bar',
      'fizz',
      'buzz',
      'foo',
      'bar',
      'fizz',
      'buzz'
    ])
  })
})
