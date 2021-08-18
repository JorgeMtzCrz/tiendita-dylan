const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    email: String,
    name: String,
    birthdate: Date,
    img: String,
    username: String,
    role: {
        type: String,
        enum: ['ADMIN', 'WORKER'],
        default: 'WORKER'
    },
    googleID: String
},{
    timestamps: true,
    versionKey: false,
})

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = model('User', userSchema)