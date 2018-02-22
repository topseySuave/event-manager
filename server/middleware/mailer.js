import nodemailer from 'nodemailer';

export default (to, subject, text, html) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.gistout.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'gabrielsuave17@gmail.com', // generated ethereal user
            pass: 'gabmicah'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
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
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return true;
    });
};