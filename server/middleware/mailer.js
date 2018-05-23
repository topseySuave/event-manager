import nodemailer from 'nodemailer';

export default (to, subject, text, html, errorCallback, sucessCallBack) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    // sender address
    from: '"Boots Events Manager 👻" <gabrielsuave17@gmail.com>',
    to, // list of receivers
    subject: `${subject} ✔`, // Subject line
    text, // plain text body
    html: `${html}` // html body
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return errorCallback();
    return sucessCallBack();
  });
};
