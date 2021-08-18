const router = require('express').Router()
const { createCard, getAllCards, updateCard, oneCard, deleteCard } = require('../controllers/CardControllers')

router.post('/create', createCard)
router.get('/all', getAllCards)
router.get('/detail/:id', oneCard)
router.patch('/update/:id', updateCard)
router.delete('/delete/:id', deleteCard)

module.exports = router