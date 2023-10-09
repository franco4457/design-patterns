export class WordCollection {
  private readonly items: string[] = []

  constructor(items: string[] = []) {
    this.items = items
  }

  addItem(item: string) {
    this.items.push(item)
  }

  getItems() {
    return this.items
  }

  getCount() {
    return this.items.length
  }
}
