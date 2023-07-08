const express = require('express')
const app = express()

// servir contenido estaticoo
app.use(express.static('public'));

app.get('/holamundo',  (req, res) => {

})

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(8080)