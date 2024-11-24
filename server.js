const express=require('express');
const axios=require('axios');
const app=express();
require('dotenv').config();

app.set("view engine","ejs");
app.use(express.static('public'));

app.get('/home',(req,res)=>{
    res.render("home")
});


app.get('/login',(req,res)=>{
    res.render("login")
});



const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`listening on port${port}`)
    
});