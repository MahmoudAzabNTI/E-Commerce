const nodemailer  = require('nodemailer')
const sendActivationEmail = (receiveEmail, textEmail) => {
    try{
        const stmpConfig ={
            service: 'gmail',
            auth:{
                user:"marwaradwan666@gmail.com",
                pass:"123@Techs"
            }
        }
        const transporter = nodemailer.createTransport(stmpConfig)
        let mailOptions = {
            from:"marwaradwan666@gmail.com",
            to: receiveEmail,
            subject:"test mail",
            //text:"dfdsfdsfdsf",
            //html: `<h2>Helo from site <p>Email Activation</p></h2>`
            html: textEmail
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e)
    }
}
module.exports = sendActivationEmail;