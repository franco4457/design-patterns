import { Forest, TreeFactory } from '.'
const treeFactory = new TreeFactory([{ name: 'pine', color: 'green', texture: 'image1' }])

describe('Flyweight solution', () => {
  it.concurrent('draw tree', () => {
    const forest = new Forest(treeFactory)
    forest.plantTree(1, 2, 'pine', 'green', 'image1')
    const tree = forest.draw()[0]
    expect(tree).toContain('pine-green-🌲 at (1, 2).')
  })
  it.concurrent('should be draw 1000 trees', () => {
    console.time('draw 1000 trees')
    const forest = new Forest(treeFactory)
    for (let i = 0; i < 1000; i++) {
      forest.plantTree(i, i * i, 'pine', 'green', 'image1')
    }
    const drawTrees = forest.draw()
    drawTrees.forEach((drawTree, i) => {
      expect(drawTree).toContain(`pine-green-🌲 at (${i}, ${i * i}).`)
    })
    console.timeEnd('draw 1000 trees')
  })
  it.concurrent('should be draw 100000 trees', () => {
    console.time('draw 100000 trees')
    const perf = performance.now()
    const forest = new Forest(treeFactory)
    for (let i = 0; i < 100000; i++) {
      forest.plantTree(i, i * i, 'pine', 'green', 'image1')
    }
    const drawTrees = forest.draw()
    drawTrees.forEach((drawTree, i) => {
      expect(drawTree).toContain(`pine-green-🌲 at (${i}, ${i * i}).`)
    })
    const perf2 = performance.now()
    expect(drawTrees.length).toBe(100000)

    console.log('draw 100000 trees', perf2 - perf)
    console.timeEnd('draw 100000 trees')
  })
})
