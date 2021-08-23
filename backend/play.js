// const nodemailer = require('nodemailer')

// try{
//     const stmpConfig ={
//         service: 'gmail',
//         auth:{
//             user:"marwaradwan666@gmail.com",
//             pass:"123@Techs"
//         }
//     }
//     const transporter = nodemailer.createTransport(stmpConfig)
//     let mailOptions = {
//         from:"Social App",
//         to:"marwaradwan6@gmail.com",
//         subject:"test mail",
//         text:"hello test"
//     }
//     transporter.sendMail(mailOptions)
// }
// catch(e){
//     console.log(e)
// }
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/images/users/' })
const fs = require('fs')
const app = express()

app.post('/profile', upload.single('image'), function (req, res, next) {
  data = req.file
  let ext = (data.originalname.split('.')).pop()
  newFileNmae = data.destination + req.file.filename +  '.' + ext
  fs.rename(req.file.path, newFileNmae, function(err){
      if(err) console.log(err)
      else console.log("done");
  })
  res.send(req.file)
})
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
  app.listen(4000)