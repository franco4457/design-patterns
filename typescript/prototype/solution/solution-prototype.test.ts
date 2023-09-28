import { Circle, Rectangle } from '.'

describe('Prototype solution', () => {
  it('should be create a Rectangle with the same properties', () => {
    const rectangle1 = new Rectangle({ width: 1, heigth: 2, x: 3, y: 4, color: 'red' })

    const rectangle2 = rectangle1.clone()
    expect(rectangle1).toEqual(rectangle2)
  })
  it('should be create a Circle with the same properties', () => {
    const circle1 = new Circle({ radius: 1, x: 2, y: 3, color: 'red' })
    const circle2 = circle1.clone()
    expect(circle1).toEqual(circle2)
  })
  it('should be create a Rectangle with the same properties and modify the copy', () => {
    const rectangle1 = new Rectangle({ width: 4, heigth: 7, x: 2, y: 6, color: 'red' })
    const rectangle2 = rectangle1.clone()
    rectangle2.color = 'blue'
    expect(rectangle1.heigth).toBe(rectangle2.heigth)
    expect(rectangle1.x).toBe(rectangle2.x)
    expect(rectangle1.y).toBe(rectangle2.y)
    expect(rectangle1.width).toBe(rectangle2.width)
    expect(rectangle1.color).not.toBe(rectangle2.color)
    expect(rectangle2.color).toBe('blue')
  })
  it('should be create a Circle with the same properties and modify the copy', () => {
    const circle1 = new Circle({ radius: 10, x: 4, y: 7, color: 'red' })
    const circle2 = circle1.clone()
    circle2.color = 'blue'
    expect(circle1.x).toBe(circle2.x)
    expect(circle1.y).toBe(circle2.y)
    expect(circle1.radius).toBe(circle2.radius)
    expect(circle1.color).not.toBe(circle2.color)
    expect(circle2.color).toBe('blue')
  })
})
