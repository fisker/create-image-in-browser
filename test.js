import {Buffer} from 'node:buffer'
import test from 'ava'
import createImageInBrowser from './index.js'

test('createImageInBrowser', async (t) => {
  const drawScript = new URL('./fixtures/draw-text.js', import.meta.url)
  const data = {text: 'text to paint'}

  const buffer = await createImageInBrowser(drawScript, data)

  t.true(Buffer.isBuffer(buffer))

  const webp = await createImageInBrowser(drawScript, data, {
    type: 'image/webp',
  })
  t.true(webp.length < buffer.length)

  const smallWebp = await createImageInBrowser(drawScript, data, {
    type: 'image/webp',
    quality: 0.1,
  })
  t.true(smallWebp.length < webp.length)
})
