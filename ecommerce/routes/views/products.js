const express=require('express')
const router=express.Router()
const ProductService = require('../../services/products')
const productService = new ProductService()

router.get('/', async function(req, res, next) {
  try {
    const products = await productService.getProducts({ tags: req.query })
    res.render('products', { products })
  } catch (err) {
    next(err)
  }
})

module.exports = router