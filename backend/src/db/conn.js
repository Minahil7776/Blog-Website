const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/stoyify-blog").then(
    ()=>{
        console.log("Connection successfull")
    }
).catch(
    (e)=>{
        console.log("Error",e)
    }
)