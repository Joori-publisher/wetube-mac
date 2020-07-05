const express = require('express');
const app = express();

const PORT = 4000;

const handlelistening =() => {
    console.log(`Listening on : ${PORT}`);
}

const handleHome = (req,res)=>{
    console.log(req);
    res.send("hello from home!!!")
}
const handleProfile = (req,res)=>{
    res.send("this is profile")
}
app.get("/",handleHome);
app.get("/profile",handleProfile);

app.listen(PORT,handlelistening)