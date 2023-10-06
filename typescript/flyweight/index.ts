import fs from 'fs'
import path from 'path'
export function getTexture(image: 'image1' | 'image2') {
  const dir = path.join(__dirname, 'flyweight', image + '.png')
  const img = fs.readFileSync(dir, { encoding: 'base64' })
  return img
}
