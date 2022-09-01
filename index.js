const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/About",(req,res)=>{
    res.res("About")
})

app.get("/Contact",(req,res)=>{
    res.send("Contact")
})

app.listen(5000,()=>{
    console.log("Server is running at 5000")
})