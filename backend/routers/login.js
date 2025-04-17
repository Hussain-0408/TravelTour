let express = require("express")
// let bodyparser = require("body-parser")
let mongodb = require("mongodb")
 let client = mongodb.MongoClient
 

let register = express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/project1",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("storedata").find({"email":req.body.email}).toArray((err,result)=>{
                if(err){
                    throw err
                }else{
                    if(result.length>=1){
                        if(result[0].password === req.body.password){
                            res.send("Login successful")
                        }else{
                            res.send("Invalid Password")
                        }
                    }else{
                        res.send("User doesn't exist")
                    }

                }
            })
        }
    })
})

module.exports = register