const Header = require('../models/Header')

exports.createHeader = (req, res) => {
    Header.create({...req.body})
    .then(header => res.status(200).json({header}))
    .catch(err => res.status(500).json({err}))
}

exports.getAllHeaders = (req,res) =>{
    Header.find()
    .then(headers => res.status(200).json({headers}))
    .catch(err => res.status(500).json({err}))
}

exports.oneHeader = (req, res) =>{
    const {id} = req.params
    Header.findById(id)
    .then(header => res.status(200).json({header}))
    .catch(err => res.status(500).json({err}))
}

exports.updateHeader = (req, res) =>{
    const {id} = req.params
    Header.findByIdAndUpdate(id, {...req.body}, {new: true})
    .then(header => res.status(200).json({header}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteHeader = (req, res) =>{
    const {id} = req.params
    Header.findByIdAndDelete(id)
    .then(header => res.status(200).json({header}))
    .catch(err => res.status(500).json({err}))
}