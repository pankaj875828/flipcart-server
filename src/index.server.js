const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const cors = require('cors')
//routes

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');



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

app.use(cors())
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
app.use('/api',authRoutes)
app.use('/api',adminRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',cartRoutes)





//server ruuning 

app.listen(process.env.PORT,()=>{
    console.log(`server runing on port ${process.env.PORT}`);
})