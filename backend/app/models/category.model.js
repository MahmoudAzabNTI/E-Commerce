const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({

    // categoryId:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    name:{
        type:String,
        required:true,
        trim:true

    },
    color:{
        type:String,  
        trim:true
    },
    icon:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        default:""
    }



})
    const Category = mongoose.model("Category", categorySchema)
    module.exports = Category