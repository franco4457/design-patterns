import { getTexture } from 'flyweight'

class TreeType {
  name: string
  color: string
  texture: Buffer

  constructor(name: string, color: string, texture: 'image1' | 'image2') {
    this.name = name
    this.color = color
    this.texture = Buffer.from(`${getTexture(texture)}-${name}-${color}-🌲`)
  }

  draw(x: number, y: number) {
    const texture = this.texture.toString()
    return `Draw ${texture} at (${x}, ${y}).`
  }
}

export class TreeFactory {
  private treeTypes: Record<string, TreeType> = {}
  constructor(
    // eslint-disable-next-line @typescript-eslint/member-delimiter-style
    initialTypes?: Array<{ name: string; color: string; texture: 'image1' | 'image2' }>
  ) {
    if (initialTypes != null) {
      initialTypes.forEach((treeType) => {
        const key = `${treeType.texture}-${treeType.name}-${treeType.color}`
        this.treeTypes[key] = new TreeType(treeType.name, treeType.color, treeType.texture)
      })
    }
  }

  getTreeType(name: string, color: string, texture: 'image1' | 'image2') {
    const key = `${texture}-${name}-${color}`
    if (this.treeTypes[key] == null) {
      this.treeTypes[key] = new TreeType(name, color, texture)
    }
    return this.treeTypes[key]
  }
}

export class Tree {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly treeType: TreeType
  ) {}

  draw() {
    return this.treeType.draw(this.x, this.y)
  }
}
export class Forest {
  private readonly trees: Tree[] = []
  constructor(private readonly treeFactory: TreeFactory) {}
  plantTree(x: number, y: number, name: string, color: string, texture: 'image1' | 'image2') {
    const treeType = this.treeFactory.getTreeType(name, color, texture)
    const tree = new Tree(x, y, treeType)
    this.trees.push(tree)
  }

  draw() {
    return this.trees.map((tree) => tree.draw())
  }
}
