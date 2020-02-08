const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send({hello: "world"})
})

const server= app.listen(3000, ()=>{
  console.log(`Servidor conectado en http://localhost:${server.address().port}`);
})