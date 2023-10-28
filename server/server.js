const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Routes/productRoute');
require('dotenv').config();
app.listen(process.env.PORT,async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('connected at '+process.env.PORT +" along with database");
    } catch (error) {
        console.log(error.message)
    }
})

app.use(express.json());
app.use(routes)