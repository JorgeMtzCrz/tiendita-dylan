const Product = require('../models/Product')

exports.createProduct = (req,res) =>{

    Product.create({...req.body})
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.getAllProducts = (req,res) =>{
    Product.find()
    .then(products => res.status(200).json({products}))
    .catch(err => res.status(500).json({err}))
}

exports.oneProduct = (req, res) =>{
    const {id} = req.params
    Product.findById(id)
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.updateProduct = (req, res) =>{
    const {id} = req.params
    Product.findByIdAndUpdate(id, {...req.body}, {new: true})
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteProduct = (req, res) =>{
    const {id} = req.params
    Product.findByIdAndDelete(id)
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(500).json({err}))
}