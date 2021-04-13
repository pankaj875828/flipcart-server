const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//routes

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth')

//env config

env.config();

//mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.n5qy9.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true
    }
).then(()=>{
    console.log('connected successfully')
}).catch((err)=>{
    console.log(err)
});

//middleware

app.use(bodyParser());
app.use('/api',authRoutes)
app.use('/api',adminRoutes)



//server ruuning 

app.listen(process.env.PORT,()=>{
    console.log(`server runing on port ${process.env.PORT}`);
})