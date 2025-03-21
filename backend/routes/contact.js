const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'contactform.toplife@gmail.com',  // Your new email
      pass: 'rrva dmxp nmzu jphu'  // The app password you generated
    }
  });
  
  const mailOptions = {
    from: `"${name}" <contactform.toplife@gmail.com>`,  // Use your form email as sender
    replyTo: `"${name}" <${email}>`,  // Set the reply-to as the user's email
    to: "jessekayombo09@gmail.com", // Client's email
    subject: `Website Contact Form Submission from ${name}`,  // Include name in subject
    messageId: `<form-${Date.now()}-${Math.random().toString(36).substring(2, 15)}@yourdomain.com>`, // Unique message ID
    headers: {
      'X-Entity-Ref-ID': `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`, // Unique reference ID
    },
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`, // Format for better readability
  };
  
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Error in sending email', error });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });  
  
});

module.exports = router;
