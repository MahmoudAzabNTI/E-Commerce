const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
        
    },
    
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:4,
        unique:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true,
        minlength:8,
    },
    images:[
        {
            type:String,
            default:''
        }
    ],
    brand:{
        type:String,
        trim:true,
        maxlength:10,
    },
    countInStack:{
        type:Number
    },
    rating:{
        type:Number
    },
    isFeatured:{
        type:Boolean
    },
    qr:{
        type:String
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    }

})

const product=mongoose.model('product',productSchema)
module.exports=product