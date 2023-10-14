type Method = 'linear' | 'binary' | 'reverse'
export class NumberFinder {
  constructor(private method: Method = 'linear') {}
  setMethod(method: Method): void {
    this.method = method
  }

  exec(numbers: number[], number: number): number | false {
    if (this.method === 'linear') {
      const finded = numbers.find((n) => n === number)
      return finded ?? false
    }
    if (this.method === 'reverse') {
      for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] === number) {
          return numbers[i]
        }
      }
      return false
    }
    if (this.method === 'binary') {
      let start = 0
      let end = numbers.length - 1
      while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (numbers[middle] === number) {
          return numbers[middle]
        }
        if (numbers[middle] > number) {
          end = middle - 1
        } else {
          start = middle + 1
        }
      }
    }
    return false
  }
}
