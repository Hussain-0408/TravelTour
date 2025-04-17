let express = require("express")
let app = express()
let bodyparser = require("body-parser")
let mongodb = require("mongodb")
let client = mongodb.MongoClient;

let updateuser = express.Router().put("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/project1",(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection("storedata").updateOne({"email":req.body.email},{$set:(req.body)},(err,result)=>{
                if(err){
                    throw err;
                }else{
                    // res.send(result);
                    res.send("updated succesfully")
                }
            })
        }
    })
})
module.exports = updateuser