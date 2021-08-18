const nodemailer = require('nodemailer')

const transpoter = nodemailer.createTransport({
    service: 'Sendgrid',
    auth: {
        user: process.env.SGUSER,
        pass: process.env.SGPASS
    }
})

exports.sendEmail = (email, name) =>{
    return transporter.sendEmail({
        from: '"Dylan Chayanne" <contact@dylan.com>',
        to: [email],
        subject: 'Gracias por la compra',
        html: `
        <h1>Hola</h1>
        
        `
    })
}