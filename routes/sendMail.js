var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'quizzier2018@gmail.com',
        pass: 'Quizzier#5@PieT'
    },tls: {
        rejectUnauthorized: false
    }
    });
exports.sendMail=(sendTo,text)=>{
    var mailOptions = {
        from: 'quizzier2018@gmail.com',
        to: sendTo,
        subject: 'Thanks for choosing Quizzier',
        text: text
        };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
    