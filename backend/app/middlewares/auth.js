const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const responseHelper = require("../helpers/response.helper")

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWTSECRET);
        const user = await User.findOne({_id: decodedToken._id, 'tokens.token': token})
        if(!user) throw new Error("please authentaction")
        req.user= user;
        req.token = token;
        next()
    } catch (error) {
        res.status(500).send(responseHelper(false, error.message, "Not authentaction"))
    }
    
}
module.exports = auth;