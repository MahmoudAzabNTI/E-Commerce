const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 20
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            valdate(value){
                if(validator.isEmail(value)) throw new Error("invalid email")
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
            min: 5,
            validate(value){
                if(value.toLowerCase().includes('pass') || value.toLowerCase().includes('abs') || value.includes('123')) throw new Error("password is week")
            }
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        phone: {
            type: String,
            trim: true,
            validate(value){
                if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error("invalid phone number")
            },
            
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: true,
        },
        addresses: [
            {
                address:{
                    addrStreet: {
                        type: String,
                        trim: true
                    },
                    addrAparment: {
                        type: String,
                        trim: true
                    },
                    addrDetails: {
                        type: String,
                        trim: true,
                    },
                    addrCity: {
                        type: String,
                        trim: true,
                    },
                    addrCountry: {
                        type: String,
                        trim: true,
                    },
                }
            }
        ],
        image: {
            type: String,
            default: "",
        },
        images: [
            {
                image: {
                    type: String
                }
            }  
        ],
        bod: {
            type: Date,
        },
        status: {
            type: Boolean,
            default: false,
        },
        tokens: [
            {
                token: {
                    type: String
                }
            }
        ], 
        qrCode: {
            type: String
        },
    },
    {timestamps: true}
)

// schema methods
// handle response
userSchema.methods.toJSON = function(){
    const user = this.toObject();
    let deleted = ['password', 'addresses', 'tokens', '__v'];
    deleted.forEach(item => {
        delete user[item]
    })
    return user
}
// encrypt password
userSchema.pre('save', async function (next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
// login user
userSchema.statics.findByCredintials = async(email, pass) => {
    const user = await User.findOne({email});
    if(!user) throw new Error ('invaild email')
    const isValidPass = bcrypt.compare(pass, user.password);
    if(!isValidPass) throw new Error ('invaild passord')
    if(user.tokens.length >= 5) throw new Error("executed number of logines")
    return user;
}
userSchema.methods.generateToken = async function(){
    let user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWTSECRET)
    user.tokens = await user.tokens.concat({token});
    await user.save();
    return token
}
const User = mongoose.model('User', userSchema);

module.exports = User;