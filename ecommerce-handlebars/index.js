const express = require('express')
const path=require('path')
const app = express()

const productsRouter=require('./routes/products')

const engines = require('consolidate');

app.engine('hbs', engines.handlebars)

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.use('/products', productsRouter)

const server= app.listen(3000, ()=>{
  console.log(`Servidor conectado en http://localhost:${server.address().port}`);
})