const router = require('express').Router()
const { createProduct, getAllProducts, updateProduct, oneProduct, deleteProduct } = require('../controllers/productControllers')

router.post('/create', createProduct)
router.get('/all', getAllProducts)
router.get('/detail/:id', oneProduct)
router.patch('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

module.exports = router