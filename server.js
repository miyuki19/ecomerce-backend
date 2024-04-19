const app = require('./src/app')

const PORT = 3005

const server = app.listen(PORT, () => {
  console.log(`WSV eComerce start with ${PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log(`EXPRESS SERVER STOP`)
  })
})
