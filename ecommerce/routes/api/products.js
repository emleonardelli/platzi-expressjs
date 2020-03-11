const express=require('express')
const router=express.Router()
const ProductService = require('../../services/products')
const productService = new ProductService()

router.get('/', async function(req, res, next) {
  try {
    const { tags } = req.query
    res.status(200).json({
      data: await productService.getProducts({ tags }),
      message: 'product listed'
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async function(req, res, next) {
  try { 
    const id = req.params.id
    res.status(200).json({
      data: await productService.getProduct({ productId: id }),
      message: 'product retrived'
    })
  } catch (err) {
    next(err)
  }
})

router.post('/', async function(req, res, next) {
  try {
    const { body: product } = req
    res.status(201).json({
      data: await productService.createProduct({ product }),
      message: 'product created'
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const { body: product } = req.body
    res.status(200).json({
      data: await productService.updateProduct({ productId: id, product }),
      message: 'product updated'
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async function(req, res, next) {
  try {
    const id=req.params.id
    res.status(200).json({
      data: await productService.deleteProduct({ productId: id }),
      message: 'product deleted'
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router