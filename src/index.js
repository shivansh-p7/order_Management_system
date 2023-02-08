const express= require("express");
const mongoose=require('mongoose');
const app=express()
const route=require('./routes/route')

app.use(express.json())
mongoose.set({strictQuery:true})
mongoose.connect("",{newUrlParser:true})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err.message))

app.use('/',route)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})