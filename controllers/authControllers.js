const User = require('../models/User')
const {createToken} = require('../config/jwt')


exports.signUp = (req, res, next) =>{
    User.register({...req.body}, req.body.password)
    .then(user => res.status(201).json({user}))
    .catch(err => res.status(500).json({err}))
}

exports.login = (req, res, next) => {
    const {user} = req
    const [header, payload, signature] = createToken(user)

    res.cookie('headload', `${header}.${payload}`, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        sameSite: true
     })

    res.cookie('signature', signature, {
        httpOnly: true,
        sameSite: true,
    })

    res.status(200).json({user})
}

exports.loggedUser = (req, res, next) => {
    const {user} = req
    console.log(user)
    res.status(200).json({user})
}

exports.logout = (req, res, next) =>{
    res.clearCookie('headload')
    res.clearCookie('signature')
    res.status(200).json({msg: 'saliste chido'})
}