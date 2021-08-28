const response = require("../helpers/response.helper")

const User = require('../models/user.model');

const authorz=(req,res,next)=>{
    if(req.user.isAdmin !==true){
        const back=response(false,null,"this is not allow")
        res.status(404).send(back)
    }
    next()
}

module.exports=authorz;