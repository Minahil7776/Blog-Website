//requiring all important packets
const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const port = process.env.PORT || 5000;
require("./db/conn");
const signRoute = require("./routers/sign");
const loginRoute = require("./routers/log")

app.use(cors());
app.use(body_parser.json({extended:true}));
app.use(body_parser.urlencoded({extended:true}));

// middleware function
function mymiddleware(req,res,next){
    next();
}

// defining function
app.use(mymiddleware)

// signup route
app.use("/SignUp",signRoute);
app.use("/",loginRoute)

//listening server
app.listen(port,()=>{
    console.log("Listening at port",port);
})