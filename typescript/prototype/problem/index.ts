import type { IShape } from 'prototype'

export class Rectangle implements IShape {
  constructor(
    public x: number,
    public y: number,
    public color: string,
    public width: number,
    public heigth: number
  ) {}
}

export class Circle implements IShape {
  constructor(public x: number, public y: number, public color: string, public radius: number) {}
}
