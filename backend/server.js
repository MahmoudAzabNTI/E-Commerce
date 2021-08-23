const app = require('./src/app');
const mongoConnection = require('./db/mongo.connection')
app.set(mongoConnection)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running");
})