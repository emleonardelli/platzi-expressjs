const express=require('express')
const app=express()
const expressJsx=require('./express-jsx')

app.engine('jsx', expressJsx)

app.set('views', './views')
app.set('view engine', 'jsx')

app.get('/', (req, res, next) => {
  res.render("index", {
    hello: 'Hello',
    world: 'world!'
  })
})

const server=app.listen(3000, ()=>{
  console.log(`Servidor escuchando en http://localhost:${server.address().port}`);
  
})