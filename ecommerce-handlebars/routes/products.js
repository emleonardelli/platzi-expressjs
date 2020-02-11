const express=require('express')
const router=express.Router()

const products = [
  {
    name: 'Red shoes',
    prices: 75
  },
  {
    name: 'Blue shoes',
    prices: 300
  }
]

router.get('/', (req, res, next) => {
  res.render('products', {
    products
  })
})

module.exports = router