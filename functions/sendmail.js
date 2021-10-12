var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ieeecsjmimails@gmail.com',
    pass: 'ieeecsjmi@2024'
  }
});

function sendMail(subject, mail, body) {
  const html = `${mail}<br /> ${body}`;
  const mailOptions = {
    from: 'ieeecsjmimails@gmail.com', // sender address
    to: 'alamsarfraz422@gmail.com', // list of receivers
    subject: subject, // Subject line
    html: html// plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}


exports.handler = async (e) => {
  if (e.httpMethod == 'GET') {
    return {
      statusCode: 200,
      body: "Send Mail"
    }
  }else if(e.httpMethod === 'POST')
  {
    data = JSON.parse(e.body);
    console.log(data);
    sendMail(data.subject,data.mail,data.message)
    return {
      statusCode: 200,
      body: "Message has been sent"
    }
  }
}