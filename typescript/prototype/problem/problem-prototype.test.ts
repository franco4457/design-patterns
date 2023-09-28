import { Circle, Rectangle } from '.'

describe('Prototype problem', () => {
  it('should be create a Rectangle with the same properties', () => {
    const rectangle1 = new Rectangle(1, 2, 'red', 10, 20)
    const rectangle2 = new Rectangle(
      rectangle1.x,
      rectangle1.y,
      rectangle1.color,
      rectangle1.width,
      rectangle1.heigth
    )
    expect(rectangle1).toEqual(rectangle2)
  })
  it('should be create a Circle with the same properties', () => {
    const circle1 = new Circle(1, 2, 'red', 10)
    const circle2 = new Circle(circle1.x, circle1.y, circle1.color, circle1.radius)
    expect(circle1).toEqual(circle2)
  })
  it('should be create a Rectangle with the same properties and modify the copy', () => {
    const rectangle1 = new Rectangle(4, 3, 'red', 20, 10)
    const rectangle2 = new Rectangle(
      rectangle1.x,
      rectangle1.y,
      'blue',
      rectangle1.width,
      rectangle1.heigth
    )
    expect(rectangle1.heigth).toBe(rectangle2.heigth)
    expect(rectangle1.x).toBe(rectangle2.x)
    expect(rectangle1.y).toBe(rectangle2.y)
    expect(rectangle1.width).toBe(rectangle2.width)
    expect(rectangle1.color).not.toBe(rectangle2.color)
    expect(rectangle2.color).toBe('blue')
  })
  it('should be create a Circle with the same properties and modify the copy', () => {
    const circle1 = new Circle(4, 3, 'red', 20)
    const circle2 = new Circle(circle1.x, circle1.y, 'blue', circle1.radius)
    expect(circle1.x).toBe(circle2.x)
    expect(circle1.y).toBe(circle2.y)
    expect(circle1.radius).toBe(circle2.radius)
    expect(circle1.color).not.toBe(circle2.color)
    expect(circle2.color).toBe('blue')
  })
})
