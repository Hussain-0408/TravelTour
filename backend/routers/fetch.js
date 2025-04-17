let express = require("express")
let app = express();
let mongodb = require("mongodb")
let bodyparser = require("body-parser")
const connect = require("mongodb")
let client = mongodb.MongoClient


let fetchdata = express.Router().get("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/project1",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("storedata").find().toArray((err,result)=>{
                if(err){
                    throw err
                }else{
                    res.send(result)
                }
            })
        }
    })
})
module.exports = fetchdata