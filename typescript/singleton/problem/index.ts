import { type IDatabase } from './../index'

export class Database implements IDatabase {
  private status: boolean = false
  private readonly url = 'ssh://localhost:8080'
  private readonly store: string[] = []

  query(sql: string) {
    if (this.status) {
      if (sql.startsWith('SELECT')) {
        return this.store
      }
      if (sql.startsWith('INSERT')) {
        this.store.push(sql.split(' ')[1])
        return
      }
      return 'Querying ' + this.url + ' with ' + sql
    } else {
      throw new Error('Cannot query ' + this.url + ' with ' + sql)
    }
  }

  connect(url: string): void {
    if (this.url === url) {
      this.status = true
    } else throw new Error('Cannot connect to ' + this.url)
  }
}
