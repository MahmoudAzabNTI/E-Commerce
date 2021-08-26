require('dotenv').config();
const express = require('express');
const path = require('path');
const publicFiles = path.join(__dirname, '/public')
const authRoute = require('../routes/auth.route')
const userRoure = require('../routes/user.routes')
const orderRoute = require('../routes/order.route')
const routeProduct=require('../routes/product.routes')
const categoryRoutes = require('../routes/category.routes')
const app = express();
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicFiles))
app.use(cors())
app.use('/auth', authRoute)
app.use('/user', userRoure)
app.use('/order', orderRoute)
app.use(routeProduct)
app.use(categoryRoutes)

module.exports = app;