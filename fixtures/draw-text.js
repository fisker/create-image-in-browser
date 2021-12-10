const width = 200
const height = 200

canvas.width = width
canvas.height = height
context.textBaseline = 'middle'
context.textAlign = 'center'
context.font = '40px system-ui'
context.fillStyle = 'red'
context.fillText(data.text, width / 2, height / 2)
