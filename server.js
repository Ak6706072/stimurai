require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")



//app config
const app = express();


//middleware
app.use(express.json())






//for production environment
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
   
    app.get("*",(req,res)=>{
        console.log("hello")
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}


app.listen(process.env.PORT || 4000 ,() => {
    console.log("server Running")
} )