const OTP = require('../models/otpModel');
const nodemailer = require('nodemailer');

module.exports = {
  requestPasswordReset: (req, res) => {
    const email = req.body.email;

    // Generate a random OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Send the OTP to the user's email
    const transporter = nodemailer.createTransport({
      service: 'your-email-service',
      auth: {
        user: 'your-email-username',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email-username',
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to send OTP' });
      }

      OTP.create({ email, otp, status: 0 }, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to create OTP' });
        }
        return res.json({ message: 'OTP sent successfully' });
      });
    });
  },

};
