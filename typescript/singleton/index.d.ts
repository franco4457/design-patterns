export interface IDatabase {
  connect: (url: string) => void
  query: (sql: string) => void
}
