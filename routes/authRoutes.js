const router = require('express').Router()
const passport = require('../config/passport')
const {verifyToken} = require('../config/jwt')
const { signUp, login, loggedUser, logout } = require('../controllers/authControllers')

router.post('/signup', signUp)
router.post('/login', passport.authenticate('local'), login)
router.get('/logged', verifyToken, loggedUser)
router.get('/logout', logout)

module.exports = router