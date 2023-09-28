import type { IShape } from 'prototype'

abstract class ShapePrototype implements IShape {
  x: number
  y: number
  color: string
  constructor(soruce: IShape) {
    this.x = soruce.x
    this.y = soruce.y
    this.color = soruce.color
  }

  abstract clone(): ShapePrototype
}

export class Rectangle extends ShapePrototype {
  width: number
  heigth: number
  constructor(source: Omit<Rectangle, 'clone'>) {
    super(source)
    this.width = source.width
    this.heigth = source.heigth
  }

  clone(): Rectangle {
    return new Rectangle(this)
  }
}
export class Circle extends ShapePrototype {
  radius: number
  constructor(source: Omit<Circle, 'clone'>) {
    super(source)
    this.radius = source.radius
  }

  clone(): Circle {
    return new Circle(this)
  }
}
