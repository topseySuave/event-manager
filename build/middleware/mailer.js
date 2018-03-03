'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (to, subject, text, html) {
    // create reusable transporter object using the default SMTP transport
    var transporter = _nodemailer2.default.createTransport({
        host: 'mail.gistout.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'noreply@gistout.com', // generated ethereal user
            pass: 'gabmicah' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"Boots Events Manager 👻" <noreply@gistout.com>', // sender address
        to: to, // list of receivers
        subject: subject + ' \u2714', // Subject line
        text: text, // plain text body
        html: '' + html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', _nodemailer2.default.getTestMessageUrl(info));
        return true;
    });
};
//# sourceMappingURL=mailer.js.map