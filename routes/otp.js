// var http=require('http')
// var rand_num
// while(1){
// rand_num=parseInt(Math.random()*100000)
// if(rand_num>9999){
//     console.log(rand_num)
//     break
//  }
// }

// //-------------------------------mobile OTP-----------------------------------
// var toNumber='8818029153'
// var msg=rand_num
// var username='sourav.sharma9693@gmail.com'
// var hash='21ca9ac56c40b420583ea731b15f817229d43773e81ffa7caebec4b38f41e543'
// var sender='txtlcl'
// var data='username='+username+'&hash='+hash+'&sender='+sender+'&numbers='+toNumber+'&message='+msg;
// var options={
//     host:'api.textlocal.in',
//     path:'/send?'+data
// }

// callback=function(response){
//     var str=''
//     response.on('data',function(chunk){
//         str+=chunk
//     })
//     response.on('end',function(){
//         console.log(str);
//     })
// }
// http.request(options,callback).end()

// =================================================|||||||||||||||||||||||||||||||||=========================

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quizzier2018@gmail.com',
    pass: 'Quizzier#5@PieT'
  },tls:{
    rejectUnauthorized: false
}
});

var rand_num

exports.sendOtp=(toEmail)=>{

    while(1){
        rand_num=parseInt(Math.random()*100000)
        if(rand_num>9999){
            break
         }
        }
var mailOptions = {
  from: 'quizzier2018@gmail.com',
  to: toEmail,
  subject: 'QUIZZIER: "Making quiz easier..."',
  text: "Your OTP for quizzier registration is: " + rand_num.toString()
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

return {
     otp:rand_num,
     time:Date.now()
    }
}