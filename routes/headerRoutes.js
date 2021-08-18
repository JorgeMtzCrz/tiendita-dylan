const router = require('express').Router()
const { createHeader, getAllHeaders, updateHeader, oneHeader, deleteHeader } = require('../controllers/headerControllers')

router.post('/create', createHeader)
router.get('/all', getAllHeaders)
router.get('/detail/:id', oneHeader)
router.patch('/update/:id', updateHeader)
router.delete('/delete/:id', deleteHeader)

module.exports = router