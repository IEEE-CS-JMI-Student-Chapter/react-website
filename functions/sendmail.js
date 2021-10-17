var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ieeecsjmimails@gmail.com',
           pass: 'ieeecsjmi@2024'
       }
});

function sendMail(name,mail,body)
{
    const mailOptions = {
        from: 'ieeecsjmimails@gmail.com', // sender address
        to: 'ieeecsjmi@email.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>'// plain text body
      };
      
      
      transporter.sendMail(mailOptions, function (err, info) {
         if(err)
           console.log(err)
         else
           console.log(info);
      });   
      
      return {
          status: 200,
          body: "Message Sent"
      }
}


exports.handler = async (e) => {
    return "Found"
    // if(e.httpMethod === 'GET')
    // {
    //     return "This is get"
    // }else if(e.httpMethod === 'POST')
    // {
    //     return "This is post" 
    // }
}