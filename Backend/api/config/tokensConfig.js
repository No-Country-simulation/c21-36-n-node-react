const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const secretKey = process.env.JWTSECRETKEY

function createtoken(payload, duration){
if (!secretKey )throw new Error("secret key error");

if(!duration){
  return jwt.sign(payload, secretKey)
}else{
  const token = jwt.sign(payload, secretKey,{
    expiresIn:`${duration}`
  })
  return token
}
}

function verifytoken(token){
  if (!secretKey )throw new Error("secret key error");
  try{
    return jwt.verify(token, secretKey)
  }catch(error){
       if(error instanceof jwt.TokenExpiredError){
        throw new Error("token expired")
       }else{
        throw new Error("token invalid")
       }
  }
};

module.exports = {createtoken, verifytoken}