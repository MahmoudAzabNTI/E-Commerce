const multer = require('multer');
const fs = require('fs');
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const location = path.join('uploads/images/users', (req.user._id).toString())
        fs.mkdir(location, (err)=>{})
        cb(null, location)
    },
    filename: function(req, file, cb){
        const myName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, myName)
    }
})
const upload = multer({
    storage: storage,
    limits: {fileSize: '5mb'},
    fileFilter: function(req, file, cb){
        ext = path.extname(file.originalname)
        if(ext != '.jpg' && ext != '.png' && ext !='.jpeg' ) return cb(new Error ('invaild Extensions'))
        cb(null, true);
    }
})
module.exports = upload