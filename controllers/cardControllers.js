const Card = require('../models/Card')

exports.createCard = (req, res) => {
    Card.create({...req.body})
    .then(card => res.status(200).json({card}))
    .catch(err => res.status(500).json({err}))
}

exports.getAllCards = (req,res) =>{
    Card.find()
    .then(cards => res.status(200).json({cards}))
    .catch(err => res.status(500).json({err}))
}

exports.oneCard = (req, res) =>{
    const {id} = req.params
    Card.findById(id)
    .then(card => res.status(200).json({card}))
    .catch(err => res.status(500).json({err}))
}

exports.updateCard = (req, res) =>{
    const {id} = req.params
    Card.findByIdAndUpdate(id, {...req.body}, {new: true})
    .then(card => res.status(200).json({card}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteCard = (req, res) =>{
    const {id} = req.params
    Card.findByIdAndDelete(id)
    .then(card => res.status(200).json({card}))
    .catch(err => res.status(500).json({err}))
}