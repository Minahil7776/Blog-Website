const express = require("express");
const router = express.Router();
const User = require("../db/userSchema");

router.post("/", async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        res.status(404).json({message:"Please fill all the fields"})
    }
    try{
    const user = await User.findOne({email:email})
    if(!user){
        res.status(404).json({message:"Account does not exist"})
    }
    if(user.password !== password){
        res.status(404).json({message:"Invalid email or password"})
    }
    return res.status(200).json({message:"Login successfully"})
}catch(error){
    return res.status(500).json({message:"Internal server error"})
}
})

module.exports = router;
