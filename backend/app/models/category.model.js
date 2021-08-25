const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({

  
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

categorySchema.virtual('catagoryProduct',{
    ref:'product',
    localField:'_id',
    foreignField:'categoryId'
})
    const Category = mongoose.model("Category", categorySchema)
    module.exports = Category