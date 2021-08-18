const Banner = require('../models/Banner')

exports.createBanner = (req, res) => {
    Banner.create({...req.body})
    .then(banner => res.status(200).json({banner}))
    .catch(err => res.status(500).json({err}))
}

exports.getAllBanners = (req,res) =>{
    Banner.find()
    .then(banners => res.status(200).json({banners}))
    .catch(err => res.status(500).json({err}))
}

exports.oneBanner = (req, res) =>{
    const {id} = req.params
    Banner.findById(id)
    .then(banner => res.status(200).json({banner}))
    .catch(err => res.status(500).json({err}))
}

exports.updateBanner = (req, res) =>{
    const {id} = req.params
    Banner.findByIdAndUpdate(id, {...req.body}, {new: true})
    .then(banner => res.status(200).json({banner}))
    .catch(err => res.status(500).json({err}))
}

exports.deleteBanner = (req, res) =>{
    const {id} = req.params
    Banner.findByIdAndDelete(id)
    .then(banner => res.status(200).json({banner}))
    .catch(err => res.status(500).json({err}))
}