export interface IShape {
  x: number
  y: number
  getArea: () => number
  draw: () => string
}

export const JSON_SHAPES = {
  circle:
    '{"type":"circle","x":1,"y":2,"radius":3,"area":28.274333882308138,"drawed":"Draw circle at 1, 2 with radius 3"}',
  square:
    '{"type":"square","x":1,"y":2,"side":3,"area":9,"drawed":"Draw square at 1, 2 with side 3"}',
  rectangle:
    '{"type":"rectangle","x":1,"y":2,"width":3,"height":4,"area":12,"drawed":"Draw rectangle at 1, 2 with width 3 and height 4"}'
}
