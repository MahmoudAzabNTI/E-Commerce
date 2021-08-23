const mongoose = require('mongoose');
try {
    mongoose.connect(process.env.MONGODB,{
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo DB is Connected");
    }).catch(() =>{
        console.log("Mongo DB is DisConnected");
    })
} catch (error) {
    console.log(error);
}


module.exports = mongoose;