const express = require('express')
const path=require('path')
const bodyParser = require('body-parser')
const productsRouter=require('./routes/views/products')
const productsApiRouter=require('./routes/api/products')

// app
const app = express()
app.use(bodyParser.json())

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.use('/products', productsRouter)
app.use('/api/products', productsApiRouter)

// redirect
app.get('/', function(req, res, next){
  res.redirect('/products')
})

// server
const server= app.listen(3000, ()=>{
  console.log(`Servidor conectado en http://localhost:${server.address().port}`);
})