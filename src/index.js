const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/saludo', function (req, res) {
    res.send('Hola!')
  })

app.get('/despedida', function (req, res) {
res.send('Chau')
})

app.listen(3000, () => console.log("Listening on port 3000"))