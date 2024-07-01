const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const artworkRoutes = require('./routes/artworks.js');
const blogPostRoutes = require('./routes/blogPosts.js');


dotenv.config();

const app =express();
const port= process.env.PORT||6000;

const corsOptions={
   origin:true
}


mongoose.set('strictQuery', false)
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true,
        })
        console.log('MONGO is connected')
    } catch(err){
        console.log("failed to connect with MONGO DB")
    }
}



app.use(express.json());
 app.use(cookieParser());
 app.use(cors(corsOptions));

//middleware
 app.use('/api/v1/artworks', artworkRoutes);
app.use('/api/v1/blogposts', blogPostRoutes);


 app.listen(port,()=>{
    connectDB();
    console.log(`server is running on port:`+ port);
 })
