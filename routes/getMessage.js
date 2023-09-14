const express = require('express');
const router = express.Router();

require('dotenv').config();

const nodemailer = require("nodemailer");

router.post('/sendMessage', (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        // main(data.name, data.email, data.message).catch(console.error);

        res.status(200).json({message: "Your message was sent!"});
    } catch (error) {
        console.error(error);
    }
});

const transporter = nodemailer.createTransport({
    host: process.env.transporter_host,
    port: process.env.transporter_port,
    auth: {
        user: process.env.transporter_user,
        pass: process.env.transporter_pass
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(name, email, message) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: `"${process.env.email}"`, // list of receivers
      subject: `Message from ${name}`, // Subject line
      text: `${message}`, // plain text body
      html: `${message}`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
}

module.exports = router;