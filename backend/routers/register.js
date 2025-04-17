let express = require("express")
let bodyparser = require("body-parser")
let mongodb = require("mongodb")
let client = mongodb.MongoClient
  
let register = express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/project1",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("storedata").insertOne(req.body,(err,result)=>{
                if(err){
                    throw err
                }else{
                   
                //    res.send(result);
                   res.send("Registered succesfully")
                }
            })
        }
    })
})

module.exports = register;