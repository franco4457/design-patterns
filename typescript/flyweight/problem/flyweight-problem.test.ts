import { Tree } from '.'

describe('Flyweight problem', () => {
  it('draw tree', () => {
    const tree = new Tree(1, 2, 'pine', 'green', 'image1')
    expect(tree.draw()).toContain('pine-green-🌲 at (1, 2).')
  })
  it('should be draw 1000 trees', () => {
    console.time('draw 1000 trees')
    const trees = Array.from(
      { length: 1000 },
      (_, i) => new Tree(i, i * i, 'pine', 'green', i % 2 === 0 ? 'image1' : 'image2')
    )
    const drawTrees = trees.map((tree) => tree.draw())
    drawTrees.forEach((drawTree, i) => {
      expect(drawTree).toContain(`pine-green-🌲 at (${i}, ${i * i}).`)
    })
    console.timeEnd('draw 1000 trees')
  })
  it.concurrent('should be draw 100000 trees', () => {
    console.time('draw 100000 trees')
    const perf = performance.now()
    const forest = Array.from(
      { length: 100000 },
      (_, i) => new Tree(i, i * i, 'pine', 'green', i % 2 === 0 ? 'image1' : 'image2')
    )
    const drawTrees = forest.map((tree) => tree.draw())
    drawTrees.forEach((drawTree, i) => {
      expect(drawTree).toContain(`pine-green-🌲 at (${i}, ${i * i}).`)
    })
    const perf2 = performance.now()
    expect(drawTrees.length).toBe(100000)

    console.log('draw 100000 trees', perf2 - perf)
    console.timeEnd('draw 100000 trees')
  })
})
