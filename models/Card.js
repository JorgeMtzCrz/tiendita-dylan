const {Schema, model} = require('mongoose')

const cardSchema = new Schema({
    title: String,
    subtitle: String,
    img: String,
    description: String,
    available: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Card', cardSchema)