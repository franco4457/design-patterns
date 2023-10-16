import { JSON_SHAPES } from 'visitor'
import { Circle, JsonExporterVisitor, Rectangle, Square } from '.'

describe('Visitor Solution', () => {
  it('should be draw a shapes', () => {
    const circle = new Circle(1, 2, 3)
    expect(circle.draw()).toBe('Draw circle at 1, 2 with radius 3')
    const square = new Square(1, 2, 3)
    expect(square.draw()).toBe('Draw square at 1, 2 with side 3')
    const rectangle = new Rectangle(1, 2, 3, 2)
    expect(rectangle.draw()).toBe('Draw rectangle at 1, 2 with width 3 and height 2')
  })
  it('should be calculate area of shapes', () => {
    const circle = new Circle(1, 2, 3)
    expect(circle.getArea()).toBe(28.274333882308138)
    const square = new Square(1, 2, 3)
    expect(square.getArea()).toBe(9)
    const rectangle = new Rectangle(1, 2, 3, 4)
    expect(rectangle.getArea()).toBe(12)
  })
  it('should be export json of shapes', () => {
    const jsonExporter = new JsonExporterVisitor()
    const circle = new Circle(1, 2, 3)
    const square = new Square(1, 2, 3)
    const rectangle = new Rectangle(1, 2, 3, 4)
    circle.accept(jsonExporter)
    square.accept(jsonExporter)
    rectangle.accept(jsonExporter)
    expect(jsonExporter.getJson()).toEqual([
      JSON_SHAPES.circle,
      JSON_SHAPES.square,
      JSON_SHAPES.rectangle
    ])
  })
})
