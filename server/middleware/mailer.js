import nodemailer from "nodemailer";

export default (to, subject, text, html, errorCallback, sucessCallBack) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Boots Events Manager 👻" <gabrielsuave17@gmail.com>', // sender address
    to: to, // list of receivers
    subject: `${subject} ✔`, // Subject line
    text: text, // plain text body
    html: `${html}` // html body
  };

  // send mail with defined transport object
  // transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //         console.log(error);
  //         return false;
  //     }
  //     console.log('Message sent: %s', info.messageId);
  //     // Preview only available when sending through an Ethereal account
  //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  //     return true;
  // });
  transporter.sendMail(mailOptions, error => {
    if (error) return errorCallback();
    return sucessCallBack();
  });
};
