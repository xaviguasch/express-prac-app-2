const path = require('path')

const express = require('express')

const app = express()

const mainRoutes = require('./routes/index')

app.get('/favicon.ico', (req, res) => res.status(204)) // boilerplate code, conflict with favicon

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000, console.log('listening on port 4000'))
