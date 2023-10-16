import fs from 'node:fs'
import path from 'node:path'
export function getTexture(image: 'image1' | 'image2') {
  const dir = path.join(__dirname, 'flyweight', image + '.png')
  let img = ''
  fs.readFile(dir, { encoding: 'base64' }, (err, data) => {
    if (err != null) {
      throw err
    }
    img = data
  })
  return img
}
