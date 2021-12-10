import {Buffer} from 'node:buffer'
import fs from 'node:fs/promises'
import {evaluate} from 'evaluate-in-browser'

async function createImageInBrowser(script, data, options) {
  const {type, quality} = {...options}

  const drawFunction = `
    (async () => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const data = ${JSON.stringify(data)}

      ${await fs.readFile(script, 'utf8')}

      const blob = await new Promise((resolve) => {
        canvas.toBlob(
          resolve,
          ${JSON.stringify(type)},
          ${JSON.stringify(quality)},
        )
      })

      const buffer = await blob.arrayBuffer()

      return [...new Uint8Array(buffer)]
    })()
  `

  const bits = await evaluate(drawFunction)

  return Buffer.from(bits)
}

export default createImageInBrowser
