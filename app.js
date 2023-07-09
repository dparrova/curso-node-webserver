const hbs = require('hbs');
require('dotenv').config()

const express = require('express')
const app = express();
const port= process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// servir contenido estaticoo
app.use(express.static('public'));
const params ={
  nombre: 'Diego Chaparro',
  titulo: 'Curso de node'
}

app.get('/',  (req, res) => {
  res.render('home',params);
})
app.get('/generic',  (req, res) => {
 res.render('generic',params)
})
app.get('/elements',  (req, res) => {
 res.render('elements',params)
})


app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port,()=>{
  console.log(`aplicación trabajando en el puestro: ${port}`)
})