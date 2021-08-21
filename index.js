const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const path = require('path');
const { getMaxListeners } = require('process');

const PORT = process.env.PORT || 5000;

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'admin@example.com',
            pass: 'password01'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'admin@example.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));