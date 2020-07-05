import express from "express";

const app = express();

const PORT = 4000;

const handlelistening =() => console.log(`Listening on : ${PORT}`);

const handleHome = (req,res)=>res.send("hello from jrjr!!!");

const handleProfile = (req,res)=>res.send("this is profile");

const betweenHome = (req,res,next)=>{
    console.log("I'm between home...")
    next();
}

app.use(betweenHome);
app.get("/", handleHome);
app.get("/profile",handleProfile);


app.listen(PORT,handlelistening)