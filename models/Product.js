const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    title: String,
    description: String,
    category: {type: String, enum: ['TV', 'PHONE', 'COMPUTER', 'HEADPHONE']},
    price: Number,
    img: [{name: String, newPath:{id: String, url: String}}],
    stock: Boolean,
    discount: Number,
    url: String,
    available: {type: Boolean, default: false}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', productSchema)