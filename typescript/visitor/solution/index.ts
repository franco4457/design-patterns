import { type IShape } from 'visitor'

interface Shape extends IShape {
  accept: (visitor: ShapeVisitor) => void
}

interface ShapeVisitor {
  visitCircle: (circle: Circle) => void
  visitSquare: (square: Square) => void
  visitRectangle: (rectangle: Rectangle) => void
}

export class Circle implements Shape {
  constructor(public x: number, public y: number, public radius: number) {}
  accept(visitor: ShapeVisitor) {
    visitor.visitCircle(this)
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
  accept(visitor: ShapeVisitor) {
    visitor.visitSquare(this)
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
  accept(visitor: ShapeVisitor) {
    visitor.visitRectangle(this)
  }

  getArea() {
    return this.width * this.height
  }

  draw() {
    return `Draw rectangle at ${this.x}, ${this.y} with width ${this.width} and height ${this.height}`
  }
}

export class JsonExporterVisitor implements ShapeVisitor {
  private readonly json: string[] = []
  getJson() {
    return this.json
  }

  visitCircle(circle: Circle) {
    this.json.push(
      JSON.stringify({
        type: 'circle',
        x: circle.x,
        y: circle.y,
        radius: circle.radius,
        area: circle.getArea(),
        drawed: circle.draw()
      })
    )
  }

  visitRectangle(rectangle: Rectangle) {
    this.json.push(
      JSON.stringify({
        type: 'rectangle',
        x: rectangle.x,
        y: rectangle.y,
        width: rectangle.width,
        height: rectangle.height,
        area: rectangle.getArea(),
        drawed: rectangle.draw()
      })
    )
  }

  visitSquare(square: Square) {
    this.json.push(
      JSON.stringify({
        type: 'square',
        x: square.x,
        y: square.y,
        side: square.side,
        area: square.getArea(),
        drawed: square.draw()
      })
    )
  }
}
