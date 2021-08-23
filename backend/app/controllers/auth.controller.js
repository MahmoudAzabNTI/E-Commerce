const User = require('../models/user.model')
const responseHelper = require('../helpers/response.helper');
const emailActivationHelper = require("../helpers/send-email.helper");
const qrcode = require('qrcode');
module.exports = {
    async registerUser(req, res){
        try {
            const userData = new User(req.body);
            qrcode.toString('I am a person', function(err, url){
                userData.qrCode = (url)
            })
            await userData.save();
            emailActivationHelper(userData.email, `activate link http://localhost:3000/auth/activate/${userData._id}`)
            const response = responseHelper(true, userData, "Data Inserted")
            res.status(200).send(response)
        } catch (error) {
            const response = responseHelper(false, error.message, "error inserting data")
            res.status(500).send(response)
        }
        
    },
    async activateUser(req, res){
        try {
            let user = await User.findById(req.params.id);
            if(!user) return res.status(404).send(responseHelper(fasle, null, "user not found"))
            if(user.status) return res.status(400).send(responseHelper(false, user, "user already active"))
            user.status = true;
            await user.save();
            res.status(200).send(responseHelper(true, user, "User is Activate now"))
        } catch (error) {
            res.status(500).send(responseHelper(false, error.message, "error 2 occured"))
        }

    },
    async loginUser(req, res){
        try {
            const userData = await User.findByCredintials(req.body.email, req.body.password);
            const token = await userData.generateToken()
            console.log(token);
            res.status(200).send(responseHelper(true, {userData,token}, "Login success"))
        } catch (error) {
            res.status(500).send(responseHelper(false, error.message, "error occured"))
        }
       
    },
    async loggedUser(req, res){
        try {
            res.status(200).send(responseHelper(true, req.user, "user is looged in"))
        } catch (error) {
            res.status(500).send(responseHelper(false, error.message, "error occred"))
        }
    },
    async logoutUser(req, res){
        try {
            req.user.tokens = req.user.tokens.filter(ele => ele.token != req.token);
            await req.user.save();
            res.status(200).send(responseHelper(true, {}, "Logged out"))
        } catch (error) {
            res.status(500).send(responseHelper(false, error.message, "error occred"))
        }
    },
    async logoutAllUser(req, res){
        try {
            req.user.tokens = [];
            await req.user.save();
            res.status(200).send(responseHelper(true, {}, "Logged all out"))
        } catch (error) {
            res.status(500).send(responseHelper(false, error.message, "error occred"))
        }
    }
}