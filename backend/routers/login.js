let express = require("express")
// let bodyparser = require("body-parser")
let mongodb = require("mongodb")
 let client = mongodb.MongoClient
 

let login = express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/project1",(err,client)=>{
        if(err){
            throw err
        }else{
            db.collection("storedata").find({"email":req.body.email}).toArray((err,result)=>{
                if(err){
                    throw err
                }else{
                    if(result.length>=1){
                        if(result[0].password === req.body.password){
                            res.status(200).send("Login successful")
                        }else{
                            res.status(200).send("Invalid Password")
                        }
                    }else{
                        res.status(200).send("User doesn't exist")
                    }

                }
            })
        }
    })
})

module.exports = login