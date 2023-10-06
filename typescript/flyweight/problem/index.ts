import { getTexture } from 'flyweight'

export class Tree {
  private readonly texture: Buffer
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly name: string,
    private readonly color: string,
    texture: 'image1' | 'image2'
  ) {
    this.texture = Buffer.from(`${getTexture(texture)}-${name}-${color}-🌲`)
  }

  draw() {
    const texture = this.texture.toString()
    if (
      typeof texture !== 'string' ||
      !texture.includes(this.name) ||
      !texture.includes(this.color)
    ) {
      throw new Error('Invalid texture.')
    }
    return `Draw ${texture} at (${this.x}, ${this.y}).`
  }
}
