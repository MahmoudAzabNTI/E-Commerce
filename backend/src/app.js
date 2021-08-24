require('dotenv').config();
const express = require('express');
const path = require('path');
const publicFiles = path.join(__dirname, '/public')
const authRoute = require('../routes/auth.route')
const userRoure = require('../routes/user.route')
const routeProduct=require('../routes/router.product')
const categoryRoutes = require('../routes/category.routes')
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(publicFiles))
app.use('/auth', authRoute)
app.use('/user', userRoure)
app.use(routeProduct)
app.use(categoryRoutes)

module.exports = app;