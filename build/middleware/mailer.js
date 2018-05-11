"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodemailer = require("nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (to, subject, text, html, errorCallback, sucessCallBack) {
  // create reusable transporter object using the default SMTP transport
  var transporter = _nodemailer2.default.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // setup email data with unicode symbols
  var mailOptions = {
    from: '"Boots Events Manager 👻" <gabrielsuave17@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject + " \u2714", // Subject line
    text: text, // plain text body
    html: "" + html // html body
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
  transporter.sendMail(mailOptions, function (error) {
    if (error) return errorCallback();
    return sucessCallBack();
  });
};
//# sourceMappingURL=mailer.js.map