interface FinderStrategy {
  find: (numbers: number[], number: number) => number | false
}

export class NumberFinder {
  constructor(private strategy?: FinderStrategy) {}

  setStrategy(strategy: FinderStrategy): void {
    this.strategy = strategy
  }

  exec(numbers: number[], number: number): number | false {
    if (this.strategy != null) {
      return this.strategy.find(numbers, number)
    }
    return false
  }
}
export class LinearStrategy implements FinderStrategy {
  find(numbers: number[], number: number): number | false {
    const finded = numbers.find((n) => n === number)
    return finded ?? false
  }
}
export class ReverseStrategy implements FinderStrategy {
  find(numbers: number[], number: number): number | false {
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] === number) {
        return numbers[i]
      }
    }
    return false
  }
}

export class BinaryStrategy implements FinderStrategy {
  find(numbers: number[], number: number): number | false {
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
    return false
  }
}
