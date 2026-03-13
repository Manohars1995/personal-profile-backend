const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{

const token=req.headers.authorization

if(!token){

return res.status(401).json("Unauthorized")

}

try{

const decoded=jwt.verify(token,process.env.JWT_SECRET)

req.user=decoded

next()

}catch(error){

res.status(400).json("Invalid Token")

}

}

module.exports=auth