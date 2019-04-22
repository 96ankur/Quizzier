const winston = require('winston');

module.exports = function(err, req, res, next){

  let duplicate_key = ""                            // this is for user signup, if one of these details exist
  
//   if(err.message.includes('userName'))
//       duplicate_key='User Name already exist!'
//   else if(err.message.includes('userEmail'))
//       duplicate_key='Email Id already exist!'
//   else if(err.message.includes('userPhone'))
//       duplicate_key='Phone number already exist!'
//   else if(err.message.includes('userAadhar'))
//       duplicate_key='Aadhar number already exist!' 
  
//   if(duplicate_key){
//     return res.status(500).send(duplicate_key);
//   }

  winston.error(err.message, err);
  res.status(500).send('Something went wrong.');
}