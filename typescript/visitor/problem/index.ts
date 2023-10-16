import type { IShape } from 'visitor'

interface Shape extends IShape {
  exportJson: () => string
}

export class Circle implements Shape {
  constructor(public x: number, public y: number, public radius: number) {}
  exportJson() {
    return JSON.stringify({
      type: 'circle',
      x: this.x,
      y: this.y,
      radius: this.radius,
      area: this.getArea(),
      drawed: this.draw()
    })
  }

  getArea() {
    return Math.PI * this.radius ** 2
  }

  draw() {
    return `Draw circle at ${this.x}, ${this.y} with radius ${this.radius}`
  }
}

export class Square implements Shape {
  constructor(public x: number, public y: number, public side: number) {}
  exportJson() {
    return JSON.stringify({
      type: 'square',
      x: this.x,
      y: this.y,
      side: this.side,
      area: this.getArea(),
      drawed: this.draw()
    })
  }

  getArea() {
    return this.side ** 2
  }

  draw() {
    return `Draw square at ${this.x}, ${this.y} with side ${this.side}`
  }
}

export class Rectangle implements Shape {
  constructor(public x: number, public y: number, public width: number, public height: number) {}
  exportJson() {
    return JSON.stringify({
      type: 'rectangle',
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      area: this.getArea(),
      drawed: this.draw()
    })
  }

  getArea() {
    return this.width * this.height
  }

  draw() {
    return `Draw rectangle at ${this.x}, ${this.y} with width ${this.width} and height ${this.height}`
  }
}
