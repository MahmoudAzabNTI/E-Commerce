const multer=require('multer');
const fs=require('fs')
const path=require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const location=path.join("uploads/images/products",(req.params.id).toString())
        fs.mkdir(location,(err)=>{})
      cb(null,location)
    },
    filename: function (req, file, cb) {
      const myname =file.fieldname+"-"+Date.now()+path.extname(file.originalname)
      cb(null, myname)
    }
  })


const upload = multer({storage:storage,
 
  limits:{ fileSize: 2050000},
  fileFilter: function(req, file, callback){
    ext = path.extname(file.originalname)
    if(ext!= ".png"&&ext!=".jpg") return callback(new Error('invalid Extension'))
    callback(null, true)
}
    
})
module.exports=upload