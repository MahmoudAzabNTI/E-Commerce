const Contcategory = require('../models/category.model')
const responseCreator = require('../helpers/response.helper');
const addCategory = async(req,res)=>{
    const newInsert = new Contcategory(req.body)
    try{
        await newInsert.save()
        res.send(newInsert)   
    }
    catch(e){
     res.send(e)
    }
}

const getAllCat = async(req, res)=>{
    try{
        myData = await Contcategory.find()
        res.send(myData)
    }
    catch(e){
        res.send(e)
    }
}

const getSingCat= async(req,res)=>{
    const id = req.params.id
    try{
        result = await Contcategory.findById(id)
        if(!result) res.send('not found')
        res.send(result)
    }
    catch(e){
        res.send(e)
    }
}


const delCategory = async(req,res)=>{
    try{
        _id = req.params.id
      
        const data = await Contcategory.findByIdAndDelete(_id)
      
        if(!data) return res.status(400).send(responseCreator(false, null, "user not found"))
       
        res.status(200).send(responseCreator(true, data,  "deleted"))
    }
    catch(e){
        res.status(500).send( responseCreator(false, e.message, "error in delete"))
    }
}
const editCategory = async(req,res)=>{
    try{
        _id = req.params.id
       // console.log(id);
        allowed = ['name','color']
        requested = Object.keys(req.body)
        //console.log(requested);
        const isValidUpdates = requested.every(r=> allowed.includes(r))
        if(!isValidUpdates) return res.status(400).send(responseCreator(false, null,"invalid requested"))
        const categ = await Contcategory.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true})
        if(!categ) return res.status(404).send( responseCreator(false, null,"user not found"))
        res.status(200).send( responseCreator(true, categ,"updated"))
    }
    catch(e){
        res.status(500).send( responseCreator(false, e.message,"error in edit"))

    }
}

let upload =async (req,res)=>{
    req.category.image = req.file.path
    await req.user.save()
    res.send('done')
} 

module.exports={ upload,addCategory,getAllCat ,getSingCat,delCategory,editCategory}