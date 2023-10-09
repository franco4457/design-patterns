interface BaseIterator<T> {
  current: () => T
  next: () => T
  key: () => number
  hasMore: () => boolean
  rewind: () => void
}
class AlphabeticalOrderIterator implements BaseIterator<string> {
  private readonly collection: WordsCollection
  private position: number = 0
  private readonly reverse: boolean = false

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection
    this.reverse = reverse

    if (reverse) {
      this.position = collection.getCount() - 1
    }
  }

  current(): string {
    return this.collection.getItems()[this.position]
  }

  next(): string {
    const item = this.collection.getItems()[this.position]
    this.position += this.reverse ? -1 : 1
    return item
  }

  key(): number {
    return this.position
  }

  hasMore(): boolean {
    if (this.reverse) {
      return this.position >= 0
    }

    return this.position < this.collection.getCount()
  }

  rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0
  }
}

export class WordsCollection {
  private readonly items: string[] = []
  constructor(items: string[] = []) {
    this.items = items
  }

  getItems(): string[] {
    return this.items
  }

  getCount(): number {
    return this.items.length
  }

  addItem(item: string) {
    this.items.push(item)
  }

  getIterator(): BaseIterator<string> {
    return new AlphabeticalOrderIterator(this)
  }

  getReverseIterator(): BaseIterator<string> {
    return new AlphabeticalOrderIterator(this, true)
  }
}
